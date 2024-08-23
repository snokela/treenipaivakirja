import { Button } from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ButtonStyles } from "../styles/Styles";


export default function CustomButton({ title, onPress, mode = 'contained', icon}) {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      contentStyle={{ flexDirection: 'row-reverse', height:65 , width:300 }}
      icon= {() => <Icon name={icon} size={30} />}
      style={ButtonStyles.largeButton}
      buttonColor= "#a2d9dc"
      textColor="black"
    >
      {title}
    </Button>
  );
}