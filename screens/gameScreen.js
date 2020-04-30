import React from 'react'
import { View, StyleSheet } from 'react-native'
import PlayerDice from '../components/playerDice/playerDice'
import Board from '../components/board/board'

export const gameScreen = ({ navigation }) => {
    const players = navigation.getParam('players')
    return (
        <View style={{ marginTop: '10%' }}>
            <View style={{ opacity: 0 }}>
                <PlayerDice />
            </View>
            <Board players={players} />
            <View style={{ opacity: 1 }}>
                <PlayerDice />
            </View>
        </View >
    )
}


export default gameScreen