import { View } from "react-native";
import { workoutHistoryScreenStyles } from "../styles/Styles";
import SummaryCard from "../components/SummaryCard";
import { FlatList } from "react-native";
import ExerciseCard from "./ExerciseCard";
import { Divider } from "react-native-paper";

export default function WorkoutHistoryScreen() {


  // TÄHÄN VOISI KOODATA TESTIKSI DATAMALLIN esim const data...

  return (
    <View style={workoutHistoryScreenStyles.container}>
      <SummaryCard />
      <View style={workoutHistoryScreenStyles.flatListContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
          <ExerciseCard
          />
        )}
          style={workoutHistoryScreenStyles.flatList}
        />
      </View>
    </View>
  );
}