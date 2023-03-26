import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import MainScreen from "../pages/Main";
import { RootState } from "../store/types";
import LoginScreen from "../pages/Login";
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetails from "../pages/ProductDetails";


const Tab = createBottomTabNavigator();



const MainNavigator = () => {const token = useSelector((state:RootState) => state.auth.token);

console.log(token, "token")
  return (
    <Tab.Navigator>
     {!token ?  <Tab.Screen name="Login" component={LoginScreen}  options={{
          headerShown: false, tabBarStyle: { display: "none" },

        }} />
      :

      (  <><Tab.Screen name={token[1]} component={MainScreen} options={{
          tabBarStyle: { display: "none" }, title: 'Hola!  '+token[1],tabBarLabel: 'Home', }} />
         <Tab.Screen name="ProductDetails" component={ProductDetails} options={{title: 'Hola!  '+token[1],tabBarLabel: 'Product Detail'
           }} /></> )}  

    </Tab.Navigator>
  );
};

export default MainNavigator;










