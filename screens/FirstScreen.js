import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import imageDataRest from '../assets/imagesRest'

const FirstScreen = ({ navigation, route }) => {

  const openFullScreenImage = (imagePath) => {
    navigation.navigate('FullImageSpaScreen', { imagePath });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>The hotel's restaurant with 140 seats is available to all guests, offering high-quality à la carte
        service at a high level. Enjoying our gastronomic and wine offer is complemented by a beautiful view of
        Zvorničko Lake. Restaurant, terrace with 160 seats, as well as all our rooms have a breathtaking view.
      </Text>
      <FlatList
        data={imageDataRest}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => openFullScreenImage(item.path)}>
              <Image source={item.path} style={styles.image} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E2E2E"
  },
  text: {
    color: "#d2bd7f",
    textAlign: 'center',
    marginTop: 10
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginBottom: 10
  },
  image: {
    width: 190,
    height: 190,
    borderRadius: 10,
  },
})

export default FirstScreen