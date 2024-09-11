import { SafeAreaView } from "react-native";
import { SegmentedButtons, useTheme } from "react-native-paper";
import { customSegmentedButtonStyles } from "../styles/Styles";

buttons = [
  { value: 'run', label: 'Juoksu', icon: 'run-fast' },
  { value: 'bike', label: 'Pyöräily', icon: 'bike' },
  { value: 'walk', label: 'Kävely', icon: 'walk' }
]

export default function CustomSegmentedButton({ value, setValue }) {

  return (
    <SafeAreaView style={customSegmentedButtonStyles.container}>
      <SegmentedButtons
        style={customSegmentedButtonStyles.buttons}
        value={value}
        onValueChange={setValue}
        buttons={buttons}
      />
    </SafeAreaView>
  );
}