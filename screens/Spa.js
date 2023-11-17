import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import imageDataSpa from '../assets/imagesSpa';

const Spa = ({ navigation, route }) => {

  const openFullScreenImage = (imagePath) => {
    navigation.navigate('FullImageSpaScreen', { imagePath });
  };
  return (
    <View style={styles.background}>
      <Text style={styles.spainfo}>
        Since December 2017, our hotel has a modern spa center with two saunas, two tepidariums, a kneipp bench, a salt room, an aroma shower, a fitness room and a smaller 6x4x1.5m pool with hydromassage jets.
        We offer guests a wide range of massages: relax, anti-stress, therapeutic, holistic, anti-cellulite, sports, as well as Ericson Laboratoire facial treatments. We also offer individual training sessions with a professional trainer.
      </Text>
      <Text style={styles.spainfo1}>
        Entrance fee: 25 BAM
      </Text>
      <Text style={styles.spainfo2}>
        Working hours: 12-9pm
      </Text>
      <FlatList
        data={imageDataSpa}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => openFullScreenImage(item.path)} >
              <Image source={item.path} style={styles.image} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#2E2E2E",
    flex: 1
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
  spainfo: {
    color: "#d2bd7f",
    textAlign: 'center',
    marginTop: 10
  },
  spainfo1: {
    color: "#d2bd7f",
    textAlign: 'center'
  },
  spainfo2: {
    color: "#d2bd7f",
    textAlign: 'center'
  }
})

export default Spa