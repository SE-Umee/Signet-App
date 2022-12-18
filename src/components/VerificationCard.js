import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../components/colors';

const VerificationCard = () => {
  return (
    <View style={styles.VerificationCardView}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
          marginTop: 10,
        }}>
        <View style={{flex: 0.45, paddingHorizontal: 8}}>
          <Text style={styles.detailText}>CREATED BY</Text>
        </View>
        <View style={{flex: 0.6, paddingHorizontal: 8}}>
          <Text style={styles.detailDataText}>Distinct Cloud Labs LLP</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View style={{flex: 0.45, paddingHorizontal: 8}}>
          <Text style={styles.detailText}>OWNER</Text>
        </View>
        <View style={{flex: 0.6, paddingHorizontal: 8}}>
          <Text style={styles.detailDataText}>Manish Gautam </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View style={{flex: 0.45, paddingHorizontal: 8}}>
          <Text style={styles.detailText}>PURCHASED ON</Text>
        </View>
        <View style={{flex: 0.6, paddingHorizontal: 8}}>
          <Text style={styles.detailDataText}>02 Apr 2022 </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View style={{flex: 0.45, paddingHorizontal: 8}}>
          <Text style={styles.detailText}>MANUFACTURED</Text>
        </View>
        <View style={{flex: 0.6, paddingHorizontal: 8}}>
          <Text style={styles.detailDataText}>02 Apr 2022 </Text>
        </View>
      </View>
    </View>
  );
};

export default VerificationCard;

const styles = StyleSheet.create({
  VerificationCardView: {
    backgroundColor: colors.cardBg,
    height: 180,
    width: 370,
    alignSelf: 'center',
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  detailText: {
    color: colors.textColorB,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    marginTop: 6,
    textAlign: 'right',
  },
  detailDataText: {
    color: colors.textColorA,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    marginTop: 6,
  },
});
