import { useState } from "react";
import { Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { customRadioButtonStyles } from "../styles/Styles";

export default function CustomRadioButton({ setValue, value }) {

  // const [radioval, setRadioval] = useState('km');

  return (
      <View style={customRadioButtonStyles.radioContainer}>
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
          <View style={customRadioButtonStyles.radioStyle }>
            <RadioButton
              value='km'
              color={customRadioButtonStyles.radioColor.color}
            />
            <Text style={customRadioButtonStyles.radioText}>Kilometrit</Text>
          </View>
          <View style={customRadioButtonStyles.radioStyle}>
            <RadioButton
              value='miles'
              color={customRadioButtonStyles.radioColor.color}
            />
            <Text style={customRadioButtonStyles.radioText}>Mailit</Text>
          </View>
        </RadioButton.Group>
      </View>
    // </View>
  );
}
