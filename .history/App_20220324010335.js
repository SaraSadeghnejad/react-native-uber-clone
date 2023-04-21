import {Provider} from "react-redux";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Provider></Provider>
    <View style={styles.container}>
      <Text>Lets build Uber!</Text>
    </View>
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
