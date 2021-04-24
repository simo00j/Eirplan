import React, { Component } from "react";
import { View, Text} from "react-native";
import { Card, Button, ListItem, ThemeConsumer } from 'react-native-elements';
import WordCloud from "../WordCloud/WordCloud";
import Plan from "../Plan/Plan";
import Searchbar from "../SearchBar/SearchBar";
import Styles from "../StyleSheet/Style";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
// import StandCard from '../StandCard/StandCard';
const list = [
    {
        name: 'Amy Farha',
        id: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        id: 'Vice Chairman'
    },
    {
        name: 'Chris Jacon',
        id: 'Vice'
    },
    {
        name: 'Chris Jackson',
        id: 'Vice Chairman'
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
            showUpArr:true,
            showDownArr:false,
            event: undefined
        }
    }

    OnPressChangeFloorUp() {
        if (this.state.currentFloorId < this.state.event.floors.length - 1) {
            this.setState({currentFloorId:this.state.currentFloorId+1});
            this.setState({showUpArr:true, showDownArr:true});
        }
        else {
            this.setState({currentFloorId:this.state.currentFloorId+1});
            this.setState({showUpArr:false, showDownArr:true});
        }
    }

    OnPressChangeFloorDown() {
        if (this.state.currentFloorId > 1) {
            this.setState({currentFloorId:this.state.currentFloorId-1});
            this.setState({showUpArr:true, showDownArr:true});
        }
        else {
            this.setState({currentFloorId:this.state.currentFloorId-1});
            this.setState({showUpArr:true, showDownArr:false});
        }

    }

    OnPressStandHandler(s) {
        this.setState({ infoShown: true });
        this.setState({ standShown: s })
    }

    OnPressKeyWordHandler(k) {
        this.setState({ keyisChosen: true });
        this.setState({ keywordPressed: k })
    }

    OnPressCompanyHandler(k) {
        this.setState({ infoShown: true });
        this.setState({ standShown: k})
    }

    getFloor(_id) {
        let floor = null;
        if (_id == null) {
            floor = this.state.event.floors[0];
            this.setState({currentFloorId: 0});
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

    getDesciption(s) {
        return (
            <Card containerStyle={Styles.cardContainer}>
                <Card.Title>{s.name}</Card.Title>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    Responsable : {s.id}{/*"\n"}
              Heure de début : {stand.start_hour}{"\n"}
              Heure de fin : {stand.end_hour}{"\n"}
        Mots-clés : {stand.keywords}{"\n"*/}
                </Text>
                <Button
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#deb887' }}
                    title='Back'
                    onPress={this.buttonBackClickListener} />
            </Card>);
    }


    getKey(k) {
        return <View>
            {
                list.map((l, i) => (
                    <ListItem key={i}  containerStyle={{backgroundColor: '#ffe4c4'}} bottomDivider  onPress={() => {this.OnPressCompanyHandler(l);}} >
                        <ListItem.Content>
                            <ListItem.Title>{l.name}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
            <Button
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#deb887' }}
                title='Back'
                onPress={this.buttonBackkwClickListener} />
        </View>
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
                <Text> Select a Stand to see more Info </Text>
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
            <View style={{alignItems: 'center'}}>
            <Text > Select a KeyWord to see more Info </Text>
            {this.showWordCloud()}
            </View>
        );
    }

    showWordCloud(){
        return <WordCloud OnPressHandler={this.OnPressKeyWordHandler.bind(this)} />
    }

    showSearchbar(){
        return <Searchbar/>
    }

    showHeader(){
        return <Header/>
    }
    componentWillMount() {
        fetch("http://23.251.135.209:3001/send")
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ event: responseJson.data[0] });
                this.setState({ isLoading: false });
            }).catch(err => { console.log(err) })
    }

    render() {
        const { isLoading } = this.state;
        if (isLoading)
            return (
                <View style={Styles.loader}>
                    <Loader/>    
                </View>
            );
        else
            return (
                <View style={Styles.layer}>
                    {this.showHeader()}
                    <View style={Styles.planStyle}>
                        {this.drawPlan()}
                    </View>                    
                    <View style={Styles.bottomStyle}>
                        <View style={Styles.cardStyle}>
                            {this.showInfo()}                    
                            {this.showSearchbar()} 
                        </View>                   
                        <View style={Styles.kwStyle}>
                            {this.showKeyWord()}
                        </View>
                    </View>
                </View>
            );
    }
}

export default Event;