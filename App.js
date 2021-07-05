import "react-native-gesture-handler";
import React from "react";
import Welcome from "./src/screens/welcome/welcome";
import Navigator from "./src/Navigator/Navigation";

export default function App() {
  return <Navigator />;
}

// "My title", "My message", (text) => console.log(text)
// <SafeAreaView style={styles.container}>
//   <Button
//     title="click"
//     onPress={() =>
//       Alert.alert(" Registration Successfull", "my message", [
//         { text: "okay", onPress: () => console.log("okay") },
//       ])
//     }
//   />
// </SafeAreaView>
