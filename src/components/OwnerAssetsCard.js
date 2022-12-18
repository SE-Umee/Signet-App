import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from './colors'
import { CrazyBabe, NightAngle, SomeWoman } from './svg'
import { useNavigation } from '@react-navigation/native'

const OwnerAssetsCard = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.mainContainer}>

            <View style={styles.subView}>
                <TouchableOpacity onPress={() => { navigation.navigate('PeopleDetails') }}>
                    <View style={styles.circularView}>
                        <SomeWoman />
                    </View>
                </TouchableOpacity>
                <Text style={styles.text}>SOME WOMAN</Text>
            </View>
            <View style={styles.subView}>
                <TouchableOpacity>
                    <View style={styles.circularView}>
                        <CrazyBabe />
                    </View>
                </TouchableOpacity>
                <Text style={styles.text}>CRAZY BABY</Text>
            </View>
            <View style={styles.subView}>
                <TouchableOpacity>
                    <View style={styles.circularView}>
                        <NightAngle />
                    </View>
                </TouchableOpacity>
                <Text style={styles.text}> NIGHTANGLE </Text>
            </View>
        </View>
    )
}

export default OwnerAssetsCard

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        marginTop: '2%',
        justifyContent: 'space-between',
        marginBottom: '3%'
    },
    circularView: {
        height: 113,
        width: 113,
        backgroundColor: colors.cardBg,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 14,
        color: colors.ColorB,
        lineHeight: 21,
        fontFamily: 'Poppins-Regular',
        fontWeight: '400'
    },
})