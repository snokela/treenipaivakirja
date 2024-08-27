import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';
// import { basicStyle } from './styles/Styles.js';
import BottomNav from './components/BottomNav.js';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './styles/Theme.js'

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <BottomNav />
      {/* <StatusBar style="auto" /> */}
   </PaperProvider>
    // <View style={basicStyle.container}>
    //   <Text>Tähän luodaan treenipäiväkirja mobile-sovellus!</Text>
    //   {/* <StatusBar style="auto" /> */}
    // </View>
  );
}

