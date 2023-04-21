import { Provider } from "react-redux";
import { StyleSheet, Text, View } from 'react-native';
import { store } from "./store";
 import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useHeaderHeight} from '@react-navigation/elements';
 import MapScreen from "./screens/MapScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store} >
     <NavigationContainer>
    <SafeAreaProvider>
   <Stack.Navigator>
     <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        headerShown:false,
      }}
     />
         <Stack.Screen
      name="MapScreen"
      component={MapScreen}
      options={{
        headerShown:false,
      }}
     />
   </Stack.Navigator>

  </SafeAreaProvider> 
   </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
