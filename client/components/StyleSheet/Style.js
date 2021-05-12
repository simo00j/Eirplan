import { text } from "@fortawesome/fontawesome-svg-core";
import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//size constants used to style the components
const width1 = Dimensions.get("window").width;
const height1 = Dimensions.get("window").height;
const width = width1*0.10
const height = height1*0.08


//styles of the different components of the app
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
        maxWidth:"100%",
        alignItems:"center"
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
        borderRadius: 27,
        width: 0.4*width1
    },
    keywordContainer: {
        flex: 1,
        alignItems: 'center',        
        justifyContent: 'space-around',
        paddingHorizontal: 0.9*width1,
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
    boxList: {
        zIndex : 10,
        backgroundColor: '#ffe4c4',
        borderRadius: 27
    },
    listView: {
        backgroundColor: '#ffe4c4',
        alignSelf:"center",
        width:0.79*width1,
        borderRadius: 27
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
        width: width1,
        flex: 1,    
        flexDirection: 'row',        
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
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
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 20
    },
    tinyLogo2: {
        width:"20%",
        height:"90%",
        resizeMode:'contain',
        marginRight: 10,
        marginTop: 10,
        borderRadius: 20
      },
    inputSearch: {
        fontFamily: "Roboto",
        fontSize: RFPercentage(2),
    },
    inputSwitch: {
        fontSize: RFPercentage(1),
    },
    textInfo: {        
        fontSize: RFPercentage(1),
    },
    paragraph: {
        fontSize: RFPercentage(1),
        textAlign:'justify'
    },
    boxCompany: {
        zIndex:8,
        flexDirection: "column",
        width: 0.4*width1,
        backgroundColor: '#ffe4c4',
        borderRadius:27
    },
    backButton: {
        width:"96%", 
        borderRadius: 70, 
        marginLeft: 0, 
        marginRight: 0, 
        marginBottom: 15, 
        alignSelf: 'center',
        backgroundColor: '#deb887'
    },
    listCompany: {
        fontSize: RFPercentage(1.5),
        alignSelf: 'center'
    },
    titleBoxCompany: {
        fontWeight:'bold',
        color:'#585656',
        fontSize:RFPercentage(2),
        alignSelf:'center',
        marginBottom:15
    },
    keywordButton: {
        borderRadius: 70, 
        width:'90%',
        marginLeft: 0, 
        marginTop: 0,
        marginRight: 0, 
        marginBottom: 0, 
        alignSelf: 'center',
        backgroundColor: '#deb887'
    }
})


export default Styles;