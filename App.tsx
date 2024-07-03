import { StyleSheet, Text, View } from 'react-native';
import Navegator from './navigators/BottonNavigator';

export default function App() {
  return (

   <Navegator/>

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
