import { Text, View } from "react-native";
import { Avatar, Card } from "react-native-paper";
import { summaryCardStyles, commonStyles, exerciseCardStyles } from "../styles/Styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../styles/Theme";

export default function ExerciseCard({ iconName, date, distance, duration, unit }) {
  return (
    <View style={commonStyles.container}>
      <Card
        mode="elevated"
        style={exerciseCardStyles.exerciseCard}
      >
        <Card.Title
          titleVariant="titleMedium"
          title= {date}
          color= 'black'
          left={props => <Avatar.Icon icon={iconName} color="black" size={40} style={exerciseCardStyles.cardIcon}/>}
        />
        <Card.Content>
          <Text>Matka: { distance } {unit === 'km' ? 'km' : 'mi'}</Text>
          <Text>Aika: { duration } min</Text>
        </Card.Content>
      </Card>
      {/* <Card
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
            <Text>Matka: { distance } {unit === 'km' ? 'km' : 'mi'}</Text>
            <Text>Aika: { duration } min</Text>
          </View>
        </Card.Content>
      </Card> */}
    </View>
  );
}