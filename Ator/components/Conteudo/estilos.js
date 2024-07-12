import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({

    container: {
        backgroundColor: "white",
        width: 414,
        height: 430,
        alignItems: "center",
        borderEndStartRadius: 10,
        borderEndEndRadius: 10
        
    },

    box: {
        marginHorizontal: 20
    },

    titulo: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 12
    },

    subTitulo: {
        fontWeight: "bold",
        marginTop: 12
    },

    imagens: {
        flexDirection: "row",
        marginHorizontal: 25

    },

    filmes: {
        marginTop: 12,
        height: 200,
        width: 130,
        marginRight: 15,
        marginLeft: 15,
        borderRadius: 10
    }

})

export default styles;