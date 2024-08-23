import { Button } from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import { ButtonStyles } from "../styles/Styles";


export default function CustomButton({ title, onPress, mode , icon, style, iconSize=30 }) {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      contentStyle={{ flexDirection: 'row-reverse', justifyContent: 'center', paddingVertical: 15 } }
      icon= {() => <Icon name={icon} size={iconSize} />}
      buttonColor= "#a2d9dc"
      textColor="black"
      style={style}
    >
      {title}
    </Button>
  );
}