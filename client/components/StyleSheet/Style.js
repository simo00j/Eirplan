import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

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
        flex:3, 
        flexDirection:'row'
    },
    bottomStyle:{
        flex:6,            
        justifyContent: 'center',  
        alignItems:"center"
    },
    cardStyle:{
        maxWidth:"100%",      
    },
    searchStyle:{
        flex:1,        
        justifyContent: 'center',
    },
    kwStyle:{
        flex:4,
        height:"100%",
        width:"100%",
        alignItems:'center'
    },
    planContainer: {
        flex:1,
    },
    cardViewContainer: {
        flexDirection: "column",
        backgroundColor: '#696969',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
    cardContainer:{
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#ffe4c4',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    keywordContainer: {
        flex: 1,
        backgroundColor: '#696969',
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
        flex:4,
        backgroundColor: '#ffe4c4'
    },
    searchView: {
        flex: 1,
        backgroundColor: '#696969',
        alignSelf:"center"
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
        fontSize: RFPercentage(4),
    },
    tinyLogo: {
        width: "15%",
        height: "60%",
      },
})


export default Styles;