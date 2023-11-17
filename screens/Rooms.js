import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import * as Animatable from 'react-native-animatable';
import imageData from '../assets/images.js';
import Button from '../components/button.js';


const Rooms = ({ navigation, route }) => {

  const flatListRef = useRef(null);

  const navigateToImageAlbum = (label) => {
    navigation.navigate('ImageAlbum', { albumLabel: label });
  };
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <FlatList
          ref={flatListRef}
          data={imageData}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment='start'
          snapToInterval={330}
          decelerationRate='fast'
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToImageAlbum(item.label)}>
              <View style={styles.itemContainer}>
                <Image source={item.path} style={styles.image} />
                <Text style={styles.text}>{item.label}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <Animatable.View style={styles.centerText} animation="fadeIn" delay={1500} duration={2000}>
        <Text style={styles.roomInfo}>
          Hotel "Vidikovac" offers its guests 19 rooms and 2 apartments for a total of 50 guests. 11 rooms have
          french beds, and there are 4 double and 4 triple rooms. All are equipped with modern facilities necessary
          for complete rest, enjoyment and relaxation of the guests. The rooms contain TWC (toilet with shower cabin)
          TV with cable television, hair dryer, telephone and free internet connection.
        </Text>
      </Animatable.View>
      <View style={styles.buttonContainer}>
        <Button navigation={navigation} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#2E2E2E",
    flex: 1
  },
  container: {
    height: 300,
    marginVertical: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  itemContainer: {
    marginRight: 10,
    borderRadius: 10,
  },
  text: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    paddingVertical: 5,
    borderRadius: 5,
    width: 300,
    marginLeft: 10
  },
  centerText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  roomInfo: {
    marginTop: 20,
    color: "#d2bd7f",
    textAlign: 'center',
    fontSize: 14.5
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  }
})

export default Rooms