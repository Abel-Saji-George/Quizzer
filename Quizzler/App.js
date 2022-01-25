import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';

const App = () => {
  return (
    <View style={{backgroundColor:'#ffffffff',flex:1}}>
      <View style={styles.container}>
      {/* <Text>This is Quizzler</Text> */}
      {/* <Home/> */}
      {/* <Quiz/> */}
      {/* <Result/> */}
      <NavigationContainer><MyStack /></NavigationContainer>
    </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({


  container:{
    paddingTop:40,
    paddingHorizontal:16,
  },


});
