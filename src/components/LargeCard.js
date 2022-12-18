import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../components/colors';

const LargeCard = (prop) => {
    return (
        <View style={styles.VerificationCardView}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1,
                    marginTop: 10,
                }}>
                <View style={{ flex: 0.45, paddingHorizontal: 8 }}>
                    <Text style={styles.detailText}>{prop.R1C1}</Text>
                </View>
                <View style={{ flex: 0.6, paddingHorizontal: 8 }}>
                    <Text style={styles.detailDataText}>{prop.R1C2}</Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1,
                }}>
                <View style={{ flex: 0.45, paddingHorizontal: 8 }}>
                    <Text style={styles.detailText}>{prop.R2C1}</Text>
                </View>
                <View style={{ flex: 0.6, paddingHorizontal: 8 }}>
                    <Text style={styles.detailDataText}>{prop.R2C2}</Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1,
                }}>
                <View style={{ flex: 0.45, paddingHorizontal: 8 }}>
                    <Text style={styles.detailText}>{prop.R3C1}</Text>
                </View>
                <View style={{ flex: 0.6, paddingHorizontal: 8 }}>
                    <Text style={styles.detailDataText}>{prop.R3C2}</Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1,
                }}>
                <View style={{ flex: 0.45, paddingHorizontal: 8 }}>
                    <Text style={styles.detailText}>{prop.R4C1}</Text>
                </View>
                <View style={{ flex: 0.6, paddingHorizontal: 8 }}>
                    <Text style={styles.detailDataText}>{prop.R4C2} </Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1,
                }}>
                <View style={{ flex: 0.45, paddingHorizontal: 8 }}>
                    <Text style={styles.detailText}>{prop.R5C1}</Text>
                </View>
                <View style={{ flex: 0.6, paddingHorizontal: 8 }}>
                    <Text style={styles.detailDataText}>{prop.R5C2}</Text>
                </View>
            </View>
        </View>
    );
};

export default LargeCard;

const styles = StyleSheet.create({
    VerificationCardView: {
        backgroundColor: colors.cardBg,
        height: 243,
        width: 370,
        alignSelf: 'center',
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
    },
    detailText: {
        color: colors.textColorB,
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        marginTop: 6,
        textAlign: 'right',
    },
    detailDataText: {
        color: colors.textColorA,
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        marginTop: 6,
    },
});
