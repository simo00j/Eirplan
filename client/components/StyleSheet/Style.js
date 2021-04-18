import { StyleSheet } from "react-native";


const Styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
    header: {
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "row",
    },

    layer: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    searchView: {
        // paddingTop: windowHeight/20,
        // paddingBottom: windowHeight/20,
        // paddingHorizontal: windowWidth/5,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
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
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
    searchbar: { 
        paddingHorizontal:100, 
    },
})


export default Styles;