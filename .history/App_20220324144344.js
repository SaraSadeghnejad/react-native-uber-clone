
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from "react-native/Libraries/Text/TextAncestor";

export default function App() {
  return (
    <Provider store={store} >
  <HomeScreen />
    </Provider>
  );
}


