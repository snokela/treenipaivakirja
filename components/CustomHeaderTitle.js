import { Text, View } from "react-native";
import { customHeaderStyle } from "../styles/Styles";


export default function CustomHeaderTitle() {
  return (
    <View style={customHeaderStyle.container}>
      <Text style={customHeaderStyle.title}>Treenipäiväkirja</Text>
      <Text style={customHeaderStyle.subtitle}>- Sinä pystyt siihen! -</Text>
    </View>
  );
}