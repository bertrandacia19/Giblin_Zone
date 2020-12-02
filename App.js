
import React from "react";
import{Ionicons}from "@expo/vector-icons"
import MovieListScreen from "./src/screens/MovieListScreen";
import PersonajesScreen from "./src/screens/PersonajesScreen";
import LocalizacionScreen from "./src/screens/LocalizacionScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

const Menu = createBottomTabNavigator ( ) ; 

export default function App() {
   return( 
   <NavigationContainer>
    <Menu.Navigator 
    initialRouteName="Inicio"
    activeColor="#fff"
   
    >
    <Menu.Screen name="Inicio"
    component={MovieListScreen}
     options={{ 
        tabBarColor:'#009387' ,
        tabBarLabel:' Inicio' ,
     tabBarIcon:({color})=>(<FontAwesome name="home" size={26} color={color } />)}} />
    <Menu.Screen name="personajes" options={{tabBarIcon:({color})=>(<MaterialIcons name="person-pin" size={24} color={color } />)}}component={PersonajesScreen} />
    <Menu.Screen name="Localizacion"options={{tabBarIcon:({color})=>(<MaterialCommunityIcons name="movie-open" size={24}color={color } />)}} component={LocalizacionScreen} />
   
  </Menu.Navigator>
  </NavigationContainer>
   );
    
};

