import React, { } from "react";
import { StyleSheet, View, Image, FlatList, Dimensions, TouchableOpacity, } from "react-native";
import { useNavigation } from "@react-navigation/native";


const { width, height } = Dimensions.get("window");

const ImageAlbum = ({ route }) => {
    const navigation = useNavigation();
    const { albumLabel } = route.params;

    const imageAlbumData = {
        Onebedroom: [
            require('../assets/images/francuski.jpg'),
            require('../assets/images/francuski.jpg'),
            require('../assets/images/francuski.jpg')
        ],
        Twobedroom: [
            require('../assets/images/dvokrevetna.jpg'),
            require('../assets/images/dvokrevetna.jpg'),
            require('../assets/images/dvokrevetna.jpg')
        ],
        Threebedroom: [
            require('../assets/images/trokrevetna.jpg'),
            require('../assets/images/trokrevetna.jpg'),
            require('../assets/images/trokrevetna.jpg')
        ]
    }

    const handleImagePress = (imagePath) => {
        navigation.navigate('FullImageScreen', { imagePath });
    };

    return (
        <View>
            <FlatList
                data={imageAlbumData[albumLabel]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleImagePress(item)}>
                        <View style={styles.container}>
                            <Image style={styles.imageContainer} source={item} />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        width: width,
        height: 300,
        marginBottom: 1,
    }
})
export default ImageAlbum;