import { Provider } from "react-redux";
import MainNavegator from "./navigation/Navigator"
import { store } from "./store/store";
import { NavigationContainer } from "@react-navigation/native";


const App = () => {
   return (
    <Provider store={store}>
     <NavigationContainer>
      <MainNavegator/>
    </NavigationContainer>
    </Provider>
  );
};

export default App;