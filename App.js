import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import InstructionsScreen from './screens/InstructionsScreen';
import CardScreen from './screens/CardScreen';
import YesFeedbackScreen from './screens/YesFeedbackScreen';
import NoFeedbackScreen from './screens/NoFeedbackScreen';
import ShotScreen from './screens/ShotScreen';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#CC0033" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
}

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
          <Stack.Screen name="HOME" options={{headerShown: false}} component={HomeScreen} />
          <Stack.Screen name="INSTRUCTIONS" component={InstructionsScreen} />
          <Stack.Screen name="RED FLAGS" component={CardScreen} />
          <Stack.Screen name="FeedbackToNo" options={{headerShown: false}} component={NoFeedbackScreen} />
          <Stack.Screen name="FeedbackToYes" options={{headerShown: false}} component={YesFeedbackScreen} />
          <Stack.Screen name="TakeAShot" options={{headerShown: false}} component={ShotScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
