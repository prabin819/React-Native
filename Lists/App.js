import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
  SectionList,
} from "react-native";
import pokemonList from "./data.json";
import groupedPokemon from "./grouped-data.json";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map(
          (
            pokemon //not the preferred technique
          ) => (
            <View style={styles.card} key={pokemon.id}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          )
        )}
      </ScrollView> */}
      <View style={styles.scrollView}>
        {/* <FlatList
          data={pokemonList}
          renderItem={({ item }) => (
            <View style={styles.card} key={item.id}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          )}
          //horizontal={true}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={<View style={{ height: 16 }}></View>}
          ListEmptyComponent={<Text>No items found</Text>}
          ListHeaderComponent={
            <Text style={styles.headerText}>Pokemon List</Text>
          }
          ListFooterComponent={
            <Text style={styles.footerText}>End of List</Text>
          }
        /> */}
        <SectionList
          sections={groupedPokemon}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeaderText}>{section.type}</Text>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 16,
              }}
            />
          )}
          SectionSeparatorComponent={() => (
            <View
              style={{
                height: 16,
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    //marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  sectionHeaderText: {
    backgroundColor: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
});
