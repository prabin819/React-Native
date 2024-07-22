import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stylesheet api</Text>
    </View>
  );
};

export default App;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  title: {
    color: "blue",
  },
});

//try to create an object with these styles => you can do the job but you dont get autocomplete suggestions
