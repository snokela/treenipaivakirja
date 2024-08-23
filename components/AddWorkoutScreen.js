import { Text, View } from "react-native";
import { commonStyles, buttonStyles } from "../styles/Styles";
import CustomButton from "./CustomButton";

export default function AddWorkoutScreen() {
  return (
    <View style={commonStyles.container}>
      <Text>Valitse laji: </Text>
      <View style={commonStyles.buttonRow}>
        <CustomButton
          title="Juoksu"
          mode = "elevated"
          onPress={() => console.log('Valittu juoksuharjoitus')}
          icon="run-fast"
          iconSize={18}
          style={buttonStyles.smallButton}
        />
        <CustomButton
          title="Pyöräily"
          mode = "elevated"
          onPress={() => console.log('Valittu pyöräilyharjoitus')}
          icon="bike"
          iconSize={18}
          style={buttonStyles.smallButton}
        />
         <CustomButton
          title="Kävely"
          mode = "elevated"
          onPress={() => console.log('Valittu kävelyharjoitus')}
          icon="walk"
          iconSize={18}
          style={buttonStyles.smallButton}
        />
      </View>
      <Text>Tähän tulee harjoituksen lisäämisen sisältö eli matka, aika ja päivänmäärävalinnat!</Text>
      <CustomButton
        title="Lisää harjoitus"
        mode = "elevated"
        onPress={() => navigation.navigate('Lisää harjoitus')}
        // icon="plus"
        icon="plus-circle-outline"
        style={buttonStyles.largeButton}
      />
    </View>
  );
}
