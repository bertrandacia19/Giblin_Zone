//importación de los modulos necesarios
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, Dimensions} from "react-native"; 
import { Container,  Header, H1, View, Spinner, Card, CardItem, H3,Body,Left,Title,Right} from "native-base";
import { Feather } from '@expo/vector-icons';
import backend from "../api/backend";
import getEnvVars from "../../enviroment";
import { FlatList } from "react-native-gesture-handler";
import { EvilIcons } from '@expo/vector-icons'; 

const { apiUrl} = getEnvVars();
//obtener los valores 
const {width, height} = Dimensions.get("window");

//pantalla que contiene la variables de rnderizar
const LocalizacionScreen= () =>{

    //maneja el estado de las peliculas
    const[Movies,setMovies]=useState(null);
    const[error,setError]=useState(false);
    const[search,setSearch] = useState("");
    //promesas y asincronia
    
    const getMoviesInfo=async() =>{
        try{
            //consultar la API de glibinzone
            const response =await backend.get( 'locations');
            setMovies(response.data);
            console.log(response.data)
        }catch(error){
            //error al moment
           setError(true);
        }
    }


    //Hook de efecto
    useEffect(() => {
        getMoviesInfo();
      }, []);




      if (!Movies) {
        return(
            <View style={{flex : 1, justifyContent: "center"}}>
               <Spinner color = "pink" />
            </View>  
        )
      }



    return (

            <Container>
              <Header searchBar style={styles.header} androidStatusBarColor="#004e64">
              <Left />
          <Body>
            <Title>Localizacion  <EvilIcons name="location" size={24} color="white" /></Title>
            
          </Body>
          <Right />
               </Header>
               <Image
                source = {require("../../assets/logo.png")} 
                style={styles.Zone}
               />
                <FlatList
                data = {Movies}
                 keyExtractor = {(item) => item.id}
                 ListEmptyComponent = {<Text>!No contiene niguna info</Text>}
                 renderItem = {({item })=>{
                   return(
                     <View>
                        <Card>
                          <CardItem>
                            <Body>
                             <H3>{item.name} </H3>
                             <Text>{item.climate} </Text>
                             <Text>{item.terrain} </Text>
                             <Text>{item.surface_water} </Text>
                             <Text>{item.films} </Text>



                            </Body>
                          </CardItem>
                        </Card>
                     </View>
    )
                }}
                />
            </Container>
    );
};

//hoja de estilos
const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: "center",
        alignItems: "center",

    },
    input: {
        margin: 16,
        backgroundColor:'#004e64',
    },

    Zone: {
       width: width ,
       height: height * 0.13,
       resizeMode: "cover",
    },

    header: {
      backgroundColor: "#FFA2A3",
    },
});

export default LocalizacionScreen;