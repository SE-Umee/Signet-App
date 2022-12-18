import {StyleSheet, Text, SafeAreaView, Image, View} from 'react-native';
import React from 'react';
import {colors} from '../components/colors';
import ButtonA from '../components/ButtonA';
import ButtonB from '../components/ButtonB';

const LoadingPage = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo1.png')}
      />
      <View style={styles.welcomeTextView}>
        <Text style={styles.welcomeText}>
          Welcome to Signet Tags. {'\n'}Scan a tag to get started
        </Text>
        <View>
          <ButtonA text="SCAN A TAG" />
          <ButtonB text="EXPLORE OUR STORE" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoadingPage;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.bgColor,
    // justifyContent: 'center',
    backgroundColor: colors.bgColor,
    alignItems: 'center',
    flex: 1,
  },

  logo: {
    height: 228,
    width: 228,
    position: 'absolute',
    top: 200,
  },
  welcomeTextView: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
  },
  welcomeText: {
    color: colors.textColorA,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 3,
  },
});
