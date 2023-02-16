import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InstructionScreen = ({ navigation }) => {
  return (
    <View>
      <Text>InstructionScreen</Text>
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
})