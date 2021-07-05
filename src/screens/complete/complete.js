import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View } from "react-native";
import { Check } from "../../../assets/svg";
import { Completestyles as styles } from "./utils/styles";

export default function Complete({ navigation }) {
  return (
    <SafeAreaView>
      <StatusBar style={"dark"} />
      <View style={styles.checkbox}>
        <View style={styles.checkbox2}>
          <Check />
        </View>
      </View>
    </SafeAreaView>
  );
}
