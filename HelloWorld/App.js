import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Alert" onPress={() => Alert.alert("invalid data")} />
      <Button
        title="Alert2"
        onPress={() => Alert.alert("invalid data", "dob incorrect")}
      />
      <Button
        title="Alert3"
        onPress={() =>
          Alert.alert("invalid data", "dob incorrect", [
            {
              text: "cancel",
              onPress: () => {
                console.log("cancel pressed");
              },
            },
            {
              text: "ok",
              onPress: () => {
                console.log("ok pressed");
              },
            },
          ])
        }
      />
    </View>
  );
}
