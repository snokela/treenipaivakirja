import { Text, View } from "react-native";
import { Card, Title } from "react-native-paper";
import { summaryCardStyles, commonStyles } from "../styles/Styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// summarycard saa propseina distancen datamallista
export default function SummaryCard({ sportsSum }) {

  // tässä tarvii suorittaa laskutoimitus, jossa lasketaan harjoitusten summat

  return (
    <View style={summaryCardStyles.container}>
      <Card
        mode="elevated"
        style={summaryCardStyles.summaryCard}
        >
        <Text style={commonStyles.infoText}>
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
            <Text>{sportsSum.run} km</Text>
          </View>
          <View style={summaryCardStyles.summaryItem}>
          <Icon
              name= "bike"
              size={25}
              style={summaryCardStyles.summaryIcon}
            >
            </Icon>
            <Text>{sportsSum.bike} km</Text>
          </View>
          <View style={summaryCardStyles.summaryItem}>
          <Icon
              name= "walk"
              size={25}
              style={summaryCardStyles.summaryIcon}
            >
            </Icon>
            <Text>{sportsSum.walk} km</Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}