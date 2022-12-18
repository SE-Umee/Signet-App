import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from './colors'

const YourPostCard = (prop) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.subContainer}>
                <Image source={prop.imageA} style={styles.postImage} />
            </View>
            <View style={styles.subContainer}>
                <Image source={prop.imageB} style={styles.postImage} />
            </View>
        </View>
    )
}

export default YourPostCard

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    subContainer: {
        backgroundColor: colors.cardBg,
        padding: "1%",
        borderRadius: 7,
        marginTop: '2%',
        marginHorizontal: '0.5%'

    },
    postImage: {
        resizeMode: 'cover',
        borderRadius: 7
    },
})