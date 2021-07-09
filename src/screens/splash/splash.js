import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export default function Splashscreen() {
  return (
    <View style={styles.SplashScreen_RootView}>
      <StatusBar style={"dark"} />
      <View style={styles.SplashScreen_ChildView}>
        <Image
          source={require("../../../assets/images/splash.png")}
          style={{ width: 250, height: 250, resizeMode: "contain" }}
        />
        <View
          style={{
            width: 200,
            height: 50,
            backgroundColor: "#FFA451",
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "400",
              lineHeight: 40,
            }}
          >
            Fruit Hub
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: "white",
    flex: 1,
  },
});
