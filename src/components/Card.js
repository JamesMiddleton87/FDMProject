import React  from "react";
import { Text ,View, StyleSheet } from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
  
const CreateCard = ({title, uri, buttonText}) => {
      
    return(
         
    <Card style={Styles.container}>
        <Card.Cover 
            style={Styles.cardCover}
            source={{ uri: uri }}/>
        <Card.Content>
            <Title style={Styles.title}>{title}</Title>
        </Card.Content>
        <Card.Actions>
            <Button style={Styles.buttonText}>Add To Favourites</Button>
        </Card.Actions>
    </Card>
         
    )
}
export default CreateCard;
  
const Styles = StyleSheet.create({
    container :{
        margin:5,
        padding:10
    },
    cardCover :{
    },
    title :{
        fontSize: 12,
        width: 250
    },
    buttonText :{
        fontSize: 12
    }
})