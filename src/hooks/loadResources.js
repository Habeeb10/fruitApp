// import { loadAsync } from "expo-font";
// import React, { useEffect, useState } from "react";

// export default function LoadFonts() {
//   const [isLoadingComplete, setLoadingComplete] = useState(false);

//   async function loadResourcesAndDataAsync() {
//     try {
//       await loadAsync({
//         raleway: require("../../assets/fonts/Raleway/static/Raleway-Italic.ttf"),
//       });
//     } catch (e) {
//       console.warn(e);
//     } finally {
//       setLoadingComplete(true);
//     }
//   }

//   useEffect(() => {
//     loadResourcesAndDataAsync();
//   }, []);
//   return { isLoadingComplete };
// }
