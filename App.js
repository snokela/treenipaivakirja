// import { StatusBar } from 'expo-status-bar';
import BottomNav from './components/BottomNav.js';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './styles/Theme.js'
import { HistoryDataContext } from './contexts/WorkoutContext.js';

export default function App() {

  const [workoutHistoryData, setWorkoutHistoryData] = useState([
    { id: 1, sport: 'Juoksu', date: '01.08.2024', distance: 5, duration: 40, iconName: 'run-fast' },
    { id: 2, sport: 'Kävely', date: '02.08.2024', distance: 3, duration: 30, iconName: 'walk' },
    { id: 3, sport: 'Pyöräily', date: '03.08.2024', distance: 20, duration: 60, iconName: 'bike' },
    { id: 4, sport: 'Pyöräily', date: '04.08.2024', distance: 3, duration: 10, iconName: 'bike' },
    { id: 5, sport: 'Pyöräily', date: '05.08.2024', distance: 5, duration: 15, iconName: 'bike' },
  ]);

  return (
    <HistoryDataContext.Provider value={{ workoutHistoryData, setWorkoutHistoryData }}>
      <PaperProvider theme={theme}>
        <BottomNav />
        {/* <StatusBar style="auto" /> */}
      </PaperProvider>
    </HistoryDataContext.Provider>
  );
}

