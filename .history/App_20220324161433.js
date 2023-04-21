import { Provider } from "react-redux";
import { StyleSheet, Text, View } from 'react-native';
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store} >
  <Home
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
