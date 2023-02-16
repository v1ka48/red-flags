import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.logoName} >
        RED FLAGS
      </Text>
      <Button
        title="START GAME"
        onPress={() => navigation.navigate("RED FLAGS")}
        buttonStyle={{
          height: 60,
          backgroundColor: 'white',
          borderWidth: 2,
          borderColor: 'black',
          borderRadius: 30,
        }}
        containerStyle={{
          width: 220,
          marginBottom: 20,
        }}
        titleStyle={{ fontWeight: 'bold', color: "black" }}
      />
      <Button
        title="INSTRUCTIONS"
        onPress={() => navigation.navigate("INSTRUCTIONS")}
        buttonStyle={{
          height: 60,
          backgroundColor: "#CC0033",
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 30,
        }}
        containerStyle={{ width: 220 }}
        titleStyle={{ fontWeight: 'bold' }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  logoName: {
    marginBottom: 50,
    color: "#CC0033",
    fontSize: 50, 
    fontWeight: "bold",
  },
});