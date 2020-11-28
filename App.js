
import React from "react";
import{Ionicons}from "@expo/vector-icons"
import MovieListScreen from "./crs/MovieListScreen";
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
    activeColor="pink"
    shifting={true}
    style={{backgroundColor: '#0000'}}
    >
    <Menu.Screen name="Inicio" options={{tabBarIcon:({color})=>(<FontAwesome name="home" size={24} color={color } />)}}component={MovieListScreen} />
    <Menu.Screen name="Peliculas"options={{tabBarIcon:({color})=>(<MaterialCommunityIcons name="movie-open" size={24}color={color } />)}} component={MovieListScreen} />
    <Menu.Screen name="personajes" options={{tabBarIcon:({color})=>(<MaterialIcons name="person-pin" size={24} color={color } />)}}component={MovieListScreen} />
  </Menu.Navigator>
  </NavigationContainer>
   );
    
};

