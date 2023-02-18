import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '@rneui/themed';
import flags from '../data/flags.json';

function getRandomGreenFlag() {
  return Math.floor(Math.random() * flags.greenFlags.length);
}

function getRandomRedFlag() {
  return Math.floor(Math.random() * flags.redFlags.length);
}

function getRandomFlags() {
  let traits = [
    flags.greenFlags[getRandomGreenFlag()],
    flags.greenFlags[getRandomGreenFlag()],
    flags.redFlags[getRandomRedFlag()]
  ]
  while (traits[0] == traits[1]) {
    traits[0] = flags.greenFlags[getRandomGreenFlag()];
  }
  return traits;
}

const CardScreen = ({ navigation }) => {
  const [flags, setFlags] = useState(getRandomFlags());
  const [answerNo, setAnswerNo] = useState(0);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setFlags(getRandomFlags());
    });
    return unsubscribe;
    }, [navigation]
  );
  return (
    <View style={styles.container}>
      <Text style={styles.greenFlag}>
        {flags[0]}
      </Text>
      <Text style={styles.greenFlag}>
        {flags[1]}
      </Text>
      <Text style={styles.redFlag}>
        {flags[2]}
      </Text>
      <View style={{ height: 350 }}/>
      <View style={styles.buttonContainer}>
        <Button
          title="NO"
          onPress={() => {
            setAnswerNo(answerNo + 1);
            if (answerNo === 3) {
              setAnswerNo(0);
              navigation.navigate("TakeAShot");
            } else {
            navigation.navigate("FeedbackToNo");
            }
          }}
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
          onPress={() => {
            setAnswerNo(0);
            navigation.navigate("FeedbackToYes")
          }}
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