import { Text, View } from "react-native";
import { Avatar, Card } from "react-native-paper";
import { commonStyles, exerciseCardStyles } from "../styles/Styles";

export default function ExerciseCard({ iconName, date, distance, duration, unit }) {
  return (
    <View style={commonStyles.container}>
      <Card
        mode="elevated"
        style={exerciseCardStyles.exerciseCard}
      >
        <Card.Title
          titleVariant="titleSmall"
          title= {date}
          color= 'black'
          left={props => <Avatar.Icon icon={iconName} color="black" size={40} style={exerciseCardStyles.cardIcon} />}
        />
        <Card.Content>
          <Text>Matka: { distance } {unit === 'km' ? 'km' : 'mi'}</Text>
          <Text>Aika: { duration } min</Text>
        </Card.Content>
      </Card>
    </View>
  );
}