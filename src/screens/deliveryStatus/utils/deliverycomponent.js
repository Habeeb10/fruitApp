import React from "react";
import { StyleSheet, View } from "react-native";
import { Checked, Phone } from "../../../../assets/svg";
import * as Images from "../../../../assets/images";
import { Deliverycard } from "./deliverycard";

const DeliveryList = [
  {
    icon: Images.note,
    title: "Order Taken",
    icon2: <Checked />,
  },
  {
    icon: Images.order,
    title: "Order Is Being Prepared",
    icon2: <Checked />,
  },
  {
    icon: Images.deliverybike,
    title: "Order Is Being Delivered",
    agent: "Your delivery agent is coming",
    icon2: <Phone />,
  },
];

export const Deliverycomp = () => {
  return (
    <View>
      {DeliveryList.map((item, index) => {
        return (
          <Deliverycard
            key={index}
            icon={item.icon}
            title={item.title}
            agent={item.agent}
            icon2={item.icon2}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({});
