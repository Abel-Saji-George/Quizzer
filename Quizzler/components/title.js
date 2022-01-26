import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quizzler</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({

    title:{
        color:'#000000',
        fontSize:36,
        fontWeight:'600'
      },
      container:{
        paddingVertical:16,
        justifyContent:'center',
        alignItems:'center'


            }
});
