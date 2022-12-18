import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../components/colors';
import { useNavigation } from '@react-navigation/native';
import EditProfile from '../screens/EditProfile';

const EditProfileButton = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(EditProfile)}>
            <Text style={styles.buttonText}>EDIT PROFILE</Text>
        </TouchableOpacity>
    )
}

export default EditProfileButton

const styles = StyleSheet.create({
    button: {
        height: 33,
        width: 106,
        borderWidth: 2,
        borderColor: colors.ColorB,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: colors.ColorB,
        fontFamily: 'Poppins-Regular',
        fontSize: 14, marginTop: '2%',
        fontWeight: '400',
        lineHeight: 21,
    },
})