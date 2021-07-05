import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { Authenticationstyles as styles } from "../authentication/utils/styles";
import { fruitbascket } from "../../../assets/images";
import Ellipse from "../../../assets/svg";
import { drops } from "../../../assets/images";
import { Button } from "../../shared/button";
import { Fillinput } from "../../shared/input";
import { Container } from "../../common/Container";

export default function Authentication({ navigation }) {
  return (
    <Container>
      <View style={{ backgroundColor: "orange", height: "63%" }}>
        <Image source={drops} style={styles.drops} />
        <Image source={fruitbascket} style={styles.basket} />
        <View style={styles.ellipse}>
          <Ellipse />
        </View>
        <View style={styles.cont}>
          <Text style={styles.combo}>What is your firstname?</Text>
          <Fillinput placeholder="Tony" style={{ marginTop: 20 }} />
          <Button
            title="Start Ordering"
            style={{ marginTop: 30 }}
            onPress={() => navigation.navigate("home")}
          />
        </View>
      </View>
    </Container>
  );
}
