import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { commonStyles } from "../styles/Styles";
import CustomButton from "../components/CustomButton";

export default function HomeScreen() {

  const navigation = useNavigation();
  return (
    <View style={commonStyles.container}>
      <CustomButton
        title="Lisää harjoitus"
        onPress={() => navigation.navigate('Lisää harjoitus')}
        // icon="plus"
        icon="plus-circle-outline"
      />
       <CustomButton
        title="Harjoitushistoria"
        onPress={() => navigation.navigate('Harjoitushistoria')}
        icon="calendar-month-outline"
      />
      <CustomButton
        title="Asetukset"
        onPress={() => navigation.navigate('Asetukset')}
        icon="cog"
      />
    </View>
  );
}
