import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../components/colors'
import { BackArrowIcon, SignetIcon } from '../components/svg'
import SmallCard from '../components/SmallCard'
import LargeCard from '../components/LargeCard'
import ItemActivityCard from '../components/ItemActivityCard'
import ButtonB from '../components/ButtonB'
import ButtonA from '../components/ButtonA'
import { useNavigation } from '@react-navigation/native';

const Details = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.iconView}>
                    <TouchableOpacity style={{ marginHorizontal: '4%' }} onPress={() => { navigation.goBack('VERIFY') }}>
                        <BackArrowIcon />
                    </TouchableOpacity>
                    <View style={{ marginHorizontal: '15%' }}>
                        <SignetIcon />
                    </View>
                </View>
                <View style={{ marginTop: '5%', marginLeft: '3%' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <SmallCard title="Tag Scans" teg="121" />
                        <View style={{ marginLeft: '4%' }}>
                            <SmallCard title="RARITY" teg="100" />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: '5%' }}>
                        <SmallCard title="TCLAIMED" teg="90" />
                        <View style={{ marginLeft: '4%' }}>
                            <SmallCard title="RESALE" teg="3" />
                        </View>
                    </View>
                </View>
                <View style={styles.aboutView}>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'Poppins-Regular',
                        fontWeight: '400',
                        color: colors.textColorB
                    }}>
                        ABOUT
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'Poppins-Regular',
                        fontWeight: '400', color: colors.textColorA,
                        marginVertical: '2%', lineHeight: 24
                    }}>
                        The photographs describes the fight of young souls seeking escape from old rituals in order to build their own story and future.
                    </Text>
                </View>
                <View>
                    <LargeCard R1C1="CREATED BY"
                        R1C2="Distinct Cloud Labs"
                        R2C1="OWNER"
                        R2C2="Manish Gautam"
                        R3C1="PURCHASED ON"
                        R3C2="02 Apr 2022"
                        R4C1="MANUFACTURED"
                        R4C2="01 Apr 2022"
                        R5C1="CREATED BY"
                        R5C2="Distinct Cloud Labs"
                    />
                    <LargeCard R1C1="TOKEN ID"
                        R1C2="117"
                        R2C1="STANDARD"
                        R2C2="ERC-721"
                        R3C1="BLOCKCHAIN"
                        R3C2="SOLANA"
                        R4C1="ROYALITY"
                        R4C2="7.5%"
                        R5C1="CREATED BY"
                        R5C2="Distinct Cloud Labs"
                    />
                </View>
                <View>
                    <Text
                        style={{
                            fontSize: 16,
                            fontFamily: 'Poppins-Regular',
                            fontWeight: '400',
                            color: colors.textColorB,
                            marginLeft: '3%',
                            marginVertical: '2%',
                        }}
                    >ITEM ACTIVITY</Text>
                    <ItemActivityCard date="2 days ago" description="Some one purchased this for $112 from otherone" />
                    <ItemActivityCard date="2 days ago" description="Some one purchased this for $112 from otherone" />
                </View>
                <View style={styles.buttonView}>
                    <ButtonB text={"VERIFY ON POLYGON"} />
                    <ButtonA text={"TRANSFER OWNERSHIP"} />
                </View>
            </ScrollView>


        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.bgColor,
    },
    iconView: {
        flex: 1,
        marginTop: '2%',
        flexDirection: 'row',
        alignItems: 'center',

    },
    aboutView: {
        marginLeft: '3%',
        marginVertical: '2%',
    },
    buttonView: {
        marginTop: '40%',
    },
})