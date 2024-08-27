import { Text, View } from "react-native";
import { commonStyles } from "../styles/Styles";
import CustomRadioButton from "../components/CustomRadioButton";

export default function SettingsScreen() {
  return (
    <View style={commonStyles.container}>
      <View>
        <CustomRadioButton />
      </View>
    </View>
  );
}