import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161616",
    flex: 1,
    padding: 10,
  },
  title: {
    marginTop: 50,
    color: "#fefffe",
    fontSize: 40,
    padding: 10,
    fontWeight: "bold"
  },
})

const PreferenceScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Preference
        </Text>
      </View>
    )
}

export default PreferenceScreen;