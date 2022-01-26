import { StyleSheet,Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Title from '../components/title';

const Home = ({navigation}) => {
  return (
    <View  style={styles.container} >
      <Title/>
      <View style={styles.bannerContainer}>
      <Image
      source={{ 
        uri:'https://p7.hiclipart.com/preview/234/669/248/nepal-general-knowledge-quiz-test-blue-light-bulb-vector.jpg'
      }}
      style={styles.banner}
      resizeMode='contain'
      />

      
      </View>
      <TouchableOpacity
      onPress={()=>{navigation.navigate("Quiz")}} 
      style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
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
  },
  banner:{
    height:300,
    width:300
  },
  bannerContainer:{
    alignItems:'center',
    justifyContent:'center',
    flex:1

  },
  container:{
    paddingTop:40,
    paddingHorizontal:20,
    height:'100%'
  },
  button:{
    width:"100%",
    backgroundColor:"#1A759f",
    padding:16,
    borderRadius:16,
    alignItems:'center',
    marginBottom:30,
  },
  buttonText:{
    color:'#ffffffff',
    fontSize:24,
    fontWeight:'600'

  }
});
