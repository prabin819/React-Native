import { StyleSheet, Text, View, Button } from "react-native";

export default function AboutScreen({ navigation, route }) {
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Update name"
        onPress={() =>
          navigation.setParams({
            name: "Codevolution",
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
