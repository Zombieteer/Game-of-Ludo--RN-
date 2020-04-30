import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

export const boardStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        borderWidth: 1,
        // height: Dimensions.get('window').height
    },
    board: {
        // top: Dimensions.get('window').height / 2,
        // borderWidth: 2,
        // marginTop: 15,
        height: Dimensions.get('window').width - 10,
        // width: Dimensions.get('window').width,
        paddingLeft: 2,
        paddingRight: 2,
    }
})

export const tokens = {
    '1': require('../../assets/icons8-red-chip.png'),
    '2': require('../../assets/icons8-yellow-chip.png'),
    '3': require('../../assets/icons8-blue-chip.png'),
    '4': require('../../assets/icons8-green-chip.png'),
}
