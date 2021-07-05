import { StyleSheet } from "react-native";
import * as colors from "../../../common/color";

export const Cardstyles = StyleSheet.create({
  paymentbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  pay: {
    color: colors.orange,
    fontSize: 16,
  },
  paybox: {
    width: 125,
    height: 56,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.orange,
    marginTop: 25,
  },
  exitbox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.wheat,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  total: {
    color: colors.black,
    fontSize: 16,
    marginBottom: 5,
  },
  amount: {
    fontSize: 24,
    color: colors.deepblue,
  },
  button: {
    width: "60%",
  },
  checkoutbox: {
    flexDirection: "row",
    marginTop: 90,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  modalBox2: {
    backgroundColor: colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 500,
    width: "100%",
    opacity: 1,
    marginTop: 20,
  },
  modalBox: {
    backgroundColor: colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 400,
    width: "100%",
    opacity: 1,
    marginTop: 20,
  },

  orderbox: {
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  cont: {
    marginTop: 100,
  },
});
