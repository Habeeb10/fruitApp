import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { Toback, Exit } from "../../../assets/svg";
import { Header } from "../../shared/header";
import { Cardstyles as styles } from "./utils/styles";
import { Cardcomp } from "./utils/cardcomponent";
import { Button } from "../../shared/button";
import Modal from "react-native-modal";
import { Labelinput } from "../../shared/labelinput";

export default function Cardinput({ navigation }) {
  const [modal, setModalState] = useState(false);
  return (
    <SafeAreaView style={{ backgroundColor: "orange", height: "20%" }}>
      <StatusBar style={"dark"} />
      <Header
        icon={<Toback />}
        back="Go back"
        title="My Basket"
        onPress={() => navigation.navigate("order")}
      />
      <View style={styles.cont}>
        <Cardcomp />
        <View style={styles.checkoutbox}>
          <View>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.amount}># 60,000</Text>
          </View>
          <Button title="Checkout" style={styles.button} />
        </View>
        <View>
          <View style={styles.paymentbox}>
            <TouchableOpacity style={styles.paybox}>
              <Text style={styles.pay}>Pay on delivery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.paybox}
              onPress={() => setModalState(true)}
            >
              <Text style={styles.pay}>Pay with card</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          visible={modal}
          transparent={true}
          backdropOpacity={0.7}
          hasBackdrop
        >
          <View style={{ height: 240 }}>
            <TouchableOpacity
              style={styles.exitbox}
              onPress={() => setModalState(false)}
            >
              <Exit />
            </TouchableOpacity>
            <View style={styles.modalBox2}>
              <Labelinput
                label="Card Holders Name"
                placeHolder="Adolphus Chris"
              />
              <Labelinput
                label="Card Number"
                placeHolder="1234 5678 9012 1314"
              />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
