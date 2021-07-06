import React, { useState } from "react";
import { View } from "react-native";
import { Toback } from "../../../assets/svg";
import { Header } from "../../shared/header";
import { Container } from "../../common/Container";

export default function Delivery() {
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
      </Container>
    </>
  );
}
