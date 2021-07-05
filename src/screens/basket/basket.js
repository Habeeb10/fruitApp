import "react-native-gesture-handler";
import React, { useState } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Basketstyles as styles } from "../basket/utils/styles";
import { Add, Hart, Sub, Toback } from "../../../assets/svg";
import { Value } from "./utils/valuecomponent";
import { Button } from "../../shared/button";
import { Header } from "../../shared/header";

export default function Basket({ navigation, route }) {
  const { details } = route.params;
  const { title, amount } = details;
  const icon = getImage(title);

  return (
    <SafeAreaView style={{ backgroundColor: "orange", height: "40%" }}>
      <Header
        icon={<Toback />}
        back="Go back"
        onPress={() => navigation.navigate("home")}
      />
      <Image source={icon} style={styles.image} />

      <StatusBar style={"light"} />

      <View style={styles.cont}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.box2}>
          <Value />
          <Text style={styles.amount}>{`# ${amount}`}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.packbox}>
          <Text style={styles.pack}>One Pack Contains:</Text>
          <View style={styles.lines}></View>
          <Text style={styles.mint}>
            Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh
            mint.
          </Text>
          <View style={styles.line}></View>
        </View>
        <Text style={styles.brunch}>
          If you are looking for a new fruit salad to eat today, quinoa is the
          perfect brunch for you. make
        </Text>
        <View style={styles.addtocart}>
          <View style={styles.hartbox}>
            <Hart />
          </View>
          <Button
            title="Add to basket"
            style={styles.button}
            onPress={() => navigation.navigate("order")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const getImage = (title) => {
  switch (title) {
    case "Quinoa fruit salad":
      return require("../../../assets/images/breakfast.png");

    case "Tropical fruit salad":
      return require("../../../assets/images/tropical.png");

    case "melon fruit salad":
      return require("../../../assets/images/berry.png");

    default:
      return null;
  }
};
