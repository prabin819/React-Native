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
} from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar
        backgroundColor="lightgreen" //this porp is specific to android
        //cant change bgcolor in iphone
        barStyle="light-content" //textcolor = default is default(black on iphone and white on android)
        //dark-content = black text on both platforms
        //light-content = white text on both platforms
        hidden
      />
    </View>
  );
}
