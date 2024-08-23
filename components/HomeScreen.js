import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { commonStyles, buttonStyles } from "../styles/Styles";
import CustomButton from "../components/CustomButton";

export default function HomeScreen() {

  const navigation = useNavigation();
  return (
    <View style={commonStyles.container}>
      <CustomButton
        title="Lisää harjoitus"
        mode = "elevated"
        onPress={() => navigation.navigate('Lisää harjoitus')}
        // icon="plus"
        icon="plus-circle-outline"
        style={buttonStyles.largeButton}
      />
       <CustomButton
        title="Harjoitushistoria"
        mode = "elevated"
        onPress={() => navigation.navigate('Harjoitushistoria')}
        icon="calendar-month-outline"
        style={buttonStyles.largeButton}
      />
      <CustomButton
        title="Asetukset"
        mode = "elevated"
        onPress={() => navigation.navigate('Asetukset')}
        icon="cog"
        style={buttonStyles.largeButton}
      />
    </View>
  );
}
