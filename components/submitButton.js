import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Submit = ({ navigation }) => {

    return (
        <TouchableOpacity style={styles.button} >
            <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
    },
    text: {
        opacity: 1,
        color: "#d2bd7f",
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: 18
    }
})

export default Submit;