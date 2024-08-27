import { useState } from "react"
import { View } from "react-native";
import { TextInput } from "react-native-paper";

export default function  CustomTextInput() {

  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        label='Kilometrit'
        value={text}
        onChangeText={text => setText(text)}
      />
    </View>
  );
}