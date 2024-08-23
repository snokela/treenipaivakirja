import { Text, View } from "react-native";
import { commonStyles } from "../styles/Styles";

export default function HomeScreen() {
  return (
    <View style={commonStyles.container}>
      <Text>Tähän tulee kotisivun sisältö!</Text>
    </View>
  );
}
