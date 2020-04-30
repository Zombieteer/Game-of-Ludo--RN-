import React, { useState } from 'react'
import { View, Image, StyleSheet, Text, Dimensions, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const selectPlayer = ({ navigation }) => {
    const [players, setPlayers] = useState(2)
    const callGame = () => {
        navigation.navigate('GameScreen', { players })
        // console.log(typeof players)
    }

    return (
        <ImageBackground source={require('../assets/BG.jpeg')} style={styles.container}>
            <Text style={styles.topText}>
                Select Number of Players
            </Text>
            <View style={styles.selectPlayerImages}>
                <TouchableOpacity onPress={() => setPlayers(1)}>
                    <Image source={require('../assets/icons8-cycling-48.png')} />
                </TouchableOpacity >
                <TouchableOpacity onPress={() => setPlayers(2)}>
                    <Image source={require('../assets/icons8-scooter-48.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPlayers(3)}>
                    <Image source={require('../assets/icons8-auto-rickshaw-48.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPlayers(4)}>
                    <Image source={require('../assets/icons8-sedan-48.png')} />
                </TouchableOpacity>

            </View>
            <Text style={[styles.topText, { marginTop: 20 }]} >
                Players Selected: {players}
            </Text>
            <TouchableOpacity style={styles.button} onPressOut={callGame}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#F6DDCC', }}>Next</Text>
            </TouchableOpacity>
        </ImageBackground >
    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height,
    },
    topText: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 23,
        color: '#DC7633',
        marginTop: 75,
    },
    selectPlayerImages: {
        flexDirection: 'row',
        backgroundColor: '#2471A3',
        borderRadius: 50,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 100,
        height: 70,
    },
    button: {
        marginTop: 25,
        height: 40,
        width: 150,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#2471A3',
        justifyContent: 'center',
        borderRadius: 20
    }
})
export default selectPlayer