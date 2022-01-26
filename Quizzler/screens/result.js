import { StyleSheet,Image, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Result = ({navigation}) => {
  return (
    <View>
        <View>
      <Text style={styles.text}>Result</Text>
        </View>
        <View style={styles.bannerContainer}>
        <Image
      source={{ url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_n8JxaZxPeDvHnPpotB6amsu2LzgJlKnmw&usqp=CAU'}}
      style={styles.banner}
      resizeMode='contain'
      />    
      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <Text style={styles.text}>
            Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
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
  },
  container:{
    paddingTop:40,
    paddingHorizontal:20,
    height:'100%'
  },
});
