import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from './colors';

const SmallCard = (prop) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.tegTittleText}>{prop.title}</Text>
      <Text style={styles.tegText}>{prop.teg}</Text>
    </View>
  );
};

export default SmallCard;
const styles = StyleSheet.create({
  mainContainer: {
    height: 106,
    width: 175,
    backgroundColor: colors.cardBg,
    borderRadius: 7,
  },
  tegTittleText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '400',
    color: colors.textColorA,
    lineHeight: 21,
    marginLeft: 10,
    marginTop: 10,
  },
  tegText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 40,
    fontWeight: '400',
    color: colors.ColorB,
    lineHeight: 60,
    marginLeft: 10,
    marginTop: 10,
  },
});
