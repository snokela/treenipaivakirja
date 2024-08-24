import { Text, View } from "react-native";
import { commonStyles } from "../styles/Styles";
import SummaryCard from "../components/SummaryCard";

export default function WorkoutHistoryScreen() {
  return (
    <View style={commonStyles.container}>
      <Text>Tähän tulee harjoitushistoriannäytön sisältö!</Text>
      <SummaryCard />
    </View>
  );
}