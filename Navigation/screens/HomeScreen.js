import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to About"
        onPress={() =>
          navigation.navigate("About", {
            name: "Viswash",
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
