import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { fetchUpdateAsync, reloadAsync } from "expo-updates";
import { ProgressBar } from "react-native-paper";
import * as Updates from "expo-updates";

const AppAutoUpdateScreen = ({ navigation }) => {

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 1) {
        setProgress((prevProgress) => prevProgress + 0.1);
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const checkAppUpdates = async () => {
    if (!__DEV__) {
      try {
        const { isAvailable } = await Updates.checkForUpdateAsync();
        if (isAvailable) {
          alert('yes it works');
          getUpdates();
        } else {
          navigation.replace("Loading");
        }
      } catch (error) {
      }
    }
    else {
      navigation.replace("Loading");
    }
  };

  useEffect(() => {
    checkAppUpdates();
  }, []);

  const getUpdates = async () => {
    try {
      await fetchUpdateAsync();
      await reloadAsync();
    } catch (e) {
      await reloadAsync();
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'grey' }}>
      <View
        style={{
          height: "100%",
          width: "100%",
          justifyContent: 'center',
          alignItems: 'center',
          position: "absolute",
          borderRadius: 30,
        }}
      >
        {/* <SplashImage /> */}
      </View>
      <View style={{ position: "absolute", bottom: "10%", alignSelf: 'center' }}>
        <ProgressBar
          progress={progress}
          color={'green'} // You can change the color as needed
          style={{
            width: 317,
            height: 10,
            borderRadius: 10,
            borderColor: "black",
          }}
        />
      </View>
    </View>
  );
};

export default AppAutoUpdateScreen;

