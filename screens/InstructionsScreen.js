import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Logo from'../assets/GamePlay.svg'

const InstructionScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback  onPress={() => navigation.goBack()}>
      <View style={styles.container}>
        <Logo width={600} marginLeft={10}/>
        <Text style={styles.title}>
          RULES
        </Text>
        <Text style={styles.paragraph}>
          Rule 
        </Text>
        <Text style={[styles.title, styles.catch]}>
          THE CATCH
        </Text>
        <Text style={[styles.paragraph, styles.spacing]}>
          After three swipes left the player has to take  a shot  
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default InstructionScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161616",
    flex: 1,
    alignItems: "left",
    justifyContent: "center",
    padding: 10,
  },
  title: {
    color: "#fefffe",
    fontSize: 20, 
    fontWeight: "bold",
    paddingHorizontal: 30
  },
  paragraph: {
    textAlign: 'justify',
    color: "#fefffe",
    marginBottom: 10,
    fontSize: 20, 
    fontWeight: "bold",
    paddingHorizontal: 30,
  },
  catch: {
    color: '#de2e1e',
  },
  spacing: {
    marginBottom: 300,
  }
})