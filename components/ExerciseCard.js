import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import { summaryCardStyles, commonStyles, exerciseCardStyles } from "../styles/Styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ExerciseCard({ iconName, date, distance, duration }) {
  return (
    <View style={commonStyles.container}>
      <Card
        mode="elevated"
        style={exerciseCardStyles.exerciseCard}
        >
        <Card.Content>
          <View>
            <View style={exerciseCardStyles.rowContainer}>
              <Icon
                name= {iconName} //tähän pitää ottaa iconin nimi  datalistasta
                size={20}
                style={summaryCardStyles.summaryIcon}
              >
              </Icon>
              <Text style={exerciseCardStyles.rowContainerText}>{ date }</Text>
            </View>
            <Text>Matka: { distance } km</Text>
            <Text>Aika: { duration } min</Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}