import { Text, View } from "react-native";
import { Avatar, Card } from "react-native-paper";
import { summaryCardStyles, commonStyles } from "../styles/Styles";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// summarycard saa propsina kokonaissumman 'parentkomponentiltaan'
export default function SummaryCard({ sportsSum, unit }) {

  const SportSummaryItem = ({ distance, iconName }) => {
    console.log('unit summarycardissa: ', unit)
    return (
      <View style={summaryCardStyles.summaryItem}>
        {/* <Icon
          name={iconName}
          size={25}
          style={summaryCardStyles.summaryIcon}
        /> */}
         <Avatar.Icon
          icon={iconName}
          color="black"
          size={40}
          style={summaryCardStyles.cardIcon}
        />
        <Text>{distance} {unit === 'km' ? 'km' : 'mi'}</Text>
      </View>
    );
  }

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
          <SportSummaryItem
            iconName={'run-fast'}
            distance={sportsSum.run}
          />
          <SportSummaryItem
            iconName={'bike'}
            distance={sportsSum.bike}
          />
          <SportSummaryItem
            iconName={'walk'}
            distance={sportsSum.walk}
          />
        </Card.Content>
      </Card>
    </View>
  );
}