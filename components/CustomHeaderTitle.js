import { Text, View } from "react-native";
import { customHeaderStyles } from "../styles/Styles";


export default function CustomHeaderTitle() {
  return (
    <View style={customHeaderStyles.container}>
      <Text style={customHeaderStyles.title}>Treenipäiväkirja</Text>
      <Text style={customHeaderStyles.subtitle}>- Sinä pystyt siihen! -</Text>
    </View>
  );
}