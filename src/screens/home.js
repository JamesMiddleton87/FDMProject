
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    Text,
    View,
    Image,
    Pressable
  } from 'react-native';
import { getTopMovies } from '../api/imdbApi';

const Tile = ({uri, text}) => {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={{
              uri: uri,
            }}/>
        <Text style={styles.title}>
          {text}
        </Text>
      </View>
    );
  };

const HomeScreen = ({ navigation }) => {

    useEffect(() => {
        getMovieList();
      }, []);
    
    const [movieList, setMovieList] = useState([]);
    
    const getMovieList = () => getTopMovies(setMovieList);

  return (
      <SafeAreaView>
        <FlatList 
                data= {movieList.items}
                renderItem={({item}) =>
                <Pressable onPress={() =>
                    navigation.navigate('Details', { id: item.id, title: item.title })}>
                    <Tile style={styles.container}
                    text= {item.title}
                    uri= {item.image}
                    />
                </Pressable>
                }
                keyExtractor={item => item.id}
                style={styles.carousel}
                horizontal = {true}
                />
      </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
    carousel:{
      height: 250,
      paddingHorizontal: 5,
      marginTop: 16,
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 2.5,
      width: 160,
    },
    title: {
      fontSize: 12,
      color: 'black'
    },
    image: {
      width: 150,
      height: 220,
    }
  });

  export default HomeScreen;
