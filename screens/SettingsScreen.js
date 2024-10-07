import { Text, View } from "react-native";
import { commonStyles } from "../styles/Styles";
import CustomRadioButton from "../components/CustomRadioButton";
import { useContext } from "react";
import { UnitContext } from "../contexts/WorkoutContext";

export default function SettingsScreen() {
    const units = useContext(UnitContext)
    console.log('unit setiingsissa: ', units.unit)

  return (
    <View style={commonStyles.container}>
      <View>
        <Text style={commonStyles.infoText}>Valitse yksiköt:</Text>
        <CustomRadioButton setValue={units.setUnit} value={units.unit} />
      </View>
    </View>
  );
}