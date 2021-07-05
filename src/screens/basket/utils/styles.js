import { StyleSheet } from "react-native";
import * as colors from "../../../common/color";

export const Basketstyles = StyleSheet.create({
  button: {
    width: "70%",
  },
  addtocart: {
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  hartbox: {
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: colors.lightorange,
    alignItems: "center",
    justifyContent: "center",
  },
  brunch: {
    fontSize: 11,
    marginTop: 20,
    marginLeft: 30,
    fontWeight: "500",
    width: 284,
    color: colors.black,
  },
  mint: {
    width: 340,
    marginLeft: 30,
    fontSize: 14,
    color: colors.deepblue,
  },
  packbox: {
    marginTop: 32,
  },
  lines: {
    width: 173,
    height: 2,
    backgroundColor: colors.orange,
    marginLeft: 30,
    marginBottom: 10,
  },
  pack: {
    fontWeight: "500",
    fontSize: 20,
    color: colors.deepblue,
    marginLeft: 30,
    marginBottom: 5,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: colors.grey,
    marginTop: 32,
  },
  box2: {
    flexDirection: "row",
    alignItems: "center",
  },
  amount: {
    color: colors.deepblue,
    fontSize: 22,
    fontWeight: "500",
    marginLeft: 130,
    marginTop: 30,
  },
  title: {
    fontSize: 28,
    color: colors.deepblue,
    marginLeft: 30,
    marginTop: 30,
    fontWeight: "500",
  },
  valuebox: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
    marginTop: 30,
  },
  boxPlus: {
    borderRadius: 15,
    width: 30,
    height: 30,
    backgroundColor: colors.lightorange,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    borderRadius: 15,
    width: 30,
    height: 30,
    borderColor: colors.transparent,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  one: {
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  cont: {
    marginTop: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  image: {
    height: 176,
    width: 176,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 20,
  },
  container: {
    flex: 1,
  },
});
