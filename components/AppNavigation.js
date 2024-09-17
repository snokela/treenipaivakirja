import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import AddWorkoutScreen from "./AddWorkoutScreen";
import SettingsScreen from "./SettingsScreen"
import WorkoutHistoryScreen from "./WorkoutHistoryScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomHeaderTitle from "./CustomHeaderTitle";
import { navStyles } from "../styles/Styles";

const Tab = createBottomTabNavigator();

const ADDWORKOUT = 'Harjoituksen lisääminen';
const WORKOUTHISTORY = 'Harjoitushistoria';
const SETTINGS = 'Asetukset';

export default function AppNavigation() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: navStyles.headerStyle,
          headerTintColor: navStyles.headerTintColor,
          headerTitleStyle: navStyles.headerTitleStyle,
          tabBarStyle: navStyles.tabBarStyle,
          tabBarActiveTintColor: navStyles.tabBarActiveTintColor,
          tabBarInactiveTintColor: navStyles.tabBarInactiveTintColor,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () =>
              <CustomHeaderTitle
                title={'Treenipäiväkirja'}
                subtitle={'- Sinä pystyt siihen! -'}
              />,
            tabBarIcon: ({ color }) => (
              <Icon
                name="home"
                color={color}
                size={24}
              />
            ),
            tabBarLabel: 'Etusivu'
          }}
        />
        <Tab.Screen
          name={ADDWORKOUT}
          component={AddWorkoutScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon
                name="plus-circle-outline"
                color={color}
                size={24}
              />
            ),
            tabBarLabel: 'Lisää',
          }}
        />
        <Tab.Screen
          name={WORKOUTHISTORY}
          component={WorkoutHistoryScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon
                name="calendar-month-outline"
                color={color}
                size={24}
              />
            ),
            tabBarLabel: 'Historia',
          }}
        />
        <Tab.Screen
          name={SETTINGS}
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon
                name="cog-outline"
                color={color}
                size={24}
              />
            ),
            tabBarLabel: 'Asetukset',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

