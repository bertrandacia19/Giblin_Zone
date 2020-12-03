import { Body, CardItem, Form, H3, Item, Spinner } from "native-base";
import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet,Dimensions } from "react-native";
import { content, H1, Container,Spinner, card, CardItem, Body, H3} from "native-base";
import backend from "../api/backend";
import getEnvVars from "../../enviroment";
import { set } from "react-native-reanimated";
import { FlatList } from "react-native-gesture-handler";

const  {apiUrl} = getEnvVars();
const {width, height} = Dimensions.get("window");

const MovieSearchResults = ({ route, navigation }) =>{
    const { search } = route.params;
    const [Movies, setMovies] = useState(null);
    const getSearchMovies = async() => {
        try {
            const response = await backend.get(`films?q=${search}`);
           
            setMovies(response.data);
        }catch (error) {
            setError(true);
        }
    }

    useEffect(()=>{
        getSearchMovies();
    
    }, []);

    if (!Movies){////////////////////////////////////////////////////
        return(
          <Container>
              <Spinner />
          </Container>    
        )
    }

    return(
        <Container>
            <H1>Resultado de busqueda: {movies}</H1>
            <FlatList
             data = {Movies}
             keyExtractor = {(Item)=>Item.id}
             renderItem ={({ Item})=>{

                return(
                    <View>
                        <Card>
                          <CardItem>
                            <Body>
                             <H3>{item.title} </H3>
                             <Text>{item.release_date} </Text>
                             <Text>{item.description} </Text>
                            </Body>
                          </CardItem>
                        </Card>
                     </View>
                )
             }
                
            
            }
            />
        </Container>
      
    );
}

const styles = StyleSheet.create({});

export default MovieSearchResults;