import { StyleSheet,Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Title from '../components/title';

const Home = () => {
  return (
    <View  >
      <Title/>
      <View style={styles.bannerContainer}>
      <Image
      source={{ url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_n8JxaZxPeDvHnPpotB6amsu2LzgJlKnmw&usqp=CAU'}}
      style={styles.banner}
      resizeMode='contain'
      />

      
      </View>
      <TouchableOpacity>
        <Text style={styles.text}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  body:{
    backgroundColor:'#ffffffff',
  // flex:1
  },
  text:{
    color:'#000000'
  },
  banner:{
    height:300,
    width:300
  },
  bannerContainer:{
    alignItems:'center',
    justifyContent:'center'
  }
});
