import { View, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { commonStyles, buttonStyles, AddWorkoutScreenStyles } from "../styles/Styles";
import CustomButton from "./CustomButton";
import CustomSegmentedButton from "./CustomSegmentedButton";
import CustomTextInput from "./CustomTextInput";
import CustomDivider from "./CustomDivider";
import { useCallback, useState } from "react";
import CustomCalendar from "./CustomCalendar";
import { useFocusEffect } from "@react-navigation/native";

// TESTIDATAMALLI
const workoutHistoryData = [
  { id: 1, sport: 'Juoksu', date: '01.08.2024', distance: 5, duration: 40, iconName: 'run-fast' },
  { id: 2, sport: 'Kävely', date: '02.08.2024', distance: 3, duration: 30, iconName: 'walk' },
  { id: 3, sport: 'Pyöräily', date: '03.08.2024', distance: 20, duration: 60, iconName: 'bike' },
  { id: 4, sport: 'Pyöräily', date: '04.08.2024', distance: 3, duration: 10, iconName: 'bike' },
  { id: 5, sport: 'Pyöräily', date: '05.08.2024', distance: 5, duration: 15, iconName: 'bike' },
]

// Alert-funktio
function CustomAlert({ title, message }) {
  return Alert.alert(
    title,
    message,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      }
    ],
    { cancelable: true }
  );
}

export default function AddWorkoutScreen({ navigation }) {

  const [selectedExercise, setSelectedExercise] = useState('');
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');


  //funktio, jolla korvataan pilkut pisteiksi
  const formatInputValues = (value) => {
    return value.replace(',', '.');
  }

   //nollataaan kentät aina, kun sivu fokusoituu
  useFocusEffect(
    useCallback(() => {
      setSelectedExercise('');
      setDistance('');
      setTime('');
      setDate('');
  }, [])
)

  function handlePress() {

    const formattedDistance = formatInputValues(distance);
    const formattedTime = formatInputValues(time);

    // validointi
    if (selectedExercise.trim() === '') {
      CustomAlert({ title: "Select Exercise", message: "You must select an exercise before proceeding." });
      return;
    } else if (distance.trim() === '' || parseFloat(formattedDistance) <= 0) {
      CustomAlert({ title: "Select Distance", message: "You must select a distance before proceeding." });
      return;
    } else if (time.trim() === '' || parseFloat(formattedTime) <= 0) {
      CustomAlert({ title: "Select Time", message: "You must select a time before proceeding." });
      return;
    } else if (date.trim() === '') {
      CustomAlert({ title: "Select Date", message: "You must select a date before proceeding." });
      return;
    } else {
      const newWorkout = {
        id: (workoutHistoryData.length + 1),
        sport: selectedExercise,
        date: date,
        distance: parseFloat(formattedDistance),
        duration: parseFloat(formattedTime),
        icon: selectedExercise === 'Juoksu' ? 'run-fast' : selectedExercise === 'Kävely' ? 'walk' : 'bike',
      };

      const updatedWorkoutHistoryData = [...workoutHistoryData, newWorkout];
      //suoritetaan navigointi
      navigation.navigate('Harjoitushistoria');

      //tyhjennä kentät
      setSelectedExercise('');
      setDistance('');
      setTime('');
      setDate('');
    };
  }

  return (
    // tähän touchablewithoutfeedback, jotta iOsissa keyboard saadaan koskettamalla poistumaan
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
            mode="elevated"
            // disabled={isButtonDisabled}
            onPress={handlePress}
            icon="plus-circle-outline"
            style={buttonStyles.largeButton}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
