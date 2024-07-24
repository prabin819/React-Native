import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";

const PokemonCard = () => {
  return (
    <View style={styles.card}>
      <Text>PokemonCard</Text>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
