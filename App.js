import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrinksProvider } from './contexts/DrinksContext';
import { TodoProvider } from './contexts/TodoContext';
import { FoodProvider } from './contexts/FoodContext';
import DrinkScreen from './screens/DrinkScreen';
import FoodScreen from './screens/FoodScreen';
import TodoScreen from './screens/TodoScreen';
import OverviewScreen from './screens/OverviewScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Overview" component={OverviewScreen} />
      <Tab.Screen name="Drinks" component={DrinkScreen} />
      <Tab.Screen name="Food" component={FoodScreen} />
      <Tab.Screen name="Todos" component={TodoScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <TodoProvider>
      <DrinksProvider>
        <FoodProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        </FoodProvider>
      </DrinksProvider >
    </TodoProvider>
  );
}

export default App;
