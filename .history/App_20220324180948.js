import { Provider } from "react-redux";
import { StyleSheet, Text, View } from 'react-native';
import { store } from "./store";
 import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <Provider store={store} >
     <NavigationContainer>
    <SafeAreaProvider>
   <Stack.
  {/* <HomeScreen  /> */}

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
