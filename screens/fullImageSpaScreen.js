import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const FullImageSpaScreen = ({ route }) => {
    const { imagePath } = route.params;

    return (
        <View style={styles.container}>
            <Image source={imagePath} style={styles.fullScreenImage} resizeMode="contain" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black', 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    fullScreenImage: {
        flex:1, 
        width: width,
        height: height,
    }
});

export default FullImageSpaScreen;
