import React from "react";
import { ColorSchemeName } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import AppAutoUpdateScreen from "../screens/Splash/AppAutoUpdateScreen";
import AnonymousLogin from "../screens/Splash/AnonymousLogin";
const Stack = createStackNavigator();

const RootNavigator = () => {

  return (
    <Stack.Navigator
      initialRouteName="AnonymousLogin"
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen
        name="AppAutoUpdateScreen"
        component={AppAutoUpdateScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AnonymousLogin"
        component={AnonymousLogin}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
