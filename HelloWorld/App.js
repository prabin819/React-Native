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
} from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="press"
        onPress={() => setIsModalVisible(true)}
        color="midnightblue"
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        //triggered when user presses back button on android or dismisses the modal with a gesture on ios
        animationType="slide" //none by default, others are slide and fade
        presentationStyle="pageSheet" //fullscreen by default, others are formSheet and pageSheet//and haha this prop works only on ios and not on andriod
      >
        <View style={{ flex: 1, backgroundColor: "lightgreen", padding: 60 }}>
          <Text>Modal content</Text>
          <Button
            title="close modal"
            color="midnightblue"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
