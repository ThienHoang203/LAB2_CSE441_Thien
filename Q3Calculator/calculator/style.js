import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    numbericButton: {
        borderRadius: "200px",
        display:"flex",
        backgroundColor: "white",
        justifyContent:"center",
        alignItems:"baseline",
    },
    input: {
       width: 200,
       height: 40,
       borderColor: 'gray',
       borderWidth: 1,
       marginBottom: 10,
       padding: 10,
    },
    result: {
        marginTop: 20,
        fontSize: 16,
    },
    funtionalButton: {
        backgroundColor: "grey",
    },
    numberSign: {
        color: "black",
        fontSize: 18,
    },
    functionalSign: {
        color: "orange",
        fontSize: 12,
    },
    equalButton: {
        color: "white",
        backgroundColor: "orange"
    },
});