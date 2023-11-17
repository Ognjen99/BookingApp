import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, Dimensions } from 'react-native';
import Submit from '../components/submitButton';

const { width, height } = Dimensions.get('window')

const ReservationScreen = ({ navigation, route }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [questions, setQuestions] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.form}>
        <Text style={styles.label}>First Name:</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />

        <Text style={styles.label}>Last Name:</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />

        <Text style={styles.label}>Email Address:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={(text) => setPhone(text)}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Questions:</Text>
        <TextInput
          style={styles.input}
          value={questions}
          onChangeText={(text) => setQuestions(text)}
          multiline={true}
          numberOfLines={4}
        />
      </ScrollView>
      <View>
        <Text style={styles.text}>
          Here you can make a reservation for rooms, wellnes and restaurant. Ask anything you don't understand we are here to help.
        </Text>
      </View>
      <Submit style={styles.button} />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    padding: 20,
    justifyContent: 'space-between',
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: "#d2bd7f",
    marginBottom: height / 10
  }
});

export default ReservationScreen;