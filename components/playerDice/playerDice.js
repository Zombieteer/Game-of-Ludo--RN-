import React, { useState } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Images } from './diceNumber'

export const playerDice = () => {
    const [currentDice, setCurrentDice] = useState('1')
    const changeDice = async () => {
        await setTimeout(() => {
            setCurrentDice((Math.ceil(Math.random() * 6)).toString())
        }, 0);
        // console.log(currentDice)
    }

    return (
        <View style={styles.container}>
            <Image source={Images.dices[currentDice]} style={styles.dice} onTouchStart={changeDice} />
            <Image source={Images.avatar['common']} style={styles.avatar} />
            {console.log(currentDice)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        // borderWidth: 1
    },
    dice: {
        width: 50,
        height: 50,
        margin: 5,
        borderWidth: 1,
        borderColor: '#000'
    },
    avatar: {

    }
})

export default playerDice