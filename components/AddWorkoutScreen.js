import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { commonStyles, buttonStyles, AddWorkoutScreenStyles } from "../styles/Styles";
import CustomButton from "./CustomButton";
import CustomSegmentedButton from "./CustomSegmentedButton";
import CustomTextInput from "./CustomTextInput";
import CustomDivider from "./CustomDivider";
import { useState } from "react";
import CustomCalendar from "./CustomCalendar";



export default function AddWorkoutScreen({ navigation}) {
  // tilanhallinnat:
  const [selectedExercise, setSelectedExercise] =  useState('');
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  // Tähän tilaan formatoitu date customCalendarista
  const [date, setDate] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={commonStyles.container}>
        <View style={AddWorkoutScreenStyles.segmentContainer}>
          <CustomSegmentedButton value={selectedExercise} setValue={setSelectedExercise} />
        </View>
        <View style={AddWorkoutScreenStyles.formContainer}>
          <CustomDivider />
          <View style={AddWorkoutScreenStyles.distanceInput}>
            <CustomTextInput
              value={distance}
              label='Matka km/mails'
              setValue={setDistance}
            />
          </View>
          <View style={AddWorkoutScreenStyles.timeInput}>
            <CustomTextInput
              value={time}
              label='Aika/min'
              setValue={setTime}
            />
          </View>
          <View style={AddWorkoutScreenStyles.date}>
          <CustomCalendar
            value={date}
            setDate={setDate}
          />
          </View>
          <CustomDivider />
        </View>
        <View style={AddWorkoutScreenStyles.button}>
          <CustomButton
            title="Lisää harjoitus"
            mode = "elevated"
            disabled={isButtonDisabled}
            onPress={() => navigation.navigate('Harjoitushistoria')}
            icon="plus-circle-outline"
            style={buttonStyles.largeButton}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
