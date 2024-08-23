import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import AddWorkoutScreen from "./AddWorkoutScreen";
import SettingsScreen from "./SettingsScreen"
import WorkoutHistoryScreen from "./WorkoutHistoryScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const Tab = createBottomTabNavigator();

// Home-icon
// import Icon from '@mdi/react';
// import { mdiHome } from '@mdi/js';

// <Icon path={mdiHome} size={1} />

// ADD-icon
// import Icon from '@mdi/react';
// import { mdiPlus } from '@mdi/js';

// <Icon path={mdiPlus} size={1} />

// setting-icon
// import Icon from '@mdi/react';
// import { mdiCog } from '@mdi/js';

// <Icon path={mdiCog} size={1} />

// history-icon
// import Icon from '@mdi/react';
// import { mdiCalendarMonthOutline } from '@mdi/js';

// <Icon path={mdiCalendarMonthOutline} size={1} />

const HOME = 'Treenipäiväkirja';
const ADDWORKOUT = 'Lisää harjoitus';
const WORKOUTHISTORY = 'Harjoitushistoria';
const SETTINGS = 'Asetukset';

export default function BottomNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={HOME}
          component={HomeScreen}
          options={{
            headerTitle: HOME,
            tabBarIcon: ({color, size}) => (
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
            <Icon name="plus" color={color} size={size}/>
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

