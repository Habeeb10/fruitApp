import { StyleSheet } from "react-native";
import * as colors from "../../../common/color";

export const Orderstyles = StyleSheet.create({
  title: {
    color: colors.orange,
    fontSize: 14,
  },
  butbox: {
    width: "95%",
    height: 90,
    backgroundColor: colors.orange,
    borderRadius: 20,
    marginTop: 58,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  ordercont: {
    backgroundColor: colors.white,
    width: "40%",
    height: 40,
  },
  cardcont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
  },
  ccv: {
    width: 130,
  },
  date: {
    width: 130,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
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
    backgroundColor: colors.white,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 100,
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
    height: 400,
    width: "100%",
    opacity: 1,
    marginTop: 10,
  },
  modalBox: {
    backgroundColor: colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 500,
    width: "100%",
  },

  orderbox: {
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
});
