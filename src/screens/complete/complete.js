import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Check } from "../../../assets/svg";
import { white } from "../../common/color";
import { Container } from "../../common/Container";
import { Button } from "../../shared/button";
import { Completestyles as styles } from "./utils/styles";

export default function Complete({ navigation }) {
  return (
    <Container backgroundColor={white} barColor={white}>
      <TouchableOpacity style={styles.checkbox}>
        <TouchableOpacity style={styles.checkbox2}>
          <Check />
        </TouchableOpacity>
      </TouchableOpacity>
      <Text style={styles.congrats}>Congratulations!!!</Text>
      <Text style={styles.order}>
        Your order have been taken and is being attended to
      </Text>
      <Button
        title="Track order"
        style={styles.button}
        onPress={() => navigation.navigate("delivery")}
      />

      <Button
        title="Continue Shopping"
        style={styles.shoppingbutton}
        titleStyle={styles.title}
        onPress={() => navigation.navigate("authentication")}
      />
    </Container>
  );
}
