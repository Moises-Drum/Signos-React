import React from "react";
import {View, Text, Image} from "react-native"
import styles from "./estilos";

export default App = () => {
    const django = require("../../assets/DjangoLivre.png")
    const ray = require("../../assets/ray.jpg")

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.titulo}>Sobre o ator</Text>

                <Text style={styles.subTitulo}>Sua vida</Text>

                <Text style={styles.descricao}>Nascido em Terrell, Texas, em 13 Dezembro de 1967</Text>
                
                <Text style={styles.subTitulo}>Obras</Text>

                <Text style={styles.descricao}>Uma de suas performances mais memoráveis e premiadas foi no filme "Ray" (2004) e "Django Livre" (2012), dirigido por Quentin Tarantino, no qual interpretou o papel-título de Django.</Text>

                <View style={styles.imagens}>
                    <Image
                        source={ray}
                        style={styles.filmes}
                    />

                    <Image
                        source={django}
                        style={styles.filmes}
                    />
                    </View>

                
            </View>
        </View>
    )
}