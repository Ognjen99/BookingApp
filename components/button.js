import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = ({ navigation }) => {

    const handlePress = () => {
        navigation.navigate('ReservationScreen');
    }

    return (
        <TouchableOpacity style={styles.button} onPress={handlePress} >
            <Text style={styles.text}>Make a reservation!</Text>
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

export default Button;