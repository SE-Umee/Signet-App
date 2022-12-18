import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../components/colors';
import { BackArrowIcon, SomeWoman } from '../components/svg';
import VerificationCard from '../components/VerificationCard';
import YourPostCard from '../components/YourPostCard';

const PeopleDetails = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.mainView}>
            <View style={styles.headingView}>
                <TouchableOpacity style={styles.backArrow} onPress={() => { navigation.goBack('COMMUNITY') }}>
                    <BackArrowIcon />
                </TouchableOpacity>
                <Text style={styles.headingText}>SOME WOMAN</Text>
            </View>
            <View style={styles.subView}>
                <View>
                    <View style={styles.circularView}>
                        <SomeWoman />
                    </View>
                </View>
            </View>
            <View style={styles.aboutTextView}>
                <Text style={styles.aboutText}>ABOUT</Text>
                <Text style={styles.description}>The photographs describes the fight of young souls seeking escape from old rituals in order to build their own story and future.</Text>
            </View>
            <View style={styles.aboutTextView}>
                <VerificationCard />
            </View>
            <View>
                <Text style={styles.postText}>POSTS</Text>
            </View>
            <ScrollView>
                <YourPostCard imageA={require("../assets/images/image2.png")} imageB={require("../assets/images/image2.png")} />
                <YourPostCard imageA={require("../assets/images/image2.png")} imageB={require("../assets/images/image2.png")} />
                <YourPostCard imageA={require("../assets/images/image2.png")} imageB={require("../assets/images/image2.png")} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default PeopleDetails

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.bgColor,
    },
    headingView: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
    },
    backArrow: {
        position: 'absolute',
        left: 20
    },
    headingText: {
        color: colors.textColorA,
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 30,
        alignSelf: 'center',
        alignContent: 'center',
    },
    circularView: {
        height: 113,
        width: 113,
        backgroundColor: colors.cardBg,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '9%'
    },
    subView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    aboutTextView: {
        marginTop: '5%',
        paddingHorizontal: '4%',

    },
    aboutText: {
        color: colors.textColorB,
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        marginBottom: '2%'
    },
    description: {
        color: colors.textColorA,
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
    },
    postText: {
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Poppins-Regular',
        color: colors.textColorB,
        paddingTop: '4%',
        paddingHorizontal: '4%',
    },
})