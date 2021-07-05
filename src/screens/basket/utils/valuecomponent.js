import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Add, Sub } from "../../../../assets/svg";
import { Basketstyles as styles } from "../utils/styles";

export const Value = () => {
  const [value, setValue] = useState(1);

  return (
    <View style={styles.valuebox}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => (value > 1 ? setValue(value - 1) : null)}
      >
        <Sub />
      </TouchableOpacity>

      <Text style={styles.one}>{value}</Text>

      <TouchableOpacity
        style={styles.boxPlus}
        onPress={() => (value >= 1 && value < 20 ? setValue(value + 1) : null)}
      >
        <Add />
      </TouchableOpacity>
    </View>
  );
};
