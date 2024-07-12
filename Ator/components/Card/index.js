import React from "react";
import {View, Image, Text} from "react-native";
import styles from "./estilos"

export default Card = () => {

    const foto = require("../../assets/JamieFoxx.png")

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Image
                    source={foto}
                    style={styles.foto}
                />
                <Text style={styles.titulo}>Jamie Foxx</Text>
                <Text style={styles.descricao}>Eric Marlon Bishop, mais conhecido como Jamie Foxx, é um ator, produtor, roteirista, cantor e comediante norte-americano.</Text>
            </View>
            
        </View>
    )
}