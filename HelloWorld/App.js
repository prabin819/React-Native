import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.lightblueBg, styles.box]}>
        {/* last style in array takes precedence */}
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.lightgreenBg, styles.box]}>
        <Text>Lightgreen box</Text>
      </View>
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
  box: {
    //   width: "25%",
    //   height: "25%",
    width: 100,
    height: 100,
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
});

//try to create an object with these styles => you can do the job but you dont get autocomplete suggestions
