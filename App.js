import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FoodScreen from './screens/FoodScreen';
import DrinkScreen from './screens/DrinkScreen';
import TodoScreen from './screens/TodoScreen';

export default function App() {
  return (
    <View style={styles.container}>

      {/* <FoodScreen /> */}
      {/* <DrinkScreen /> */}
      <TodoScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'rgba(255, 0, 0, 0.1)',
    alignItems: 'center',

  }
});
