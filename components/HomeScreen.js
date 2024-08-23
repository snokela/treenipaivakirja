import { Text, View } from "react-native";
import { commonStyle } from "../styles/Styles";

export default function HomeScreen() {
  return (
    <View style={commonStyle.container}>
      <Text>Tähän tulee kotisivun sisältö!</Text>
    </View>
  );
}
