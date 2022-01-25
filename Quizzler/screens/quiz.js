import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Quiz = () => {
  return (
    <View style={styles.container}>

            <View style={styles.top}>
              <Text style={styles.text}>This is a very cool question</Text>
            </View>

            <View style={styles.options}>
                <TouchableOpacity>
                <Text style={styles.text}>Cool option one</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.text}>Cool option two </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.text}>Cool option three</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.text}>Cool option four</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                  <TouchableOpacity>
                    <Text style={styles.text}>SKIP</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.text}>NEXT</Text>
                  </TouchableOpacity>
                </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  text:{
    color:'#000000'
  },
  container:{
    padding:12,
    height:'100%'

  },
  top:{
    marginVertical:16,

  },
  options:{
    marginVertical:16,
    flex:1,
  },
  bottom:{
    margin:12,
    paddingVertical:16,
    flexDirection:'row',
    justifyContent:'space-between'
  }
});
