import { Text, View } from "react-native";
import { Card, Title } from "react-native-paper";
import { summaryCardStyles, commonStyles } from "../styles/Styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export default function SummaryCard() {
  return (
    <View style={summaryCardStyles.container}>
      <Card
        mode="elevated"
        style={summaryCardStyles.summaryCard}
        >
        <Text style={summaryCardStyles.summaryCardTitle}>
          Harjoitusten kokonaismatkat
        </Text>
        <Card.Content style={summaryCardStyles.cardContent}>
          <View style={summaryCardStyles.summaryItem}>
            <Icon
              name= "run-fast"
              size={25}
              style={summaryCardStyles.summaryIcon}
            >
            </Icon>
            <Text>30 km</Text>
          </View>
          <View style={summaryCardStyles.summaryItem}>
          <Icon
              name= "bike"
              size={25}
              style={summaryCardStyles.summaryIcon}
            >
            </Icon>
            <Text>50 km</Text>
          </View>
          <View style={summaryCardStyles.summaryItem}>
          <Icon
              name= "walk"
              size={25}
              style={summaryCardStyles.summaryIcon}
            >
            </Icon>
            <Text>100 km</Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}