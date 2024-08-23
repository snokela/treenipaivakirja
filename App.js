import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { basicStyle } from './styles/Styles.js';
import BottomNav from './components/BottomNav.js';


export default function App() {
  return (
    <BottomNav />
    // <View style={commonStyle.container}>
    //   <Text>Tähän luodaan treenipäiväkirja mobile-sovellus!</Text>
    //   {/* <StatusBar style="auto" /> */}
    // </View>
  );
}

