import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { colors } from '../components/colors';
import { SignetIcon } from '../components/svg';
import OwnerAssetsCard from '../components/OwnerAssetsCard';


const People = () => {
  const [searchPeople, setSearchPeople] = useState("");

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={{ marginHorizontal: '3%' }}>
        <View style={{ alignSelf: 'center', }}>
          <SignetIcon />
        </View>

        <View>
          <TextInput
            style={styles.searchContainer}
            onChangeText={newText => setSearchPeople(newText)}
            value={searchPeople}
            placeholder="Search People"
            placeholderTextColor={colors.textColorB}
          />
        </View>
        <Text style={styles.assetOwner}>ASSET OWNERS</Text>
        <View style={styles.assetOwnerCardView}>
          <OwnerAssetsCard />
          <OwnerAssetsCard />
          <OwnerAssetsCard />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default People;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  searchContainer: {
    height: 59,
    width: 370,
    backgroundColor: colors.cardBg,
    borderRadius: 7,
    marginVertical: '1%',
    justifyContent: "space-between",
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '2%',
    marginVertical: '6%',
    color: colors.textColorB,
  },
  assetOwner: {
    color: colors.textColorB,
    fontSize: 14,
    marginTop: '3%',
  },
  assetOwnerCardView: {
    marginTop: '2%',

  },
});
