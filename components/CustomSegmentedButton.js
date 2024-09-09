import { SafeAreaView } from "react-native";
import { SegmentedButtons, useTheme } from "react-native-paper";
import { customSegmentedButtonStyles } from "../styles/Styles";
// import { useState } from "react";
// import { theme } from '../styles/Theme';
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function CustomSegmentedButton({ value, setValue }) {
  // const [value, setValue] =  useState('')
//   const theme = useTheme();

// buttons =  [
//   {value:'run', label: 'Juoksu', icon: 'run-fast'},
//   {value: 'bike', label: 'Pyöräily', icon:'bike'},
//   {value: 'walk', label: 'Kävely',icon: 'walk'}
// ]

  return (
    <SafeAreaView style={customSegmentedButtonStyles.container}>
    {/* <SafeAreaView> */}
      <SegmentedButtons
        style={customSegmentedButtonStyles.buttons}
        value={value}
        onValueChange={setValue}
        buttons={[
        {
          value:'run',
          label: 'Juoksu',
          icon: 'run-fast',
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