import { View } from "react-native";
import { workoutHistoryScreenStyles } from "../styles/Styles";
import SummaryCard from "../components/SummaryCard";
import { FlatList } from "react-native";
import ExerciseCard from "./ExerciseCard";
import CustomDivider from "./CustomDivider";


//HOX!! laji tulee olemaan lopullisessa datamallissa sport!!
  // TESTIDATAMALLI
const data = [
  { id: '1', laji: 'Juoksu', date: '01.08.2024', distance: 5, duration: 40, iconName: 'run-fast' },
  { id: '2', laji: 'Kävely', date: '02.08.2024', distance: 3, duration: 30, iconName: 'walk' },
  { id: '3', laji: 'Pyöräily', date: '03.08.2024', distance: 20, duration: 60, iconName: 'bike' },
  { id: '4', laji: 'Pyöräily', date: '04.08.2024', distance: 3, duration: 10, iconName: 'bike' },
  { id: '5', laji: 'Pyöräily', date: '05.08.2024', distance: 5, duration: 15, iconName: 'bike' },
];

export default function WorkoutHistoryScreen() {

function calculateSportSum(data , laji) {
  return data
  .filter(item => item.laji === 'laji')
  .reduce((sum, item) => sum + item.distance, 0);
}

const runSum = calculateSportSum(data, 'Juoksu');
const walkSum = calculateSportSum(data, 'Kävely');
const bikeSum = calculateSportSum(data, 'Pyöräily');


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
        distance={data.distance}
      //myös yksiköt täytyy siirtää summarycardiin
      />
      <CustomDivider />
      <View style={workoutHistoryScreenStyles.flatListContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={ Item }
          style={workoutHistoryScreenStyles.flatList}
        />
      </View>
    </View>
  );
}
