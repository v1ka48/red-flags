import React from 'react';
import { StyleSheet, Text,  TouchableOpacity } from 'react-native';
import feedback from '../data/feedback.json';

function getRandomFeedback() {
  return Math.floor(Math.random() * feedback.takeShot.length);
}

const ShotScreen = ({ navigation }) => {
  let takeAshot = feedback.takeShot[getRandomFeedback()]
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress={() => navigation.navigate("RED FLAGS")}
    >
      <Text style={styles.feedback}>
        {takeAshot}
      </Text>
    </TouchableOpacity>
  )
}

export default ShotScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  feedback: {
    color: "#CC0033",
    fontSize: 40, 
    fontWeight: "bold",
  }
});