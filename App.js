import "react-native-gesture-handler";
import React from "react";
import Navigator from "./src/Navigator/Navigation";
import Splashscreen from "./src/screens/splash/splash";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  const [isVisible, setVisible] = useState(true);
  // const { isLoadingComplete } = LoadFonts();

  // if (isLoadingComplete) {
  //   return <Navigator />;
  // } else return null;

  const showScreen = () => {
    setVisible(false);
  };

  useEffect(() => {
    setTimeout(function () {
      showScreen();
    }, 500);
  });

  return (
    <View style={styles.MainContainer}>
      {isVisible === true ? <Splashscreen /> : <Navigator />}
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },

  SplashScreen_RootView: {
    justifyContent: "center",
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  SplashScreen_ChildView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF2156",
    flex: 1,
  },
});
