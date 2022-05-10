import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import { getDetails } from '../api/imdbApi';
import {styles} from './home'


DetailsScreen = ({ route }) => {

    const { id } = route.params;
    
    useEffect(() => {
        getMovieDetails();
      }, []);
    
    const [movieDetails, setMovieDetails] = useState([]);
    
    const getMovieDetails = () => getDetails(setMovieDetails, id);

    return(
        <SafeAreaView>
            <View>
                <Image 
                    style={styles.image}
                    source={{uri: movieDetails.image}}/>
                <Text>
                    {movieDetails.fullTitle}
                </Text>
                <Text>
                     {movieDetails.plot}
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default DetailsScreen;
