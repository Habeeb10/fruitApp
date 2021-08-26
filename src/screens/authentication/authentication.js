import React, { useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import { Authenticationstyles as styles } from "../authentication/utils/styles";
import { fruitbascket } from "../../../assets/images";
import Ellipse from "../../../assets/svg";
import { drops } from "../../../assets/images";
import { Button } from "../../shared/button";
import { Fillinput } from "../../shared/input";
import { Container } from "../../common/Container";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { hp } from "../../common/utils";

export default function Authentication({ navigation }) {
  const [firstname, setFirstname] = useState("");

  const handleStart = () => {
    if (!firstname) {
      return Alert.alert("Warning", "Firstname is Required");
    } else navigation.navigate("home");
  };
  return (
    <Container>
      <KeyboardAwareScrollView>
        <View
          style={{
            backgroundColor: "orange",
            paddingBottom: hp(31),
          }}
        >
          <Image
            source={fruitbascket}
            style={styles.basket}
            resizeMode="contain"
          />
          <View style={styles.ellipse}>
            <Ellipse />
          </View>
        </View>
        <View style={styles.cont}>
          <Text style={styles.combo}>What is your firstname?</Text>
          <Fillinput
            placeholder="Tony"
            value={firstname}
            onchange={setFirstname}
          />
          <Button
            title="Start Ordering"
            style={{ marginTop: hp(42) }}
            onPress={handleStart}
          />
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
}
