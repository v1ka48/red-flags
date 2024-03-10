import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import InstructionsScreen from './screens/InstructionsScreen';
import CardScreen from './screens/CardScreen';
import YesFeedbackScreen from './screens/YesFeedbackScreen';
import NoFeedbackScreen from './screens/NoFeedbackScreen';
import ShotScreen from './screens/ShotScreen';
import PreferenceScreen from './screens/PreferenceScreen';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerShown: false,
}

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
          <Stack.Screen name="HOME" component={HomeScreen} />
          <Stack.Screen name="Preference" component={PreferenceScreen} />
          <Stack.Screen name="INSTRUCTIONS" component={InstructionsScreen} />
          <Stack.Screen name="RED FLAGS" options={{headerShown: true}} component={CardScreen} />
          <Stack.Screen name="FeedbackToNo" component={NoFeedbackScreen} />
          <Stack.Screen name="FeedbackToYes" component={YesFeedbackScreen} />
          <Stack.Screen name="TakeAShot" component={ShotScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
