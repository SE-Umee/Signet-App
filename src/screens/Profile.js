import { StyleSheet, Text, SafeAreaView, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { colors } from '../components/colors';
import { SignetIcon } from '../components/svg';
import EditProfileButton from "../components/EditProfileButton"
import ProfileButtonCard from '../components/ProfileButtonCard';
import YourPostCard from '../components/YourPostCard';

const Profile = () => {
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={{ marginHorizontal: '3%' }}>
        <View style={{ alignSelf: 'center' }}>
          <SignetIcon />
        </View>
        <View style={{ marginVertical: '7%' }}>
          <View style={styles.profileHeader}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require("../assets/images/ProfileIcon.png")} style={styles.profileImage} />
              <Text style={styles.profileName}>Manish Gautam</Text>
            </View>
            <EditProfileButton />
          </View>
        </View>
        <View>
          <ProfileButtonCard text="Hide me on Community" />
          <ProfileButtonCard text="List t-shirt for Sale" />
        </View>
        <View>
          <Text style={styles.postText}>YOUR POSTS</Text>
        </View>
        <ScrollView>
          <YourPostCard imageA={require("../assets/images/image2.png")} imageB={require("../assets/images/image2.png")} />
          <YourPostCard imageA={require("../assets/images/image2.png")} imageB={require("../assets/images/image2.png")} />

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  profileImage: {
    width: 65,
    height: 62,
    marginRight: 14
  },
  profileName: {
    color: colors.textColorA,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  postText: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: colors.textColorB,
    paddingTop: '4%',
  },
});
