// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
//
import React from 'react';
import {View, Text,ScrollView} from 'react-native';
// import {MovieList} from './Movies';
import {BoatList} from './Boats';
import {MovieList} from './Movies';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      {/*<Text>Lesson 05 exercises</Text>*/}

      <Text></Text>
      <Text>GetABoat - For Sale</Text>
      <Text></Text>
      <BoatList />
      {/*<MovieList />*/}
    </ScrollView>
  );
};

export default App;
