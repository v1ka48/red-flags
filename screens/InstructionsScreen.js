import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InstructionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        How to Play
      </Text>
      <Text style={styles.paragraph}>
        Can be played by two or more people.
        Rules are simple: 
      </Text>
      <Text style={styles.paragraph}>
        The player who holds the
        phone is single, and they need to
        choose one person who they would go
        on a date with.
      </Text>
      <Text style={styles.paragraph}>
        If the player can not justify their choice or 
        picked NO three times in a row - they have to
        take a shot. 
      </Text>
      <Text style={styles.paragraph}>
        The player then passes the phone to the person
        of their choice. 
      </Text>
    </View>
  )
}

export default InstructionScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  heading: {
    marginBottom: 30,
    color: "#CC0033",
    fontSize: 30, 
    fontWeight: "bold",
  },
  paragraph: {
    textAlign: 'justify',
    marginBottom: 10,
    fontSize: 25, 
    fontWeight: "bold",
    paddingHorizontal: 30
  }
})