import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const Quiz = ({navigation}) => {
  const [questions,setQuestions]=useState();
  const [qNo,setQNo]=useState(0);
  const getQuiz=async()=>{
    const url='https://opentdb.com/api.php?amount=10&type=multiple';
    const res=await fetch(url);
    const data=await res.json();
    console.log(data.results[0]);
    setQuestions(data.results);
    // console.log(questions['category']);
  }
  useEffect(()=>{
    getQuiz()
  },[])
  return (
    <View style={styles.container}>
      {questions&&
        <View style={styles.parent}>
                

            <View style={styles.top}>
              <Text style={styles.question}>Q. The question for the quiz goes over here {}</Text>
            </View>

            <View style={styles.options}>
                <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Cool option one</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Cool option two </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Cool option three</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Cool option four</Text>
                </TouchableOpacity >
            </View>
            <View style={styles.bottom}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>SKIP</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>NEXT</Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Result')}>
                    <Text style={styles.buttonText}>END</Text>
                  </TouchableOpacity> */}
                </View>
        </View>
      }
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  bottom:
  {
    margin:12,
    paddingVertical:16,
    flexDirection:'row',
    justifyContent:'space-between'
  },

  button:
  {
    backgroundColor:"#1A759f",
    padding:12,
    paddingHorizontal:16,
    borderRadius:16,
    alignItems:'center',
    marginBottom:30,
  },

  buttonText:
  {
    color:'#ffffffff',
    fontSize:18,
    fontWeight:'600'

  },

  container:
  {
    paddingTop:40,
    paddingHorizontal:20,
    height:'100%'
  },

  option:
  {
    color:'white',
    fontSize:18,
    fontWeight:'500',
  },
  options:{
    marginVertical:16,
    flex:1,
  },

  optionButton:
  {
    padding:12,
    margin:6,
    backgroundColor:'#34A0A4',
    borderRadius:12
  },
  
  parent:
  {
    height:'100%'
    // flex:1
  },

  question:
  {
    color:'#000000',
    fontSize:28,
  },

  top:
  {
    marginVertical:16,
  },

});
