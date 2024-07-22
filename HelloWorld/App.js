import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="press"
        onPress={() => console.log("button pressed")}
        color="midnightblue"
      />
      <Pressable
        onPress={() => console.log("on press")}
        onPressIn={() => console.log("onPressIn")}
        onLongPress={() => console.log("onLongPress")}
        onPressOut={() => console.log("onPressOut")}
      >
        {/* onPressIn
          on press
          onPressOut */}

        {/* onPressIn
          onLongPress
          onPressOut */}
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </Pressable>
      <Pressable onPress={() => console.log("teext pressed")}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          blanditiis vel pariatur nisi explicabo exercitationem soluta incidunt
          aliquam nihil nostrum molestias, numquam, commodi adipisci rem quia
          architecto quisquam odit quis? Ducimus totam facere facilis
          consequatur suscipit. Illo sit eos recusandae itaque ex corporis vel
          necessitatibus! Quia eaque commodi temporibus. Tenetur quasi
          praesentium fugiat tempore corrupti voluptatum illum libero hic culpa?
          Illum quas, quibusdam aperiam iste reiciendis pariatur nihil veritatis
          laboriosam nostrum, quia amet alias aspernatur sapiente error officia
          harum, vitae consequatur minus optio commodi excepturi eius voluptatem
          laborum. Ea, rerum. Reprehenderit error corrupti ipsum, fugiat, odit
          saepe nemo veniam neque earum sapiente fugit aspernatur est temporibus
          ipsa. Delectus sunt dolorem molestiae omnis animi alias maiores
          dignissimos consequatur, assumenda, perspiciatis tempora. Aliquid
          molestiae aspernatur hic ducimus recusandae debitis, magnam odit
          porro, earum perspiciatis reiciendis nemo esse laborum. Perspiciatis
          magni hic eligendi in, quidem atque quibusdam assumenda placeat
          sapiente est ut iure.
        </Text>
      </Pressable>
    </View>
  );
}
