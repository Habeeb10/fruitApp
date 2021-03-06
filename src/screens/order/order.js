import React, { useState } from "react";
import { Text, View } from "react-native";
import { Toback } from "../../../assets/svg";
import { Header } from "../../shared/header";
import { Orderstyles as styles } from "../order/utils/styles";
import { Ordercomp } from "./utils/ordercomponents";
import { Button } from "../../shared/button";
import { Container } from "../../common/Container";
import { Modalcomponent, Modalcomponent2 } from "./utils/modalcomponent";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Order({ navigation }) {
  const [modal1, setModalState1] = useState(false);
  const [modal2, setModalState2] = useState(false);

  return (
    <>
      <Container>
        <View style={{ backgroundColor: "orange", height: 100 }}>
          <Header
            icon={<Toback />}
            back="Go back"
            title="My Basket"
            onPress={() => navigation.navigate("basket")}
          />
        </View>

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
        </View>
      </Container>

      <Modalcomponent
        isVisible={modal1}
        close={() => setModalState1(false)}
        handleDelivery={() => {
          setModalState1(false);
          setModalState2(true);
        }}
      />
      <Modalcomponent2
        isVisible={modal2}
        close={() => setModalState2(false)}
        handleDelivery={() => {
          navigation.navigate("complete");
          setModalState2(false);
        }}
      />
    </>
  );
}
