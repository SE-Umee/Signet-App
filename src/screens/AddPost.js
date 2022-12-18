import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { BackArrowIcon, LocationIcon, PhotoIcon } from '../components/svg'
import { } from 'react-native-gesture-handler'
import { colors } from '../components/colors'
import { useNavigation } from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ButtonA from '../components/ButtonA'

const AddPost = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.topView}>
                <TouchableOpacity onPress={() => { navigation.goBack('COMMUNITY') }}>
                    <BackArrowIcon />
                </TouchableOpacity>
                <Text style={styles.headingText}>ADD POST</Text>
            </View>
            <View style={styles.cardView}>
                <Text style={styles.cardText}>Whats in your mind?</Text>
                <View style={styles.bottomIconView}>
                    <TouchableOpacity style={styles.iconView}>
                        <PhotoIcon />
                        <Text style={styles.iconText}>Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconView}>
                        <LocationIcon />
                        <Text style={styles.iconText}>Location</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconView}>
                        <FontAwesome name="video-camera" size={24} color={colors.ColorB} />
                        <Text style={styles.iconText}>Video</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttonView}>
                <ButtonA text={"POST NOW"} />
            </View>
        </SafeAreaView>
    )
}

export default AddPost

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.bgColor
    },
    topView: {
        flex: 0.05,
        marginTop: '2%',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: '4%',

    },
    headingText: {
        flex: 0.5,
        color: colors.textColorA,
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 30,
        alignSelf: 'center',
        marginLeft: '25%',
        alignContent: 'center',
    },
    cardView: {
        height: 145,
        width: 381,
        backgroundColor: colors.cardBg,
        marginTop: '15%',
        alignSelf: 'center',
        borderRadius: 7
    },
    cardText: {
        color: colors.textColorA,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        margin: '5%'
    },
    bottomIconView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginHorizontal: '4%',
        marginBottom: '2%'
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconText: {
        color: colors.ColorA,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        marginLeft: '9%'
    },
    buttonView: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: '10%'
    },
})