import { SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export const Container = ({
  children,
  barColor = "orange",
  backgroundColor,
}) => {
  return (
    <>
      <StatusBar style={"dark"} />
      <SafeAreaView style={{ backgroundColor: barColor }} />
      <SafeAreaView style={{ flex: 1, backgroundColor }}>
        {children}
      </SafeAreaView>
    </>
  );
};
