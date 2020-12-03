
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
import MovieSearchResults from "./src/screens/MovieSearchResults";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Menu = createMaterialBottomTabNavigator();
 

const Stack = createStackNavigator();
const resultado = ()=>{
return(

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
   );
 }
 export default function App() {
   return( 
 


   <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name = "inicio" children = {resultado} options = {{headerShown: false}}/>  
       <Stack.Screen name="listMovie" component ={MovieListScreen} />
       <Stack.Screen name= "searchResults" component = {MovieSearchResults} />
      </Stack.Navigator>
   </NavigationContainer>   

   );
    
};
