
let movieArray = [
    {
       "id":"tt0111161",
       "rank":"1",
       "title":"The Shawshank Redemption",
       "fullTitle":"The Shawshank Redemption (1994)",
       "year":"1994",
       "image":"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
       "crew":"Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
       "imDbRating":"9.2",
       "imDbRatingCount":"2578879"
    },
    {
       "id":"tt0068646",
       "rank":"2",
       "title":"The Godfather",
       "fullTitle":"The Godfather (1972)",
       "year":"1972",
       "image":"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
       "crew":"Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
       "imDbRating":"9.2",
       "imDbRatingCount":"1775525"
    },
    {
       "id":"tt0468569",
       "rank":"3",
       "title":"The Dark Knight",
       "fullTitle":"The Dark Knight (2008)",
       "year":"2008",
       "image":"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
       "crew":"Christopher Nolan (dir.), Christian Bale, Heath Ledger",
       "imDbRating":"9.0",
       "imDbRatingCount":"2547540"
    },
    {
       "id":"tt0071562",
       "rank":"4",
       "title":"The Godfather: Part II",
       "fullTitle":"The Godfather: Part II (1974)",
       "year":"1974",
       "image":"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
       "crew":"Francis Ford Coppola (dir.), Al Pacino, Robert De Niro",
       "imDbRating":"9.0",
       "imDbRatingCount":"1227612"
    },
    {
       "id":"tt0050083",
       "rank":"5",
       "title":"12 Angry Men",
       "fullTitle":"12 Angry Men (1957)",
       "year":"1957",
       "image":"https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
       "crew":"Sidney Lumet (dir.), Henry Fonda, Lee J. Cobb",
       "imDbRating":"8.9",
       "imDbRatingCount":"761670"
    }
 ]

import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

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

const App = () => {
  return (
    <SafeAreaView>
      <FlatList 
              data= {movieArray}
              renderItem={({item}) =>
              <Tile style={styles.container}
                text= {item.title}
                uri= {item.image}
              />}
              keyExtractor={item => item.id}
              style={styles.carousel}
              horizontal = {true}
              />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default App;
