import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { Toback, Exit } from "../../../assets/svg";
import { Header } from "../../shared/header";
import { Orderstyles as styles } from "../order/utils/styles";
import { Ordercomp } from "./utils/ordercomponents";
import { Button } from "../../shared/button";
import Modal from "react-native-modal";
import { Labelinput } from "../../shared/labelinput";

export default function Order({ navigation }) {
  const [modal, setModalState1] = useState(false);
  const [modal2, setModalState2] = useState(false);
  return (
    <SafeAreaView style={{ backgroundColor: "orange", height: "20%" }}>
      <StatusBar style={"dark"} />
      <Header
        icon={<Toback />}
        back="Go back"
        title="My Basket"
        onPress={() => navigation.navigate("basket")}
      />
      <View style={styles.cont}>
        <Ordercomp />
        <View style={styles.checkoutbox}>
          <View>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.amount}># 60,000</Text>
          </View>
          <Button
            title="Checkout"
            style={styles.button}
            onPress={() => setModalState1(true)}
          />
        </View>
        <Modal
          visible={modal}
          transparent={true}
          backdropOpacity={0.2}
          hasBackdrop
        >
          <View style={{ height: 0.1 }}>
            <TouchableOpacity
              style={styles.exitbox}
              onPress={() => setModalState1(false)}
            >
              <Exit />
            </TouchableOpacity>
            <View style={styles.modalBox}>
              <Labelinput
                label="Delivery address"
                placeHolder="10th avenue, Lekki, Lagos State"
              />
              <Labelinput
                label="Number we can call"
                placeHolder="09090605708"
              />
              <View style={styles.paymentbox}>
                <TouchableOpacity style={styles.paybox}>
                  <Text style={styles.pay}>Pay on delivery</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.paybox}
                  onPress={() => {
                    setModalState1(false);
                    setModalState2(true);
                  }}
                >
                  <Text style={styles.pay}>Pay with card</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          visible={modal2}
          transparent={true}
          backdropOpacity={0.7}
          hasBackdrop
        >
          <View style={{ height: 240 }}>
            <TouchableOpacity
              style={styles.exitbox}
              onPress={() => setModalState2(false)}
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
              <View style={styles.cardcont}>
                <Labelinput
                  label="Date"
                  placeHolder="10/30"
                  style={styles.date}
                />
                <Labelinput label="CCV" placeHolder="123" style={styles.ccv} />
              </View>
              <View style={styles.butbox}>
                <Button
                  style={styles.ordercont}
                  title="Complete Order"
                  titleStyle={styles.title}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
