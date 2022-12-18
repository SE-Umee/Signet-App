import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'
import { colors } from './colors'



const ProfileButtonCard = (prop) => {
    const [hide, setHide] = useState(false);
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.containerText}>{prop.text}</Text>
            <Switch
                trackColor={{ false: "#767577", true: colors.ColorB }}
                thumbColor={setHide ? "#000" : "#f4f3f4"}
                onValueChange={setHide}
                value={hide}
            />
        </View>
    )
}

export default ProfileButtonCard

const styles = StyleSheet.create({
    mainContainer: {
        height: 59,
        width: 370,
        backgroundColor: colors.cardBg,
        borderRadius: 7,
        marginVertical: '1%',
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '4%',
        marginBottom: '3%'
    },
    containerText: {
        fontSize: 20,
        fontWeight: '400',
        color: colors.textColorA,
        fontFamily: 'Poppins-Regular'
    },
})