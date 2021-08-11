import "react-native-gesture-handler";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Basketstyles as styles } from "../basket/utils/styles";
import { Hart, Toback } from "../../../assets/svg";
import { Value } from "./utils/valuecomponent";
import { Button } from "../../shared/button";
import { Header } from "../../shared/header";
import { Container } from "../../common/Container";

export default function Basket({ navigation, route }) {
  const { details } = route.params;
  const { title, amount } = details;
  const icon = getImage(title);

  return (
    <Container>
      <View style={{ backgroundColor: "orange", height: "35%" }}>
        <Header
          icon={<Toback />}
          back="Go back"
          onPress={() => navigation.navigate("home")}
        />
        <Image source={icon} style={styles.image} />
      </View>

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
          Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.
        </Text>
        <View style={styles.line}></View>
      </View>
      <Text style={styles.brunch}>
        If you are looking for a new fruit salad to eat today, quinoa is the
        perfect brunch for you. make
      </Text>
      <View style={styles.addtocart}>
        <TouchableOpacity style={styles.hartbox}>
          <Hart />
        </TouchableOpacity>
        <Button
          title="Add to basket"
          style={styles.button}
          onPress={() => navigation.navigate("order")}
        />
      </View>
    </Container>
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
