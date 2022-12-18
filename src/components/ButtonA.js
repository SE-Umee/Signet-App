import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../components/colors';

const ButtonA = ({ text }) => {
  return (
    <TouchableOpacity>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.ColorA, colors.ColorB]}
        style={styles.buttonA}>

        <Text style={styles.btnAText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonA;

const styles = StyleSheet.create({
  buttonA: {
    width: 350,
    marginTop: 5,
    marginBottom: 15,
    marginHorizontal: 20,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  btnAText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    fontWeight: '400',
  },
});
