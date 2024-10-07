import { View, TouchableWithoutFeedback, Keyboard, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { commonStyles, buttonStyles, AddWorkoutScreenStyles } from "../styles/Styles";
import CustomButton from "../components/CustomButton";
import CustomSegmentedButton from "../components/CustomSegmentedButton";
import CustomTextInput from "../components/CustomTextInput";
import CustomDivider from "../components/CustomDivider";
import { useCallback, useContext, useState } from "react";
import CustomCalendar from "../components/CustomCalendar";
import { useFocusEffect } from "@react-navigation/native";
import { HistoryDataContext, UnitContext } from "../contexts/WorkoutContext";

// Alert-function
const CustomAlert = ({ title, message })  => {
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
  const { workoutHistoryData, setWorkoutHistoryData } = useContext(HistoryDataContext);
  const units = useContext(UnitContext);
  const unit = units.unit

  const formatInputValues = (value) => {
    return value.replace(',', '.');
  }

  const cleanInputValues = () => {
    setSelectedExercise('');
    setDistance('');
    setTime('');
    setDate('');
  }

  useFocusEffect(
    useCallback(() => {
      cleanInputValues();
    }, [])
  )

  const handlePress = ()=> {
    const formattedDistance = formatInputValues(distance);
    const formattedTime = formatInputValues(time);

    // validation
    if (selectedExercise.trim() === '') {
      CustomAlert({ title: "Harjoitus vaaditaan", message: "Harjoitustyyppi täytyy valita ennen jatkamista." });
      return;
    } else if (distance.trim() === '' || parseFloat(formattedDistance) <= 0) {
      CustomAlert({ title: "Matka vaaditaan", message: "Matkan täytyy olla suurempi kuin 0." });
      return;
    } else if (time.trim() === '' || parseFloat(formattedTime) <= 0) {
      CustomAlert({ title: "Aika vaaditaan", message: "Ajan täytyy olla suurempi kuin 0." });
      return;
    } else if (date.trim() === '') {
      CustomAlert({ title: "Päivä vaaditaan", message: "Päivä täytyy valita ennen jatkamista." });
      return;
    } else {
      const newWorkout = {
        id: (workoutHistoryData.length + 1),
        sport: selectedExercise,
        date: date,
        // save distance always in kilometers
        distance: unit === 'km'
          ? parseFloat(formattedDistance)
          : parseFloat(formattedDistance * 1.609344),
        duration: parseFloat(formattedTime),
        iconName: selectedExercise === 'run'
          ? 'run-fast'
          : selectedExercise === 'walk'
            ? 'walk'
            : 'bike',
      };

      const updatedWorkoutHistoryData = [...workoutHistoryData, newWorkout];
      setWorkoutHistoryData(updatedWorkoutHistoryData)
      navigation.navigate('Harjoitushistoria');

      cleanInputValues();
    };
  }

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
              label={unit === 'km' ? 'Matka/km' : 'Matka/mi'}
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
