import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, Button, ListItem, ThemeConsumer } from 'react-native-elements';
import WordCloud from "../WordCloud/WordCloud";
import Plan from "../Plan/Plan";
import Searchbar from "../SearchBar/SearchBar";
import Styles from "../StyleSheet/Style";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import { RFPercentage } from "react-native-responsive-fontsize";

const list = [
    {
        name: 'Entreprise1',
        id: 'Mr X'
    },
    {
        name: 'Entreprise2',
        id: 'Mr X'
    },
    {
        name: 'Entreprise3',
        id: 'Mr X'
    },
    {
        name: 'Entreprise4',
        id: 'Mr X'
    }

]
var keywordsArray = [
    {
        keyword: "Informatique",    // the actual keyword
        frequency: 10,      // the frequency of this keyword
    },
    {
        keyword: "Mathématiques",    // the actual keyword
        frequency: 20,      // the frequency of this keyword
    },
    {
        keyword: "iOs",    // the actual keyword
        frequency: 30,      // the frequency of this keyword
    },
    {
        keyword: "Robotique",    // the actual keyword
        frequency: 15,      // the frequency of this keywor
    },
    {
        keyword: "Aéronautique",    // the actual keyword
        frequency: 15,      // the frequency of this keyword
    },
    {
        keyword: "Innovation",    // the actual keyword
        frequency: 20,      // the frequency of this keyword
    },
    {
        keyword: "Bordeaux",    // the actual keyword
        frequency: 15,      // the frequency of this keyword
    },
    {
        keyword: "Génie logiciel",    // the actual keyword
        frequency: 23,      // the frequency of this keyword

    },
    {
        keyword: "Electronique",    // the actual keyword
        frequency: 15,      // the frequency of this keyword

    }
]



class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFloorId: 0,
            infoShown: false,
            standShown: undefined,
            isLoading: true,
            keyisChosen: false,
            keywordPressed: undefined,
            showUpArr: true,
            showDownArr: false,
            event: undefined,
            switchDisplay: false
        }
    }

    OnPressChangeFloorUp() {
        if (this.state.currentFloorId < this.state.event.floors.length - 1) {
            this.setState({ currentFloorId: this.state.currentFloorId + 1 });
            this.setState({ showUpArr: true, showDownArr: true });
        }
        else {
            this.setState({ currentFloorId: this.state.currentFloorId + 1 });
            this.setState({ showUpArr: false, showDownArr: true });
        }
    }

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

    OnPressStandHandler(s) {
        this.setState({ infoShown: true });
        this.setState({ standShown: s })
    }

    OnPressKeyWordHandler(k) {
        this.setState({ keyisChosen: true });
        this.setState({ keywordPressed: k.keyword });
    }

    OnPressCompanyHandler(k) {
        this.setState({ infoShown: true });
        this.setState({ standShown: k })
    }

    getFloor(_id) {
        let floor = null;
        if (_id == null) {
            floor = this.state.event.floors[0];
            this.setState({ currentFloorId: 0 });
        } else {
            floor = this.state.event.floors[_id];
        }
        return floor;

    }

    buttonBackClickListener = () => {
        this.setState({ infoShown: false });
    }

    buttonBackkwClickListener = () => {
        this.setState({ keyisChosen: false });
    }

    buttonSwitchClickListener = () => {
        if (this.state.switchDisplay) {
            this.setState({ switchDisplay: false })
        } else {
            this.setState({ switchDisplay: true })
        }
    }

    getDesciption(s) {
        console.log(s)
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
                                <View style={Styles.keywordButton}>
                                    <Text key={i} style={Styles.keywordButtonText} onPress={() => { this.OnPressCompanyHandler(l); }} >
                                         {" "}{l.name}{" "}
                                    </Text>
                                </View>
                            ))
                        }{"\n"}
                </Text>
                <Card.Divider />
                <Text style={Styles.paragraph}> 
                    Thales est un leader mondial des hautes technologies pour les marchés de l'Aérospatial, du Transport, de la Défense et de la Sécurité. Fort de 61 000 collaborateurs dans 56 pays, Thales a réalisé en 2014 un chiffre d'affaires de 13 milliards d'euros.
                </Text>
                <Button
                    buttonStyle={Styles.backButton}
                    title='Back'
                    titleStyle={Styles.inputSearch}
                    onPress={this.buttonBackClickListener} />
            </Card>);
    }
    
    getKey(k) {//relier les noms des stands affichés au mot-clé choisi (si le mot-clé est dans la liste des kw alors on le met dans la liste)
        return (
            <View style={Styles.boxCompany}>
                <Text style={Styles.titleBoxCompany}> Companies </Text>
                {
                    list.map((l, i) => (
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

    drawPlan() {
        let floor = this.getFloor(this.state.currentFloorId);
        return (
            <View style={Styles.planContainer}>
                <Plan currFloor={floor} floorId={this.state.currentFloorId} showUpArr={this.state.showUpArr} showDownArr={this.state.showDownArr} upHandler={this.OnPressChangeFloorUp.bind(this)} downHandler={this.OnPressChangeFloorDown.bind(this)} handler={this.OnPressStandHandler.bind(this)} />
            </View>
        );
    }

    showInfo() {
        if (this.state.infoShown) {
            return (
                <Text> {this.getDesciption(this.state.standShown)} </Text>
            );
        }
        return (
            <View>
                <Text style={Styles.textInfo}> Select a Stand to see more Info </Text>
            </View>
        );
    }

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

    showWordCloud() {
        return <WordCloud keywordsArray={keywordsArray} OnPressHandler={this.OnPressKeyWordHandler.bind(this)} />
    }

    showSearchbar() {
        return <Searchbar OnPressKeyWordHandler={this.OnPressKeyWordHandler.bind(this)} allKeywords={keywordsArray}/>
    }

    showHeader() {
        return <Header eventName={this.state.event.name} />
    }
    componentWillMount() {
        fetch("http://192.168.0.11:3001/send")
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ event: responseJson.data[0] });
                this.setState({ isLoading: false });
            }).catch(err => { console.log(err) })
    }

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