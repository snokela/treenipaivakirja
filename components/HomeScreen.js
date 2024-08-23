import { Text, View } from "react-native";
import { ButtonStyles, commonStyles } from "../styles/Styles";
import CustomButton from "../components/CustomButton";

export default function HomeScreen() {
  return (
    <View style={commonStyles.container}>
      <CustomButton
        title="Lisää harjoitus"
        onPress={() => console.log('Lisää harjoitus -nappia painettua')}
        // icon="plus"
        icon="plus-circle-outline"
      />
       <CustomButton
        title="Harjoitushistoria"
        onPress={() => console.log('Lisää harjoitushistoria -nappia painettua')}
        icon="calendar-month-outline"
      />
      <CustomButton
        title="Asetukset"
        onPress={() => console.log('Lisää asetuksia -nappia painettua')}
        icon="cog"
      />
    </View>
  );
}
