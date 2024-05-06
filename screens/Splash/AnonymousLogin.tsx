import { AppState, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import * as Updates from "expo-updates";

interface Props {
  navigation: any;
}
const AnonymousLogin: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    if (AppState.currentState === "active") {
      checkAppUpdates();
    }
    AppState.addEventListener("change", (nextAppState) => {
      checkAppUpdates();
    });
  }, []);

  const checkAppUpdates = async () => {
    if (!__DEV__) {
      alert("state change");
      try {
        const { isAvailable } = await Updates.checkForUpdateAsync();
        if (isAvailable) {
          alert("OTA is about to fetch")
          navigation.navigate("AppAutoUpdateScreen");
        }
        alert("Success: "+ JSON.stringify(isAvailable));
      } catch (error) {
        alert("Error: "+ JSON.stringify(error));
      }
    }
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.replace("ChooseRestuarant")}>
        <Text style={{ fontSize: 50, color: "black" }}>Testing Text New</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnonymousLogin;
