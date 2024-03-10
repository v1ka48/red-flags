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
    backgroundColor: "#161616",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  feedback: {
    color: "#fefffe",
    fontSize: 50, 
    fontWeight: "bold",
    marginHorizontal: 25,
  }
});