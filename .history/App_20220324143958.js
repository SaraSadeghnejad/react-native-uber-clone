import { Provider } from "react-redux";
import { StyleSheet, Text, View } from 'react-native';
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <Provider store={store} >
  <HomeScreen />
    </Provider>
  );
}


