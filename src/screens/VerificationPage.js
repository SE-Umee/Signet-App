import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import ButtonB from '../components/ButtonB';
import ButtonA from '../components/ButtonA';
import VerificationCard from '../components/VerificationCard';
import { colors } from '../components/colors';
import { useNavigation } from '@react-navigation/native';


const VerificationPage = () => {

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.mainView}>
      <ScrollView>
        <Image
          source={require('../assets/images/SignetTagsLogo2.png')}
          style={styles.logoImage}
        />
        <Image
          source={require('../assets/images/short.png')}
          style={styles.shortImage}
        />
        <Image
          source={require('../assets/images/verificationImage.png')}
          style={styles.VerificationImage}
        />
        <Image
          source={require('../assets/images/VERIFIED.png')}
          style={styles.Verified}
        />
        <Text style={styles.tegsText}>
          This is an authentic product from SIgnet Tags
        </Text>
        <VerificationCard />
        <View style={styles.btnView}>
          <ButtonB text={'DETAILS'} onPress={() => navigation.navigate("Details")} />
          <ButtonA text={'VIEW ON METAVERSE'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerificationPage;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  logoImage: {
    alignSelf: 'center',
    width: 150,
    height: 40,
  },
  shortImage: {
    alignSelf: 'center',
    marginTop: 15,
    width: 100,
    height: 110,
  },
  VerificationImage: {
    alignSelf: 'center',
    marginTop: 15,
    width: 150,
    height: 150,
  },
  Verified: {
    alignSelf: 'center',
    marginTop: 15,
  },
  tegsText: {
    color: '#fff',
    alignSelf: 'center',
    margin: 15,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  btnView: {
    position: 'absolute',
    top: 630,
  },
});
