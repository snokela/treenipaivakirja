import { Text, View } from "react-native";
import { customHeaderStyles } from "../styles/Styles";


export default function CustomHeaderTitle({ title, subtitle}) {

  return (
    <View style={customHeaderStyles.container}>
      <Text style={customHeaderStyles.title}>{title}</Text>
      <Text style={customHeaderStyles.subtitle}>{subtitle}</Text>
    </View>
  );
}