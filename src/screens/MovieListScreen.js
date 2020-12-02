//importación de los modulos necesarios
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, Dimensions} from "react-native"; 
import { Container, Input, Icon, Item, Button, Header, H1, View, Spinner, Card, CardItem, H3,Body} from "native-base";
import { Feather } from '@expo/vector-icons';
import backend from "../api/backend";
import getEnvVars from "../../enviroment";
import { FlatList } from "react-native-gesture-handler";

const { apiUrl} = getEnvVars();
//obtener los valores 
const {width, height} = Dimensions.get("window");

//pantalla que contiene la variables de rnderizar
const MovieListScreen = () =>{

    //maneja el estado de las peliculas
    const[Movies,setMovies]=useState(null);
    const[error,setError]=useState(false);
    const[search,setSearch] = useState("");
    //promesas y asincronia
    
    const getMoviesInfo=async() =>{
        try{
            //consultar la API de glibinzone
            const response =await backend.get( 'films');
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
                    <Item>
                    
                     <Input inlineLabel placeholder = "Buscar"/>
                        <Button icon >
                          <Feather name="search" size={29} color="white" />
                        </Button>
                    </Item>
               </Header>
               <Image
                source = {require("../../assets/logo.png")} 
                style={styles.Zone}
               />
                <H1 style={{marginTop: 30 }}>Peliculas</H1>
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
                             <H3>{item.title} </H3>
                             <Text>{item.release_date} </Text>
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
        margin: 15,
        backgroundColor:'#E58C8A',
    },

    Zone: {
       width: width ,
       height: height * 0.13,
       resizeMode: "cover",
    },

    header: {
      backgroundColor: "#F2B7D4",
    },
});

export default MovieListScreen;