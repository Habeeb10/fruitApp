import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { Welcomestyles as styles } from "../welcome/utils/styles";
import { bascket } from "../../../assets/images";
import Ellipse from "../../../assets/svg";
import { Button } from "../../shared/button";
import { Container } from "../../common/Container";
import { hp } from "../../common/utils";

export default function Welcome({ navigation }) {
  return (
    <Container>
      <View style={{ backgroundColor: "orange", paddingBottom: hp(100) }}>
        <Image source={bascket} style={styles.basket} resizeMode="contain" />
        <View style={styles.ellipse}>
          <Ellipse />
        </View>
      </View>
      <View style={styles.cont}>
        <Text style={styles.combo}>Get The Freshest Fruit Salad Combo</Text>
        <Text style={styles.today}>
          We deliver the best and freshest fruit salad in town. Order for a
          combo today!!!
        </Text>
        <Button
          title="Let's Continue"
          style={{ marginTop: hp(58) }}
          onPress={() => navigation.navigate("authentication")}
        />
      </View>
    </Container>
  );
}
