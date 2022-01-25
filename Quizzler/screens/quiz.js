import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Quiz = () => {
  return (
    <View>

            <View>
              <Text style={styles.text}>This is a very cool question</Text>
            </View>

            <View>
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
                <Text style={styles.text}>Cool option one</Text>
                </TouchableOpacity>
            </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  text:{
    color:'#000000'
  }
});
