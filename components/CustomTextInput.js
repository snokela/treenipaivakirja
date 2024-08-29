import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { customTextInputStyles } from '../styles/Styles'

export default function  CustomTextInput({ label, value, setValue }) {

  return (
    <View>
      <TextInput
        style={customTextInputStyles.textInput}
        mode='outlined'
        label={label}
        value={value}
        onChangeText={setValue}
        keyboardType="numeric"
        activeOutlineColor={customTextInputStyles.activeOutline.color}
      />
    </View>
  );
}