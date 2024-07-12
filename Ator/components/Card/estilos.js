import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#0a1c35",
        height: 315,
        width: 414,
        justifyContent: "center",
    },

    foto: {
        height: 200,
        width: 300,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },

    box: {
        backgroundColor: "#ffff",
        height: 290,
        width: 300,
        borderRadius: 20
    },

    titulo: {
        textAlign: "center",
        fontSize: 15,
        marginTop: 10,
        fontWeight: "bold",
        letterSpacing: 1
    },

    descricao: {
        textAlign: "center",
        fontSize: 10,
        marginTop: 10, 
        marginHorizontal: 40
    }
})

export default styles;