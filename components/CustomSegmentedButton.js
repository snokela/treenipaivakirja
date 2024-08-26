import { SafeAreaView } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import { customSegmentedButtonStyles } from "../styles/Styles";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function CustomSegmentedButton() {
  const [value, setValue] =  useState('')

  return (
    <SafeAreaView style={customSegmentedButtonStyles.container}>
      <SegmentedButtons
        theme={ {colors: {primary: 'green'} }}
        style={customSegmentedButtonStyles.buttons}
        value={value}
        onValueChange={setValue}
        buttons={[
        {
          value:'run',
          label: 'Juoksu',
          icon: 'run-fast'
        },
        {
          value: 'bike',
          label: 'Pyöräily',
          icon:'bike',
        },
        {
          value: 'walk',
          label: 'Kävely',
          icon: 'walk',
        },
       ]}
      />
    </SafeAreaView>
  );
}