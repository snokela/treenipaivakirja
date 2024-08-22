import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { basicStyle } from './styles/Styles.js';


export default function App() {
  return (
    <View style={basicStyle.container}>
      <Text>Tähän luodaan treenipäiväkirja mobile-sovellus!</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

