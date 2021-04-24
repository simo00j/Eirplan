import { StyleSheet } from "react-native";


const Styles = StyleSheet.create ({
    loaderView: {
        alignItems:'center',
        justifyContent:'center',
    },
    loader: {
        width:200,
        height:200
    },
    cardViewContainer: {
        flex: 0,
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
        maxHeight:'50%'
      },
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#696969',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
    listContainer:{
        flex: 1,
        flexDirection: "column",
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
        
    },
    searchView: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#696969',
        alignItems: 'center',
        justifyContent: 'space-around',
        maxHeight:'9%'
    }, 
    listView : {
        backgroundColor: '#696969',
        maxHeight:'20%'
    }, 
    stand: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    defLogo : {
        // width: windowWidth/4,
        // height: windowHeight/4,
    },
    bigText: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    },
    background: {
        color: '#696969',
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },

    header: {
        width: '100%',
        flex: 1,    
        flexDirection: 'row',
        alignItems: 'center',
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        padding: 40,
    },

    tinyLogo: {
        width: 60,
        height: 60,
      },
})


export default Styles;