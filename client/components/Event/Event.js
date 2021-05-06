import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, Button, ListItem, ButtonGroup, ThemeConsumer } from 'react-native-elements';
import WordCloud from "../WordCloud/WordCloud";
import Plan from "../Plan/Plan";
import Searchbar from "../SearchBar/SearchBar";
import Styles from "../StyleSheet/Style";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import { RFPercentage } from "react-native-responsive-fontsize";


const list = [//lire le commentaire!!!!
     {
        id: 1,
        keyword: "Informatique",
        stand_names: ["Altran", "CapGemini", "all", "Thales", "Atos", "Sopra Steria"]//normalement mettre les stands dans le tableau au lieu de leurs noms!!!
    },
    {
        id: 2,
        keyword: "Mathématiques",
        stand_names: ["all"]
    },
    {
        id: 3,
        name: 'iOs',
        stand_names: ["all"]
    },
    {
        id: 4,
        name: 'Robotique',
        stand_names: ["Thales"]
    },
    {
        id: 5,
        name: "Telecommunications",
        stand_names: ["Sopra Steria"]
    },
    {
        id: 6,
        name: "Innovation",
        stand_names: ["X-Rays"]
    },
    {
        id: 20,
        name: "React Native",
        stand_names: ["Scalian"]
    },
    {
        id: 16,
        name: "Finance",
        stand_names: ["X-Rays"]
    },
    {
        id: 17,
        name: "Developpement web",
        stand_names: ["Scalian", "X-Rays"]
    },
    {
        id: 7,
        name: "Bordeaux",
        stand_names: ["all", "RPR"]
    },
    {
        id: 8,
        name: "Génie logiciel",
        stand_names: ["RPR"]
    },
    {
        id: 9,
        name: "Electronique",
        stand_names: ["Thales", "Altran"]
    },
    {
        id: 10,
        name: "Réseaux",
        stand_names: ["CapGemini"]
    },
    {
        id: 11,
        name: "Cybersécurité",
        stand_names: ["CapGemini"]
    },
    {
        id: 12,
        name: "ERP",
        stand_names: ["RPR"]
    },
    {
        id: 13,
        name: "International",
        stand_names: ["RPR"]
    },
    {
        id: 14,
        name: "Son",
        stand_names: ["Altran"]
    },
    {
        id: 15,
        name: "Jeux vidéos",
        stand_names: ["Altran"]
    },
    {
        id: 18,
        name: "Python",
        stand_names: ["Scalian", "Sopra Steria"]
    },
    {
        id: 19,
        name: "Java",
        stand_names: ["Scalian", "Sopra Steria"]
    },
    {
        id: 21,
        name: "Paris",
        stand_names: ["Thales"]
    },
    {
        id: 22,
        name: "Intelligence Artificielle",
        stand_names: ["Atos"]
    },
    {
        id: 23,
        name: "Deep Learning",
        stand_names: ["Atos"]
    },
    {
        id: 24,
        name: "Mécanique",
        stand_names: ["LaBRI"]
    },
    {
        id: 25,
        name: "Fluides",
        stand_names: ["LaBRI"]
    },
    {
        id: 26,
        name: "Recherche",
        stand_names: ["Atos"]
    },
]
var keywordsArray = [
    {
        id: 1,
        keyword: "Informatique",    // the actual keyword
        frequency: 6,      // the frequency of this keyword
    },
    {
        id: 2,
        keyword: "Mathématiques",    // the actual keyword
        frequency: 1,      // the frequency of this keyword
    },
    {
        id: 3,
        keyword: "iOs",    // the actual keyword
        frequency: 1,      // the frequency of this keyword
    },
    {
        id: 4,
        keyword: "Robotique",    // the actual keyword
        frequency: 1,      // the frequency of this keywor
    },
    {
        id: 5,
        keyword: "Telecommunications",    // the actual keyword
        frequency: 2,      // the frequency of this keyword
    },
    {
        id: 6,
        keyword: "Innovation",    // the actual keyword
        frequency: 1,      // the frequency of this keyword
    },
    {
        id: 7,
        keyword: "Bordeaux",    // the actual keyword
        frequency: 2,      // the frequency of this keyword
    },
    {
        id: 8,
        keyword: "Génie logiciel",    // the actual keyword
        frequency: 1,      // the frequency of this keyword

    },
    {
        id: 9,
        keyword: "Electronique",    // the actual keyword
        frequency: 2,      // the frequency of this keyword

    },
    {
        id: 10,
        keyword: "Réseaux",    // the actual keyword
        frequency: 1,      // the frequency of this keyword

    },
    {
        id: 11,
        keyword: "Cybersécurité",    // the actual keyword
        frequency: 1,      // the frequency of this keyword

    },
    {
        id: 12,
        keyword: "ERP",    // the actual keyword
        frequency: 1,      // the frequency of this keyword

    },
    {
        id: 13,
        keyword: "International",    // the actual keyword
        frequency: 1,      // the frequency of this keyword

    },
    {
        id: 14,
        keyword: "Son",    // the actual keyword
        frequency: 1,      // the frequency of this keyword

    },
    {
        id: 15,
        keyword: "Jeux Vidéos",    // the actual keyword
        frequency: 1,      // the frequency of this keyword

    },
    {
        id: 16,
        keyword: "Finance",    // the actual keyword
        frequency: 1,      // the frequency of this keyword

    },
    {
        id: 17,
        keyword: "Developpement web",    // the actual keyword
        frequency: 2,      // the frequency of this keyword

    },
    {
        id: 18,
        keyword: "Python",    // the actual keyword
        frequency: 2,      // the frequency of this keyword

    },
    {
        id: 19,
        keyword: "Java",    // the actual keyword
        frequency: 2,      // the frequency of this keyword

    },
    {
        id: 20,
        keyword: "React Native",    // the actual keyword
        frequency: 1,      // the frequency of this keyword

    },
    {
        id: 21,
        keyword: "Paris",    // the actual keyword
        frequency: 1,      // the frequency of this keyword

    },
    {
        id: 22,
        keyword: "Intelligence Artificielle",    // the actual keyword
        frequency: 1,      // the frequency of this keyword

    },
    {
        id: 23,
        keyword: "Deep Learning",    // the actual keyword
        frequency: 1,      // the frequency of this keyword

    },
    {
        id: 24,
        keyword: "Mécanique",    // the actual keyword
        frequency: 2,      // the frequency of this keyword

    },
    {
        id: 25,
        keyword: "Fluides",    // the actual keyword
        frequency: 1,      // the frequency of this keyword

    },
    {
        id: 26,
        keyword: "Recherche",    // the actual keyword
        frequency: 1,      // the frequency of this keyword

    },
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
        this.setState({ standShown: s }, () => {this.showInfo()});
    }

    OnPressKeyWordHandler(k) {
        this.setState({ keyisChosen: true });
        this.setState({ keywordPressed: k });
    }

    OnPressCompanyFakeHandler(k) {
        alert(k);
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
                            /*
                            <ButtonGroup
                                onPress={}/>*/
                            s.keywords.map((l, i) => (
                                //<View key={i} style={Styles.keywordButton}>
                                    <Text key={i} style={Styles.keywordButtonText} onPress={() => { this.OnPressCompanyHandler(l); }} >
                                         {" "}{l.name}{" "}
                                    </Text>
                                //</View>
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
    
    filtrerParID(obj, id) {
        if (obj.id == id) {
            return true;
        }
    }
    
    getKey(k) {
        const filtered = list.filter(item => this.filtrerParID(item, k.id))
        console.log(filtered);
        return (
            <View style={Styles.boxCompany}>
                <Text style={Styles.titleBoxCompany}> Companies </Text>
                {
                    filtered[0].stand_names.map((l, i) => (
                        <ListItem key={i} containerStyle={{backgroundColor: '#ffe4c4', borderRadius:27}} topDivider onPress={() => { this.OnPressCompanyHandler(l); }} >
                            <ListItem.Content>
                                <ListItem.Title style={Styles.listCompany}>{l}</ListItem.Title>
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
        return <Searchbar OnPressKeyWordHandler={this.OnPressKeyWordHandler.bind(this)} allKeywords={keywordsArray} />
    }

    showHeader() {
        return <Header eventName={this.state.event.name} />
    }
    componentWillMount() {
        fetch("http://23.251.135.209:3001/send")
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