import { StyleSheet, View, Text, SafeAreaView, Platform } from "react-native";
import CustomButton from "./component/customButton/CustomButton";

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={[styles.box]}>
          <Text style={styles.text}>Welcome!</Text>
          <CustomButton title="press me" onPress={() => alert("Pressed!")} />
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
    paddingTop: Platform.OS === "android" ? 65 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 24,
        fontStyle: "italic",
      },
      android: {
        color: "blue",
        fontSize: 30,
        fontStyle: "italic",
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});
