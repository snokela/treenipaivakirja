import { View } from "react-native";
import { workoutHistoryScreenStyles } from "../styles/Styles";
import SummaryCard from "../components/SummaryCard";
import { FlatList } from "react-native";
import ExerciseCard from "./ExerciseCard";
import CustomDivider from "./CustomDivider";
import { useCallback, useContext } from "react";
import { HistoryDataContext } from "../contexts/WorkoutContext";
import { useFocusEffect } from "@react-navigation/native";


export default function WorkoutHistoryScreen() {
  // tuodaan historydata contexstista
  const historydata = useContext(HistoryDataContext)
  const data = historydata.workoutHistoryData
  console.log('historiadata nyt: ' + JSON.stringify(data))

  function calculateSportSum(data, sport) {
    return data
      .filter(item => item.sport === sport)
      .reduce((sum, item) => sum + item.distance, 0);
  }

  const sportsSum = {
    run: calculateSportSum(data, 'run'),
    walk: calculateSportSum(data, 'walk'),
    bike: calculateSportSum(data, 'bike'),
  };

  const reversedData = [...data].reverse()

  function Item({ item }) {
    return (
      <ExerciseCard
        iconName={item.iconName}
        date={item.date}
        distance={item.distance}
        duration={item.duration}
      />
    );
  }

  return (
    <View style={workoutHistoryScreenStyles.container}>
      <SummaryCard
        sportsSum={sportsSum}
      //myös yksiköt täytyy siirtää summarycardiin
      />
      <CustomDivider />
      <View style={workoutHistoryScreenStyles.flatListContainer}>
        <FlatList
          data={reversedData}
          keyExtractor={(item) => item.id}
          renderItem={Item}
          style={workoutHistoryScreenStyles.flatList}
        />
      </View>
    </View>
  );
}
