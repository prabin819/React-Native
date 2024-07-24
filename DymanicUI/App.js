// import { StyleSheet, View, Text } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.box]}>
//         <Text style={styles.text}>Welcome!</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "plum",
//   },
//   box: {
//     padding: 20,
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });
//in ios we dont see welcome cuz its hiddem behind the notch
//we can use padding:60 to the container but this is not the correct way
//another problem is that companies may release a new device with notch at a different place
//solution is to find a safe area

import { StyleSheet, View, Text, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={[styles.box]}>
          <Text style={styles.text}>Welcome!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
