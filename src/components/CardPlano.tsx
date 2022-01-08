import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CardPlano = (props: { text: string }) => {
    return (
        <View style={styles.cardStyle}>
            <View style={styles.cardContent}>
                <Text>{props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: "red",
        display: "flex",
        elevation: 5,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#3333",
        shadowOpacity: 0.3,
        marginBottom: 10,
        marginHorizontal: 25,
        shadowRadius: 2,
        alignItems: "center",
        borderRadius: 6,
    },
    cardContent: {
        marginVertical: 90, display: "flex"
    },
});

export default CardPlano