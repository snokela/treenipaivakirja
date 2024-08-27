import { useState } from "react";
import { Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { customRadioButtonStyles } from "../styles/Styles";

export default function CustomRadioButton() {

  const [radioval, setRadioval] = useState('km');

  return (
      <View style={customRadioButtonStyles.radioContainer}>
        <RadioButton.Group onValueChange={newValue => setRadioval(newValue)} value={radioval}>
          <View style={customRadioButtonStyles.radioStyle }>
            <RadioButton
              value='km'
              color={customRadioButtonStyles.radioColor.color}
            />
            <Text style={customRadioButtonStyles.radioText}>Kilometrit</Text>
          </View>
          <View style={customRadioButtonStyles.radioStyle}>
            <RadioButton
              value='mail'
              color={customRadioButtonStyles.radioColor.color}
            />
            <Text style={customRadioButtonStyles.radioText}>Mailit</Text>
          </View>
        </RadioButton.Group>
      </View>
    // </View>
  );
}
