import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Exit } from "../../../../assets/svg";
import { Orderstyles as styles } from "./styles";
import { Button } from "../../../shared/button";
import Modal from "react-native-modal";
import { Labelinput } from "../../../shared/labelinput";

export const Modalcomponent = ({ close, isVisible }) => {
  return (
    <View>
      <Modal
        visible={isVisible}
        style={{ marginHorizontal: 0, backgroundColor: "rgba(0,0,0,.3)" }}
        coverScreen
      >
        <View style={{ height: 0 }}>
          <TouchableOpacity style={styles.exitbox} onPress={close}>
            <Exit />
          </TouchableOpacity>
          <View style={styles.modalBox}>
            <Labelinput
              label="Delivery address"
              placeHolder="10th avenue, Lekki, Lagos State"
            />
            <Labelinput label="Number we can call" placeHolder="09090605708" />
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
    </View>
  );
};

export const Modalcomponent2 = ({ close, isVisible }) => {
  return (
    <Modal
      visible={isVisible}
      style={{ marginHorizontal: 0, backgroundColor: "rgba(0,0,0,.3)" }}
      coverScreen
    >
      <View style={{ position: "absolute", right: 0, left: 0, bottom: 42 }}>
        <TouchableOpacity style={styles.exitbox} onPress={close}>
          <Exit />
        </TouchableOpacity>
        <View style={styles.modalBox2}>
          <Labelinput label="Card Holders Name" placeHolder="Adolphus Chris" />
          <Labelinput label="Card Number" placeHolder="1234 5678 9012 1314" />
          <View style={styles.cardcont}>
            <Labelinput label="Date" placeHolder="10/30" style={styles.date} />
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
  );
};