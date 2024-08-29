import { Text, View } from "react-native";
import { commonStyles } from "../styles/Styles";
import CustomRadioButton from "../components/CustomRadioButton";
import { useState } from "react";

export default function SettingsScreen() {

  const [unit, setUnit] = useState('km');

  return (
    <View style={commonStyles.container}>
      <View>
        <Text style={commonStyles.infoText}>Valitse harjoituksen yksiköt:</Text>
        <CustomRadioButton setValue={setUnit} value={unit} />
      </View>
    </View>
  );
}