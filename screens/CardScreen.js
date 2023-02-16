import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '@rneui/themed';
import flags from '../data/flags.json';

function getRandomGreenFlag() {
  return Math.floor(Math.random() * flags.greenFlags.length);
}

function getRandomRedFlag() {
  return Math.floor(Math.random() * flags.redFlags.length);
}

const CardScreen = ({ navigation }) => {
  let greenFlagOne = flags.greenFlags[getRandomGreenFlag()]
  let greenFlagTwo = flags.greenFlags[getRandomGreenFlag()]
  while (greenFlagOne == greenFlagTwo) {
    greenFlagTwo = flags.greenFlags[getRandomGreenFlag()];
  }
  let redFlag = flags.redFlags[getRandomRedFlag()]
  return (
    <View style={styles.container}>
      <Text style={styles.greenFlag}>
        {greenFlagOne}
      </Text>
      <Text style={styles.greenFlag}>
        {greenFlagTwo}
      </Text>
      <Text style={styles.redFlag}>
        {redFlag}
      </Text>
      <View style={{ height: 350 }}/>
      <View style={styles.buttonContainer}>
        <Button
          title="NO"
          onPress={() => navigation.navigate("FeedbackToNo")}
          buttonStyle={{
            height: 90,
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: '#CC0033',
            borderWidth: 3,
            borderRadius: 60,
          }}
          containerStyle={{ width: 90, marginLeft: 10, marginRight: 210 }}
          titleStyle={{ fontWeight: 'bold', color: "#CC0033" }}
        />
        <Button
          title="YES"
          onPress={() => navigation.navigate("FeedbackToYes")}
          buttonStyle={{
            height: 90,
            backgroundColor: "#CC0033",
            borderWidth: 2,
            borderColor: '#CC0033',
            borderRadius: 60,
          }}
          containerStyle={{ width: 90 }}
          titleStyle={{ fontWeight: 'bold' }}
        />
        </View>
    </View>
  )
}

export default CardScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  greenFlag: {
    color: "black",
    fontSize: 40,
    padding: 10,
    fontWeight: "bold"
  },
  redFlag: {
    fontSize: 40,
    padding: 10,
    fontWeight: "bold",
    color: "#CC0033"
  },
  buttonContainer: {
    flexDirection: "row",
  }
})