import { HomeStackParamList } from '@/app/App';
import { Movie } from '@app/lib';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';
import {Text, Title} from 'react-native-paper';

type DetailsScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Home'
>;


type DetailsScreenProps = {
  navigation: DetailsScreenNavigationProp;
};

function Details({ navigation }: DetailsScreenProps) {
  const { params } = useRoute<RouteProp<HomeStackParamList, 'Details'>>();

  const [movie, setMovie] = useState<Movie>();
  useEffect(() => {
    if(params?.movie !== undefined){
      setMovie(params.movie);
    }
  },[params])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Title>Details Screen</Title>
      {movie && (
      <View style={styles.container}>
        <Image style={styles.logo} source={{uri: movie.poster}} />
        <Title>{movie.title}</Title>
        <Text>{movie.plot}</Text>
        <Text>{movie.actors.join(",")}</Text>
        <Text>{movie.director}</Text>
        <Text>{movie.released}</Text>
        <Text>{movie.genre.join(",")}</Text>
        <Text>{movie.year}</Text>
      </View>
      )}
      <Button
        title="Go to Home"
        onPress={() => navigation.push('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: { 
    flex: 1,
    padding: 15, 
  }, 
  logo: {
    width: 100,
    height: 158,
    alignSelf: "center"
  }
});

export { Details };