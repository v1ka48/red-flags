import React from 'react';
import { StyleSheet, Text,  TouchableOpacity } from 'react-native';
import feedback from '../data/feedback.json';

function getRandomFeedback() {
  return Math.floor(Math.random() * feedback.answerYes.length);
}

const YesFeedbackScreen = ({ navigation }) => {
  let feedbackToYes = feedback.answerYes[getRandomFeedback()]
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress={() => navigation.navigate("RED FLAGS")}
    >
      <Text style={styles.feedback}>
        {feedbackToYes}
      </Text>
    </TouchableOpacity>
  )
}

export default YesFeedbackScreen;

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