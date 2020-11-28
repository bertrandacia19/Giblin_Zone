//importación de los modulos necesarios
import React from "react";
import { StyleSheet, Text, Image, Dimensions} from "react-native"; 
import { Container, Input, Form, Icon, Item, Button, Header, H1} from "native-base";
import { Feather } from '@expo/vector-icons';




const {width, height} = Dimensions.get("window");


const MovieListScreen = () =>{
    return (

        <Container>
            <Header searchBar>
             
             <Item>
             
             <Input inlineLabel placeholder = "Buscar"/>
             <Button icon>
               <Feather name="search" size={29} color="white" />
             </Button>
             </Item>
           </Header>

         <Image 
           source = {require("../assets/logo.png")} 
           style={styles.Zone}
           /> 
           
        </Container>
        
    );
};


const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: "center",
        alignItems: "center",

    },
    input: {
        margin: 15,
    },

    Zone: {
       width: width ,
       height: height * 0.20,
       resizeMode: "cover",
    },
});

export default MovieListScreen;