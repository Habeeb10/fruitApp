import { StyleSheet } from "react-native";
import * as colors from "../../../common/color";

export const Completestyles = StyleSheet.create({
  title: {
    color: colors.orange,
  },
  shoppingbutton: {
    borderWidth: 1,
    borderColor: colors.orange,
    backgroundColor: colors.white,
    width: "50%",
  },
  button: {
    width: "40%",
    marginTop: 56,
    marginBottom: 60,
  },
  order: {
    color: colors.deepblue,
    fontWeight: "400",
    fontSize: 20,
    alignSelf: "center",
    marginTop: 30,
    textAlign: "center",
    width: 245,
  },
  congrats: {
    color: colors.deepblue,
    fontWeight: "500",
    fontSize: 32,
    alignSelf: "center",
    marginTop: 40,
    textAlign: "center",
  },
  checkbox: {
    width: 164,
    height: 164,
    borderWidth: 1,
    borderColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 130,
    alignSelf: "center",
    borderRadius: 100,
    backgroundColor: colors.lightgreen,
  },
  checkbox2: {
    width: 100,
    height: 100,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    borderColor: colors.green,
    backgroundColor: colors.green,
  },
});
