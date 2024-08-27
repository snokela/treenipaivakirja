import { useState } from "react"
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { customTextInputStyles } from '../styles/Styles'

export default function  CustomTextInput({ label, mode,  }) {

  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        style={customTextInputStyles.textInput}
        mode={mode}
        label={label}
        value={text}
        onChangeText={text => setText(text)}
        keyboardType="numeric"
        activeOutlineColor={customTextInputStyles.activeOutline.color}
      />
    </View>
  );
}