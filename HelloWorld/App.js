import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style inheritance<Text style={styles.boldText}>text inside text</Text>
        </Text>
      </View>
      <View style={[styles.lightblueBg, styles.box, styles.boxShadow]}>
        {/* last style in array takes precedence */}
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.lightgreenBg, styles.box, styles.androidShadow]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  );
};

export default App;

export const styles = StyleSheet.create({
  darkMode: {
    backgroundColor: "black",
  },
  darkModeText: {
    color: "white",
  },
  boldText: {
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  box: {
    //   width: "25%",
    //   height: "25%",
    width: 250,
    height: 250,
    //padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 3,
    borderColor: "purple",
    borderStyle: "solid",
    borderRadius: 10,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6, //0:complete transparency 1:complete opacity
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 20,
    shadowColor: "blue",
  },
});

//try to create an object with these styles => you can do the job but you dont get autocomplete suggestions
