import { text } from "@fortawesome/fontawesome-svg-core";
import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const width1 = Dimensions.get("window").width;
const height1 = Dimensions.get("window").height;
const width = width1*0.10
const height = height1*0.08

const Styles = StyleSheet.create ({
    loaderView: {
        alignItems:'center',
        justifyContent:'center',
    },
    loader: {
        width:200,
        height:200
    },
    planStyle:{
        flex : 4, 
        flexDirection:'row',
    },
    firstStyle:{
        flex:10,            
        alignItems:"center",   
    },
    cardStyle:{
        flex:2,
        maxWidth:"100%"
    },
    searchStyle:{
        flex:1,        
        justifyContent: 'center',        
        width:"100%", 
        zIndex : 9
    },
    kwStyle:{
        flex:6,
        height:"100%",
        width:"100%",
        alignItems:'center',       
    },
    planContainer: {
        flex:1,
    },
    cardViewContainer: {
        zIndex:9,
        flexDirection: "column",
        backgroundColor: '#696969',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
    cardContainer:{
        zIndex:9,
        flexDirection: "column",
        backgroundColor: '#ffe4c4',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    keywordContainer: {
        flex: 1,
        alignItems: 'center',        
        justifyContent: 'space-around',
        paddingHorizontal: '100%',
        height:'100%'
      },
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#696969',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
    header: {
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "row",
    },
    layer: {
        backgroundColor: '#696969',
        flex: 1,
        alignItems: "center",
        width:'100%',
        
    },
    listView:{
        backgroundColor: '#ffe4c4',
        alignSelf:"center",
    },
    searchView: {
        flex: 1,
        backgroundColor: '#767676',
        alignSelf:"center",
        width:0.8*width1,
        borderRadius:28,
    }, 
    stand: {
        flex: 1,
        justifyContent: "center",
    },
    header: {
        width: '100%',
        flex: 1,    
        flexDirection: 'row',        
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: RFPercentage(4),
        color: '#333',
        letterSpacing: 1,
        padding: 40,
    },
    buttonFloor:{
        fontSize: RFPercentage(3),
    },
    tinyLogo1: {
        width:"20%",
        height:"90%",
        resizeMode:'contain',
      },
    inputSearch:{
        fontFamily: "Roboto",
        fontSize: RFPercentage(2),
    },
    inputSwitch:{
        fontSize: RFPercentage(1),
    },
    textInfo:{        
        fontSize: RFPercentage(1),
    }
})


export default Styles;