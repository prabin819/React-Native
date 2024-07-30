import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6a51ae",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <Pressable onPress={() => alert("Menu button pressed.")}>
              <Text style={{ color: "#FFF", fontSize: 16 }}>Menu</Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: "#e8e4f3",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome to Home",
            headerStyle: {
              backgroundColor: "#6a51ae",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Pressable onPress={() => alert("Menu button pressed.")}>
                <Text style={{ color: "#FFF", fontSize: 16 }}>Menu</Text>
              </Pressable>
            ),
            contentStyle: {
              backgroundColor: "#e8e4f3",
            },
          }}
        />
        {/* by default, the topmost screen in the navigator is the initial screen if initialRouteName is not specified*/}
        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{ name: "Guest" }}
          // options={({ route }) => ({
          //   title: route.params.name,
          // })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
