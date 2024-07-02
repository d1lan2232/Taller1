import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistroScreen from './Screens/RegistroScreen';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <View>
    <RegistroScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "90%"
  },
});
