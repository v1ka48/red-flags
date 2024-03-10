import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Button } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161616",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Logo width={600} marginLeft={220}  />
      <Button
        title="START GAME"
        onPress={() => navigation.navigate("RED FLAGS")}
        buttonStyle={{
          height: 60,
          backgroundColor: "#de2e1e",
          borderWidth: 2,
          borderColor: '#161616',
          borderRadius: 30,
        }}
        containerStyle={{ 
          width: 220,
          marginBottom: 20,
        }}
        titleStyle={{ fontWeight: 'bold', color: "#161616" }}
      />
      <Button
        title="INSTRUCTIONS"
        onPress={() => navigation.navigate("INSTRUCTIONS")}
        buttonStyle={{
          height: 60,
          backgroundColor: '#161616',
          borderWidth: 2,
          borderColor: '#de2e1e',
          borderRadius: 30,
        }}
        containerStyle={{
          width: 220,
        }}
        titleStyle={{ fontWeight: 'bold', color: "#de2e1e" }}
      />
    </View>
  );
};

<<<<<<< Updated upstream
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161616",
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
=======
export default HomeScreen;
>>>>>>> Stashed changes
