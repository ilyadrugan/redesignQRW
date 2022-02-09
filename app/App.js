import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Loading from "./Pages/Loading";
import NewMain from "./Pages/NewMain";
import QRScanner from "./QRScanner";
import Tutorial from "./Pages/Tutorial";
import Tutorial2 from "./Pages/Tutorial2";
import Tutorial3 from "./Pages/Tutorial3";

import { StatusBar } from "react-native";
import UserData from "./UserData";

const Stack = createStackNavigator();

export default function App() {
//UserData.clearCache();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ffffff" barStyle="#ffffff" />
      <Stack.Navigator
        initialRouteName="NewMain"
        screenOptions={{
          headerShown:false,
          cardStyle: { backgroundColor: "transparent" },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: "clamp",
              }),
            },
          }),
        }}
        presentation="modal"
      >
        <Stack.Screen name="Tutorial" component={Tutorial} />
        <Stack.Screen name="Tutorial2" component={Tutorial2} />
        <Stack.Screen name="Tutorial3" component={Tutorial3} />
        
        <Stack.Screen name="NewMain" component={NewMain} initialParams={{ newCode: false}} />
        <Stack.Screen name="QRScanner" component={QRScanner} />
        <Stack.Screen name="Loading" component={Loading} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
