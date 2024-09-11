// import { StatusBar } from 'expo-status-bar';
import BottomNav from './components/BottomNav.js';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './styles/Theme.js'
import { HistoryDataContext, UnitContext } from './contexts/WorkoutContext.js';
import { useState } from 'react';

export default function App() {

  const [workoutHistoryData, setWorkoutHistoryData] = useState([
    { id: 1, sport: 'Juoksu', date: '01.08.2024', distance: 10, duration: 60, iconName: 'run-fast' },
    { id: 2, sport: 'Kävely', date: '02.08.2024', distance: 8, duration: 80, iconName: 'walk' },
    { id: 3, sport: 'Pyöräily', date: '03.08.2024', distance: 20, duration: 60, iconName: 'bike' },
    { id: 4, sport: 'Pyöräily', date: '04.08.2024', distance: 3, duration: 10, iconName: 'bike' },
    { id: 5, sport: 'Pyöräily', date: '05.08.2024', distance: 5, duration: 15, iconName: 'bike' },
  ]);

  const [unit, setUnit] = useState('km');

  return (
    <HistoryDataContext.Provider value={{ workoutHistoryData, setWorkoutHistoryData }}>
      <UnitContext.Provider value={setUnit}>
        <PaperProvider theme={theme}>
          <BottomNav />
          {/* <StatusBar style="auto" /> */}
        </PaperProvider>
      </UnitContext.Provider>
    </HistoryDataContext.Provider>
  );
}

