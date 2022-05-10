
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    Pressable
  } from 'react-native';
  import CreateCard from '../components/Card';
  import { getTopMovies } from '../api/imdbApi';

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
                    <CreateCard
                        navigtion = {navigation}
                        title= {item.title}
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
      height: 350,
      paddingHorizontal: 5,
      marginTop: 16,
    },
    title: {
      fontSize: 12,
      color: 'black'
    }
  });

  export default HomeScreen;
