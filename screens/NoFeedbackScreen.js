import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import feedback from '../data/feedback.json';

function getRandomFeedback() {
  return Math.floor(Math.random() * feedback.answerNo.length);
}

const NoFeedbackScreen = ({ navigation }) => {
  let feedbackToNo = feedback.answerNo[getRandomFeedback()]
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress={() => navigation.navigate("RED FLAGS")}
    >
      <Text style={styles.feedback}>
        {feedbackToNo}
      </Text>
    </TouchableOpacity>
  )
}

export default NoFeedbackScreen;

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