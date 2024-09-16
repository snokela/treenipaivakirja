import { Button } from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { buttonStyles } from "../styles/Styles";

export default function CustomButton({ title, onPress, mode , icon, style, iconSize=25}) {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      contentStyle={buttonStyles.content}
      icon= {() => <Icon name={icon} size={iconSize} />}
      textColor={buttonStyles.textColor}
      style={style}
    >
      {title}
    </Button>
  );
}