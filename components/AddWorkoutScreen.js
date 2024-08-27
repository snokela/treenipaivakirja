import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { commonStyles, buttonStyles, AddWorkoutScreenStyles } from "../styles/Styles";
import CustomButton from "./CustomButton";
import CustomSegmentedButton from "./CustomSegmentedButton";
import CustomTextInput from "./CustomTextInput";
import CustomDivider from "./CustomDivider";


export default function AddWorkoutScreen({ navigation}) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={commonStyles.container}>
        <View style={AddWorkoutScreenStyles.segmentContainer}>
          <CustomSegmentedButton />
        </View>
        <View style={AddWorkoutScreenStyles.formContainer}>
          <CustomDivider />
          <View style={AddWorkoutScreenStyles.input}>
            <CustomTextInput
              mode='outlined'
              label='Matka km/mails'
            />
          </View>
          <View style={AddWorkoutScreenStyles.input}>
            <CustomTextInput
              mode='outlined'
              label='Aika/min'
            />
          </View>
          <View style={AddWorkoutScreenStyles.date}>
            <Text>TÄHÄN TULEE VIELÄ PÄVÄNMÄÄRÄVALINTA</Text>
          </View>
          <CustomDivider />
        </View>
        <View style={AddWorkoutScreenStyles.button}>
          <CustomButton
            title="Lisää harjoitus"
            mode = "elevated"
            onPress={() => navigation.navigate('Harjoitushistoria')}
            // icon="plus"
            icon="plus-circle-outline"
            style={buttonStyles.largeButton}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
