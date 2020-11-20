import React from 'react';
import {View, Text, Image} from 'react-native';

const movie = {title: 'Doctor Sleep', year: '2019'};
class Movie extends React.Component {
  render() {
    return (
      <View>
        <Text>
          {movie.title} {'\n'} {movie.year} {'\n'}
        </Text>
      </View>
    );
  }
}
const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];

const MovieList = () => {
  return MOVIES_DATA.map((movie) => (
    <View>
      <Text>
        {movie.title} {'\n'} {movie.year} {'\n'}
      </Text>
      <Image source={movie.poster} />
    </View>
  ));
};
export {MovieList};
