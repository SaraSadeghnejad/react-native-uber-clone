import { Provider } from "react-redux";
import { StyleSheet, Text, View } from 'react-native';
import { store } from "./store";
 import HomeScreen from "./screens/HomeScreen";
 import { SafeAreaProvider } from "react-native-safe-area-context";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import MapScreen from "./screens/MapScreen";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store} >
     <NavigationContainer>
    <SafeAreaProvider>
    <KeyboardAvoidingView  
    behavior={Platform.OS==="ios"?"padding":"height"}
     style={{flex: 1}}
     keyboardVerticalOffset={Platform.OS=="ios"?-64:0}
    >
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
    </KeyboardAvoidingView>
  </SafeAreaProvider> 
   </NavigationContainer>
    </Provider>
  );
}

