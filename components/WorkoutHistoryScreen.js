import { View } from "react-native";
import { workoutHistoryScreenStyles } from "../styles/Styles";
import SummaryCard from "../components/SummaryCard";
import { FlatList } from "react-native";
import ExerciseCard from "./ExerciseCard";
import CustomDivider from "./CustomDivider";
import { useContext } from "react";
import { HistoryDataContext, UnitContext } from "../contexts/WorkoutContext";

export default function WorkoutHistoryScreen() {
  // tuodaan historydata contexstista
  const historydata = useContext(HistoryDataContext)
  const data = historydata.workoutHistoryData
  console.log('historiadata nyt: ' + JSON.stringify(data))

   // tuodaan unitit contexstista
   const units = useContext(UnitContext);
   const unit = units.unit
   console.log("Nykyinen unit-arvo historyssa", unit);

  //muutetaan distance yksiköiden mukaiseksi
  const convertDistance = (distance) => {
    return(
    unit === 'km' ? distance : parseFloat((distance * 0.62137119).toFixed(2))
    );
  }

  function calculateSportSum(data, sport) {
    return data
      .filter(item => item.sport === sport)
      .reduce((sum, item) => sum + convertDistance(item.distance), 0);
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
        distance={convertDistance(item.distance)}
        duration={item.duration}
        unit={unit}
      />
    );
  }

  return (
    <View style={workoutHistoryScreenStyles.container}>
      <SummaryCard
        sportsSum={sportsSum}
        unit = {unit}
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
