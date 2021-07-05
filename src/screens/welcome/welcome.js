import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { Welcomestyles as styles } from "../welcome/utils/styles";
import { bascket } from "../../../assets/images";
import Ellipse from "../../../assets/svg";
import { drops } from "../../../assets/images";
import { Button } from "../../shared/button";

export default function Welcome({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "orange" }}>
      <StatusBar style={"dark"} />
      <Image source={drops} style={styles.drops} />
      <Image source={bascket} style={styles.basket} />
      <View style={styles.ellipse}>
        <Ellipse />
      </View>
      <View style={styles.cont}>
        <Text style={styles.combo}>Get The Freshest Fruit Salad Combo</Text>
        <Text style={styles.today}>
          We deliver the best and freshest fruit salad in town. Order for a
          combo today!!!
        </Text>
        <Button
          title="Let's Continue"
          style={{ marginTop: 60 }}
          onPress={() => navigation.navigate("authentication")}
        />
      </View>
    </SafeAreaView>
  );
}
