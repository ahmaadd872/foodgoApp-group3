import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/splash/Splash";
import Login from "../screens/login/Login";
import Home from "../screens/home/Home";
import Product from "../screens/product/Product";
import Order from "../screens/order/Order"
import Success from "../screens/success/Success";
import BottomTabNavigator from "./BottomTabNavigator";

const RootStackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={BottomTabNavigator}
        />
         <Stack.Screen  name="Product" component={Product} options={{title:'ProductDetail',headerShown: false,}} />
         <Stack.Screen options={{
            headerShown: false,
          }} name="Order" component={Order}  />
         <Stack.Screen options={{
            headerShown: false,
          }} name="Success" component={Success}  />
         
        {/* <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="BottomTabNavigator"
          component={Login}
        /> */}
        {/* <Stack.Screen
          name="Home"
          component={Home}
          // options={{
          //   headerRight: () => (
          //     <Button onPress={() => handleLogout()} title="Logout" color="black" />
          //   ),
          // }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigation;
