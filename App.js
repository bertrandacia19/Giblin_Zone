
import React from "react";
import{Ionicons}from "@expo/vector-icons"
import MovieListScreen from "./src/screens/MovieListScreen";
import PersonajesScreen from "./src/screens/PersonajesScreen";
import LocalizacionScreen from "./src/screens/LocalizacionScreen";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';

const Menu = createMaterialBottomTabNavigator();
 
export default function App() {
   return( 
   <NavigationContainer >
    <Menu.Navigator 
    initialRouteName="Inicio"
    activeColor="#fff"
    activebackgroundColor='pink'
    shifting={true} >


    <Menu.Screen name="Inicio"
    component={MovieListScreen}options={{
        tabBarColor:'#FFA2A3', tabBarIcon:({color})=>(<FontAwesome name="home" size={26} color={color } />)}}  />
    <Menu.Screen name="  " options={{ tabBarColor:'#FFA2A3',tabBarIcon:({color})=>(<MaterialIcons name="person-pin" size={24} color={color } />)}}component={PersonajesScreen} />
    <Menu.Screen name=" "options={{ tabBarColor:'#FFA2A3',tabBarIcon:({color})=>(<FontAwesome name="location-arrow" size={24} color={color } /> )}} component={LocalizacionScreen} />
   
  </Menu.Navigator>
  </NavigationContainer>
   )
    }
   
