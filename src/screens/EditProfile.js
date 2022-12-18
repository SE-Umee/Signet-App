import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { BackArrowIcon } from '../components/svg'
import { colors } from '../components/colors'
import { useNavigation } from '@react-navigation/native'
import ButtonA from '../components/ButtonA'

const EditProfile = () => {
    const navigation = useNavigation();
    const [searchPeople, setSearchPeople] = useState("");
    return (
        <SafeAreaView style={styles.mainView}>
            <View style={styles.headingView}>
                <TouchableOpacity style={styles.backArrow} onPress={() => { navigation.goBack('COMMUNITY') }}>
                    <BackArrowIcon />
                </TouchableOpacity>
                <Text style={styles.headingText}>EditProfile</Text>
            </View>
            <View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '12%' }}>
                    <Image source={require("../assets/images/ProfileIcon.png")} style={styles.profileImage} />
                    <Text style={styles.profileName}>Manish Gautam</Text>
                </View>
            </View>
            <View style={styles.inputForm}>
                <View>
                    <Text style={styles.inputText}>NAME</Text>
                    <TextInput
                        style={styles.nameInput}
                        onChangeText={newText => setSearchPeople(newText)}
                        value={searchPeople}
                        placeholderTextColor={colors.textColorB}
                    />
                </View>
                <View>
                    <Text style={styles.inputText}>ADDRESS</Text>
                    <TextInput
                        style={styles.nameInput}
                        onChangeText={newText => setSearchPeople(newText)}
                        value={searchPeople}
                        placeholderTextColor={colors.textColorB}
                    />
                </View>
                <View>
                    <Text style={styles.inputText}>ABOUT YOU</Text>
                    <TextInput
                        style={styles.aboutInput}
                        onChangeText={newText => setSearchPeople(newText)}
                        value={searchPeople}
                        placeholderTextColor={colors.textColorB}
                    />
                </View>
                <View>
                    <Text style={styles.inputText}>EMAIL ADDRESS</Text>
                    <TextInput
                        style={styles.nameInput}
                        onChangeText={newText => setSearchPeople(newText)}
                        value={searchPeople}
                        placeholderTextColor={colors.textColorB}
                    />
                </View>
                <View>
                    <Text style={styles.inputText}>WALLET ADDRESS</Text>
                    <TextInput
                        style={styles.nameInput}
                        onChangeText={newText => setSearchPeople(newText)}
                        value={searchPeople}
                        placeholderTextColor={colors.textColorB}
                    />
                </View>
            </View>
            <View>
                <ButtonA text={'SAVE CHANGES'} />
            </View>
        </SafeAreaView>
    )
}

export default EditProfile

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
    profileImage: {
        width: 60,
        height: 60,
    },
    profileName: {
        color: colors.ColorB,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
    },
    nameInput: {
        height: 59,
        width: 370,
        backgroundColor: colors.cardBg,
        borderRadius: 7,
        paddingHorizontal: '2%',
        color: colors.textColorB,
        marginBottom: '2%'
    },
    inputForm: {
        alignItems: 'center',
        marginTop: '5%',
        paddingTop: '5%'
    },
    inputText: {
        color: colors.textColorB,
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
    },
    aboutInput: {
        height: 94,
        width: 370,
        backgroundColor: colors.cardBg,
        borderRadius: 7,
        paddingHorizontal: '2%',
        color: colors.textColorB,
        marginBottom: '2%'
    },

})