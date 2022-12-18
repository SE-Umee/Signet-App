import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../components/colors';

const ButtonB = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonB} onPress={onPress} >
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonB;

const styles = StyleSheet.create({
  buttonB: {
    width: 350,
    marginBottom: 20,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 4,
    borderColor: colors.ColorA,
    alignSelf: 'center',
  },
  btnText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    fontWeight: '400',
    color: colors.ColorA,
  },
});
