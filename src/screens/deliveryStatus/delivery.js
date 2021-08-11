import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Final, Toback } from "../../../assets/svg";
import { Header } from "../../shared/header";
import { Container } from "../../common/Container";
import { Deliverystyles as styles } from "./utils/styles";
import { map } from "../../../assets/images";
import { Deliverycomp } from "./utils/deliverycomponent";

export default function Delivery({ navigation }) {
  return (
    <>
      <Container>
        <View style={{ backgroundColor: "orange", height: 100 }}>
          <Header
            icon={<Toback />}
            back="Go back"
            title="Delivery Status"
            onPress={() => navigation.navigate("basket")}
          />
        </View>
        <View style={{ alignSelf: "flex-start" }}>
          <Deliverycomp />
        </View>

        <Image source={map} style={styles.map} />
        <View style={styles.receivedbox}>
          <TouchableOpacity style={styles.checkedbox}>
            <TouchableOpacity style={styles.checkcont}>
              <Final />
            </TouchableOpacity>
          </TouchableOpacity>
          <Text style={styles.orderreceived}>Order Received</Text>
        </View>
      </Container>
    </>
  );
}
