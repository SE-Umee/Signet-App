import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from './colors'
import { HeartIcon } from './svg'

const PostCard = (props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headingView}>
                <View style={styles.headingProfileView}>
                    <Image source={props.profileimage} />
                    <Text style={styles.profileName}>{props.name}</Text>
                </View>
                <Text style={styles.dateText}>{props.uploadDate}</Text>
            </View>
            <View style={styles.imageView}>
                <Image style={styles.image} source={props.posterimage} />
            </View>
            <View style={styles.bottomView}>
                <View style={styles.likeView}>
                    <Image source={require('../assets/images/FavoriteIcon.png')} />
                    <Text style={styles.bottomViewText}>{props.likes}</Text>
                </View>
                <View style={styles.commentView}>
                    <Image source={require('../assets/images/CommentsIcon.png')} />
                    <Text style={styles.bottomViewText}> {props.comments}</Text>
                </View>
            </View>
        </View>
    )
}

export default PostCard

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        height: 474,
        width: 381,
        backgroundColor: colors.cardBg,
        borderRadius: 7,
        marginVertical: '3%'
    },
    headingView: {
        flex: 0.15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headingProfileView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '4%'
    },
    profileName: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        fontWeight: '400',
        color: colors.textColorA,
        lineHeight: 21,
        marginLeft: '6%'
    },
    dateText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        fontWeight: '400',
        color: colors.textColorB,
        lineHeight: 21,
        marginRight: '6%'
    },
    imageView: {
        flex: 1
    },
    image: {
        width: 381,
        height: 347,
    },
    bottomView: {
        flex: 0.18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    likeView: {
        marginLeft: '4%',
    },
    commentView: {
        marginRight: '4%',
        alignItems: 'flex-end'
    },
    bottomViewText: {
        color: colors.textColorB,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        marginTop: '2%',
        fontWeight: '400',
        lineHeight: 21,
    },
})