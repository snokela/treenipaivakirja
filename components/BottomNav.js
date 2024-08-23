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

// const HOME = 'Treenipäiväkirja';
const ADDWORKOUT = 'Lisää harjoitus';
const WORKOUTHISTORY = 'Harjoitushistoria';
const SETTINGS = 'Asetukset';

export default function BottomNav() {

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
          name= "Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <CustomHeaderTitle />,
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size}/>
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
        name={ADDWORKOUT}
        component={AddWorkoutScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="plus-circle-outline" color={color} size={size}/>
          ),
          tabBarLabel: () => null,
        }}
        />
        <Tab.Screen
        name={WORKOUTHISTORY}
        component={WorkoutHistoryScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="calendar-month-outline" color={color} size={size}/>
          ),
          tabBarLabel: () => null,
        }}
        />
        <Tab.Screen
        name={SETTINGS}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="cog-outline" color={color} size={size}/>
          ),
          tabBarLabel: () => null,
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

