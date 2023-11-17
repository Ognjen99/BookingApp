import React, { useRef, useEffect } from "react";
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, Animated } from "react-native";

const { width, height } = Dimensions.get("window");



const HomePage = ({ navigation }) => {

    useEffect(() => {
        startAnimation();
    }, [])

    const startAnimation = () => {
        Animated.timing(position, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };

    const position = useRef(new Animated.Value(0)).current;


    const handlePress = () => {
        navigation.navigate('BottomNavigation');
    }

    return (
        <View>
            <Animated.View
                style={[
                    styles.imageContainer,
                    {
                        transform: [{
                            translateY: position.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-750, 0]
                            })
                        }]
                    }
                ]}>
                <Image
                    source={require("../assets/images/pocetna.jpg")}
                    style={{ width: width, height: height }}
                />
                <TouchableOpacity onPress={handlePress} style={styles.button}>
                    <Text style={styles.buttontext}>Book Now</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        position: 'absolute',
        top: 0,
    },
    button: {
        opacity: 0.8,
        width: 150,
        position: 'absolute',
        bottom: height / 7,
        left: width / 2.8,
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
    },
    buttontext: {
        opacity: 1,
        color: "#d2bd7f",
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: 20
    }
})

export default HomePage;