import React, { Fragment, useState, useEffect } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import { boardStyles } from './boardStyles'
import { tokens } from './boardStyles'
// import Game from '../game/game'

export const board = ({ players }) => {
    // const players = 2
    const init = () => {
        let rtrn = []
        let color = ['red', 'yellow', 'blue', 'green']
        let token_place = ['_0_', '_1_', '_2_', '_3_']
        for (var token = 1; token <= players; token++) {
            var img = [];
            let color_style = color[token - 1]
            for (var i = 0; i < 4; i++)
                img.push(<Image style={[styles.token, styles[token_place[i]]]} key={i} source={tokens[String(token)]} />);
            rtrn.push(<View style={styles[color_style]} key={color_style}>{img}</View>)
        }
        return rtrn
    }

    return (
        <View style={boardStyles.container} onTouchEnd={(e) => { console.log('touchEnd', e.nativeEvent) }}>
            <ImageBackground source={require('../../assets/Ludo_board.png')} style={boardStyles.board}>
                {init()}
                {/* <View style={[styles._0_]}>
                    <Image style={[styles.token, styles.test]} source={tokens['2']} />
                </View> */}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    token: {
        width: 25,
        height: 25,
    },
    red: {
        position: 'absolute',
        top: Dimensions.get('window').height / 2.104,
        left: Dimensions.get('window').width / 10.2,
    },
    yellow: {
        position: 'absolute',
        left: Dimensions.get('window').width / 1.44,
        top: Dimensions.get('window').height / 6.3,
    },
    blue: {
        position: 'absolute',
        left: Dimensions.get('window').width / 1.44,
        top: Dimensions.get('window').height / 2.104,
    },
    green: {
        position: 'absolute',
        left: Dimensions.get('window').width / 10.2,
        top: Dimensions.get('window').height / 6.3,
    },
    _0_: {
        top: -Dimensions.get('window').height / 9
    },
    _1_: {
        left: Dimensions.get('window').width / 7.5,
        top: -Dimensions.get('window').height / 6.75
    },
    _2_: {
        top: -Dimensions.get('screen').height / 9.3
    },
    _3_: {
        left: Dimensions.get('window').width / 7.5,
        top: -Dimensions.get('window').height / 6.6
    },
    // test: {
    //     borderWidth: 1,
    //     borderColor: 'black',
    //     top: +Dimensions.get('window').height / 2.024,
    //     left: Dimensions.get('window').width / 2.55,
    // }
})

export default board