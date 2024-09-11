import { View, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { commonStyles, buttonStyles, AddWorkoutScreenStyles } from "../styles/Styles";
import CustomButton from "./CustomButton";
import CustomSegmentedButton from "./CustomSegmentedButton";
import CustomTextInput from "./CustomTextInput";
import CustomDivider from "./CustomDivider";
import { useCallback, useContext, useState } from "react";
import CustomCalendar from "./CustomCalendar";
import { useFocusEffect } from "@react-navigation/native";
import { HistoryDataContext } from "../contexts/WorkoutContext";

// TESTIDATAMALLI
// const workoutHistoryData = [
//   { id: 1, sport: 'Juoksu', date: '01.08.2024', distance: 5, duration: 40, iconName: 'run-fast' },
//   { id: 2, sport: 'Kävely', date: '02.08.2024', distance: 3, duration: 30, iconName: 'walk' },
//   { id: 3, sport: 'Pyöräily', date: '03.08.2024', distance: 20, duration: 60, iconName: 'bike' },
//   { id: 4, sport: 'Pyöräily', date: '04.08.2024', distance: 3, duration: 10, iconName: 'bike' },
//   { id: 5, sport: 'Pyöräily', date: '05.08.2024', distance: 5, duration: 15, iconName: 'bike' },
// ]

// Alert-funktio
function CustomAlert({ title, message }) {
  return Alert.alert(
    title,
    message,
    [
      {
        text: "Sulje",
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

  // tuodaan historydata contexstista
  const { workoutHistoryData, setWorkoutHistoryData } = useContext(HistoryDataContext)

  //funktio, jolla korvataan pilkut pisteiksi
  const formatInputValues = (value) => {
    return value.replace(',', '.');
  }

  // funktio, joka nollaa input-arvot
  const cleanInputValues = () => {
    setSelectedExercise('');
    setDistance('');
    setTime('');
    setDate('');
  }

  //nollataaan kentät aina, kun sivu fokusoituu
  useFocusEffect(
    useCallback(() => {
      cleanInputValues();
    }, [])
  )

  function handlePress() {

    const formattedDistance = formatInputValues(distance);
    const formattedTime = formatInputValues(time);

    // validointi
    if (selectedExercise.trim() === '') {
      CustomAlert({ title: "Valitse harjoitus", message: "Sinun täytyy valita harjoitustyyppi, ennen jatkamista." });
      return;
    } else if (distance.trim() === '' || parseFloat(formattedDistance) <= 0) {
      CustomAlert({ title: "Valitse matka", message: "Sinun täytyy valita matka, ennen jatkamista." });
      return;
    } else if (time.trim() === '' || parseFloat(formattedTime) <= 0) {
      CustomAlert({ title: "Valitse aika", message: "Sinun täytyy valita aika, ennen jatkamista." });
      return;
    } else if (date.trim() === '') {
      CustomAlert({ title: "Valitse päivä", message: "Sinun täytyy valita päivä, ennen jatkamista." });
      return;
    } else {
      const newWorkout = {
        id: (workoutHistoryData.length + 1),
        sport: selectedExercise,
        date: date,
        distance: parseFloat(formattedDistance),
        duration: parseFloat(formattedTime),
        iconName: selectedExercise === 'Juoksu' ? 'run-fast' : selectedExercise === 'Kävely' ? 'walk' : 'bike',
      };

      console.log(newWorkout)

      const updatedWorkoutHistoryData = [...workoutHistoryData, newWorkout];
      setWorkoutHistoryData(updatedWorkoutHistoryData)
      //suoritetaan navigointi
      navigation.navigate('Harjoitushistoria');

      //tyhjennä kentät
      cleanInputValues();
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
            onPress={handlePress}
            icon="plus-circle-outline"
            style={buttonStyles.largeButton}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
