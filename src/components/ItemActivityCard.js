import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from './colors'

const ItemActivityCard = (prop) => {
    return (
        <View style={styles.itemActivityCard}>
            <View style={styles.topView}>
                <Text style={styles.topViewSaleText}>Sale</Text>
                <Text style={styles.topViewSaleDate}>{prop.date}</Text>
            </View>
            <View style={styles.descriptionView}>
                <Text style={styles.descriptionText}>{prop.description}</Text>
            </View>
        </View>
    )
}

export default ItemActivityCard

const styles = StyleSheet.create({
    itemActivityCard: {
        backgroundColor: colors.cardBg,
        height: 88,
        width: 370,
        alignSelf: 'center',
        margin: 5,
        borderRadius: 5,
    },
    topView: {
        flex: 0.3,
        flexDirection: 'row',
        marginVertical: '2%',
        alignItems: 'center',
    },
    topViewSaleText: {
        flex: 0.8,
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        fontWeight: '400',
        color: colors.textColorA,
        lineHeight: 18,
        marginLeft: 10,
    },
    topViewSaleDate: {
        flex: 0.2,
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        fontWeight: '400',
        color: colors.textColorB,
        lineHeight: 18,
        marginRight: 10,
    },
    descriptionView: {
        flex: 0.7,
        justifyContent: 'center',
    },
    descriptionText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        fontWeight: '400',
        color: colors.textColorA,
        lineHeight: 24,
        marginLeft: '2.5%'
    }
})