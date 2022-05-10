import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import { getDetails } from '../api/imdbApi';

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
                    style={{ width: 150, height: 220 }}
                    source={{uri: movieDetails.image}}/>
                <Text>
                    {movieDetails.title}
                </Text>
                <Text>
                    {movieDetails.plot}
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default DetailsScreen;
