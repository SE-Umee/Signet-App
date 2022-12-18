import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import SmallCard from '../components/SmallCard';
import { colors } from '../components/colors';
import { AddPostIcon, SignetIcon } from '../components/svg';
import LargeCard from '../components/LargeCard';
import ButtonB from '../components/ButtonB';
import ButtonA from '../components/ButtonA';
import ItemActivityCard from '../components/ItemActivityCard';
import PostCard from '../components/PostCard';
import { useNavigation } from '@react-navigation/native';
import AddPost from './AddPost';


const Community = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.iconView}>
          <View style={{ marginLeft: '25%', }}>
            <SignetIcon />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate(AddPost)}>
            <View style={styles.addPostIconView}>
              <AddPostIcon />
              <Text style={styles.addPostText}>ADD POST</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.postView}>
          <PostCard profileimage={require('../assets/images/ProfileIcon.png')} name="Manish Gautam" uploadDate="1 DAY AGO" posterimage={require("../assets/images/Rectangle.png")} likes="15 Likes" comments="16 Comments" />
          <PostCard profileimage={require('../assets/images/ProfileIcon.png')} name="Manish Gautam" uploadDate="1 DAY AGO" posterimage={require("../assets/images/Rectangle.png")} likes="15 Likes" comments="16 Comments" />
          <PostCard profileimage={require('../assets/images/ProfileIcon.png')} name="Manish Gautam" uploadDate="1 DAY AGO" posterimage={require("../assets/images/Rectangle.png")} likes="15 Likes" comments="16 Comments" />
          <PostCard profileimage={require('../assets/images/ProfileIcon.png')} name="Manish Gautam" uploadDate="1 DAY AGO" posterimage={require("../assets/images/Rectangle.png")} likes="15 Likes" comments="16 Comments" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Community;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
    alignItems: 'center'
  },
  iconView: {
    flex: 1,
    marginTop: '2%',
    flexDirection: 'row',
    justifyContent: 'center'

  },
  addPostIconView: {
    alignItems: 'flex-end',
    paddingLeft: '5%'
  },
  addPostText: {
    color: colors.ColorA,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginTop: '2%',
    fontWeight: '400',
    lineHeight: 21,
  },
  postView: {
    marginVertical: '3%'
  },
});
