import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, Button, ListItem, ButtonGroup, ThemeConsumer } from 'react-native-elements';
import WordCloud from "../WordCloud/WordCloud";
import Plan from "../Plan/Plan";
import Searchbar from "../SearchBar/SearchBar";
import Styles from "../StyleSheet/Style";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";


class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFloorId: 0, // number representing the current floor
            infoShown: false, // boolean : true if the card of the stand nned to be shown, false otherwise
            standShown: undefined, //object containing the stand selected 
            isLoading: true, //true if the database is not loaded, false otherwise
            keyisChosen: false, //true if a keyword is selected, false otherwise
            keywordPressed: undefined, //object containing the selected keyword
            showUpArr: true, //boolean : true if the up arrow need to be shown, false otherwise
            showDownArr: false, //boolean : true if the down arrow need to be shown, false otherwise
            event: undefined, //object containing the datas from the database
            switchDisplay: false, //boolean : true if the display is switch, false otherwise
            keywordsStats: undefined, //object containing a list of all the keywords and the corresponding stands
        }
    }
    
    /*  this function return true if the field keywordId of obj id equal to id
    */
    filtrerParIDkw(obj, id) {
        if (obj.keywordId == id) {
            return true;
        }
    }

    /*  this function return true if the field _id of obj id equal to id
    */
    filtrerParID(obj, id) {
        if (obj._id == id) {
            return true;
        }
    }

    /*  this function add 1 to the the state currentFloorId
    *   and update the states of showUpArr et showDownArr 
    */
    OnPressChangeFloorUp() {
        if (this.state.currentFloorId < this.state.event.floors.length - 2) {
            this.setState({ currentFloorId: this.state.currentFloorId + 1});
            this.setState({ showUpArr: true, showDownArr: true });
        }
        else {
            this.setState({ currentFloorId: this.state.currentFloorId + 1 });
            this.setState({ showUpArr: false, showDownArr: true });
        }

    }

    /*  this function sub 1 to the the state currentFloorId
    *   and update the states of showUpArr et showDownArr 
    */
    OnPressChangeFloorDown() {
        if (this.state.currentFloorId > 1) {
            this.setState({ currentFloorId: this.state.currentFloorId - 1 });
            this.setState({ showUpArr: true, showDownArr: true });
        }
        else {
            this.setState({ currentFloorId: this.state.currentFloorId - 1 });
            this.setState({ showUpArr: true, showDownArr: false });
        }
    }

    /*  s is a stand 
    *   this function change the state of infoShown into true
    *   and change the value standShown into s 
    */
    OnPressStandHandler(s) {
        this.setState({ infoShown: true });
        this.setState({ standShown: s }, () => {this.showInfo()});
    }

    /*  k is a an object from keywordstats
    *   keyisChosen is set to true and the keywordPressed value is changed into k
    */
    OnPressKeyWordHandler(k) {
        this.setState({ keyisChosen: true });
        this.setState({ keywordPressed: k });
    }

    /*  k is a keywordstats.standList object
    *   this function change the state of infoShown into true and keyisChosen into false
    *   it also searches which stand in the state event is matching k
    *   and put it into this.state.standShown
    */
    OnPressCompanyHandler(k) {       
        let floors = this.state.event.floors;
        let s = undefined
        let search = undefined
        for (var floor in floors)
        {
            search = (floors[floor].stands.find(item => this.filtrerParID(item, k.standId)))
            if (search!= undefined)
                s = search        
        }
        this.setState({ infoShown: true });
        this.setState({ keyisChosen: false });
        this.setState({ standShown: s })
    }

    /*  return the object event.floors[_id]
    */
    getFloor(_id) {
        floor = this.state.event.floors[_id];
        return floor;
    }
    /* handler for the back button of getDescription
    */
    buttonBackClickListener = () => {
        this.setState({ infoShown: false });
    }

    /* handler for the back button of getkey
    */
    buttonBackkwClickListener = () => {
        this.setState({ keyisChosen: false });
    }

    /* handler for the button switch display
    */
    buttonSwitchClickListener = () => {
        if (this.state.switchDisplay) {
            this.setState({ switchDisplay: false })
        } else {
            this.setState({ switchDisplay: true })
        }
    }

    /*  return a component Card containing infos about the stand s
    */
    getDescription(s) {
        return (
            <Card containerStyle={Styles.cardContainer}>
                <Card.Title style={Styles.inputSearch}>{s.name}</Card.Title>
                <Card.Divider />
                <Text style={Styles.textInfo}>
                    <Text style={{fontWeight:'bold'}}>Responsable  </Text> <Text style={Styles.textInfo}>{s.respo}{"\n"}</Text>
                    <Text style={{fontWeight:'bold'}}>Heure de début  </Text> <Text style={Styles.textInfo}>{s.starthour}{"\n"}</Text>
                    <Text style={{fontWeight:'bold'}}>Heure de fin  </Text> <Text style={Styles.textInfo}>{s.endhour}{"\n"}</Text>
                    <Text style={{fontWeight:'bold'}}>Mots-clés  </Text>
                        {
                            s.keywords.map((l, i) => (
                                    <Text key={i} style={Styles.textInfo}>
                                         {" "}{l.name}{" "}
                                    </Text>
                            ))
                        }{"\n"}
                </Text>
                <Card.Divider />
                <Text style={Styles.paragraph}> 
                    {s.resume}
                </Text>
                <Button
                    buttonStyle={Styles.backButton}
                    title='Back'
                    titleStyle={Styles.inputSearch}
                    onPress={this.buttonBackClickListener} />
            </Card>);
    }
    
    /*  k is an object of keywordsStats
    *   return a View containing the list of the stand names matching the keyword k
    */
    getKey(k) {
        const filtered = this.state.keywordsStats.find(item => this.filtrerParIDkw(item, k.keywordId))
        return (
            <View style={Styles.boxCompany}>
                <Text style={Styles.titleBoxCompany}> Companies </Text>
                {
                    filtered.standList.map((l, i) => (
                        <ListItem key={i} containerStyle={{backgroundColor: '#ffe4c4', borderRadius:27}} topDivider onPress={() => { this.OnPressCompanyHandler(l); }} >
                            <ListItem.Content>
                                <ListItem.Title style={Styles.listCompany}>{l.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
                <Button
                    buttonStyle={Styles.backButton}
                    title='Back'
                    titleStyle={Styles.inputSearch}
                    onPress={this.buttonBackkwClickListener} />
            </View>);
    }

    /*  return the component Plan 
    */
    drawPlan() {
        let floor = this.getFloor(this.state.currentFloorId);
        if (this.state.infoShown) {
            return (
                <View style={Styles.planContainer}>
                    <Plan currFloor={floor} floorId={this.state.currentFloorId} showUpArr={this.state.showUpArr} showDownArr={this.state.showDownArr} upHandler={this.OnPressChangeFloorUp.bind(this)} downHandler={this.OnPressChangeFloorDown.bind(this)} handler={this.OnPressStandHandler.bind(this)} clickedStandId={this.state.standShown.id}/>
                </View>
            );
        }
        else 
            return (
                <View style={Styles.planContainer}>
                    <Plan currFloor={floor} floorId={this.state.currentFloorId} showUpArr={this.state.showUpArr} showDownArr={this.state.showDownArr} upHandler={this.OnPressChangeFloorUp.bind(this)} downHandler={this.OnPressChangeFloorDown.bind(this)} handler={this.OnPressStandHandler.bind(this)}/>
                </View>
            );
    }

    /*  return a text if infoshown is false, and call getDescription otherwise
    */
    showInfo() {
        if (this.state.infoShown) {
            return (
                <Text> {this.getDescription(this.state.standShown)} </Text>
            );
        }
        return (
            <View>
                <Text style={Styles.textInfo}> Select a Stand to see more Info </Text>
            </View>
        );
    }

    /*  return a text if keyisChosen is false, and call getKey otherwise
    */
    showKeyWord() {
        if (this.state.keyisChosen) {
            return (
                <Text> {this.getKey(this.state.keywordPressed)} </Text>
            );
        }
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={Styles.textInfo}> Select a KeyWord to see more Info </Text>
                {this.showWordCloud()}
            </View>
        );
    }

    /* return the component WordCloud
    */
    showWordCloud() {
        return <WordCloud keywordsArray={this.state.keywordsStats} OnPressHandler={this.OnPressKeyWordHandler.bind(this)} />
    }

    /* return the component Searchbar
    */
    showSearchbar() {
        return <Searchbar OnPressKeyWordHandler={this.OnPressKeyWordHandler.bind(this)} allKeywords={this.state.keywordsStats} />
    }

    /*  return the component Header
    */
    showHeader() {
        return <Header eventName={this.state.event.name} logoHostPath={this.state.event.logoHost} logoEventPath={this.state.event.logoEvent} host="http://10.192.48.95:3001/" />
    }

    /*  fetch the database from the server and put it into this.state.event 
    *   set this.state.isLoading to false if no error occured while fetching
    */
    UNSAFE_componentWillMount() {
        fetch("http://10.192.48.95:3001/send")
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ event: responseJson.data[0] });
                this.setState( {keywordsStats: this.state.event.keywordsStats});
                this.setState({ isLoading: false });
                if (this.state.event != undefined && this.state.event.floors != undefined)
                    this.setState({ showUpArr: (this.state.event.floors.length < 2) ?  false : true});
                console.log(this.state.event.floors.length)
                console.log(this.state.showUpArr)
            }).catch(err => { console.log(err) })
    }

    /*  return a view containing all the functions returning a component
    *   modify the place of showKeyWord and DrawPlan based on the value of this.state.switchDisplay
    */
    showAll() {
        if (this.state.switchDisplay) {
            return <View style={Styles.layer}>
                {this.showHeader()}
                <View style={Styles.firstStyle}>
                    <View style={Styles.kwStyle}>
                        {this.showKeyWord()}
                    </View>
                    <View style={Styles.cardStyle}>
                        {this.showSearchbar()}
                        {this.showInfo()}
                    </View>
                    <View style={Styles.planStyle}>
                        {this.drawPlan()}
                    </View>
                    <Button
                        buttonStyle={{ borderRadius: 5, backgroundColor: '#deb887' }}
                        title='Switch display'
                        titleStyle={Styles.inputSwitch}
                        onPress={this.buttonSwitchClickListener} />
                </View>
            </View>

        } else {
            return <View style={Styles.layer}>
                {this.showHeader()}
                <View style={Styles.firstStyle}>
                    <View style={Styles.planStyle}>
                        {this.drawPlan()}
                    </View>
                    <View style={Styles.cardStyle}>
                        {this.showSearchbar()}
                        {this.showInfo()}
                    </View>
                    <View style={Styles.kwStyle}>
                        {this.showKeyWord()}
                    </View>
                    <Button
                        buttonStyle={{ borderRadius: 5, backgroundColor: '#deb887' }}
                        title='Switch display'
                        titleStyle={Styles.inputSwitch}
                        onPress={this.buttonSwitchClickListener} />
                </View>
            </View>
        }
    }

    /*  return the component loader if isLoading is true, call showAll otherwise
    */
    render() {
        const { isLoading } = this.state;
        if (isLoading)
            return (
                <View style={Styles.loader}>
                    <Loader />
                </View>
            );
        else
            return (
                <View>
                    {this.showAll()}
                </View>
            );
    }
    }

export default Event;