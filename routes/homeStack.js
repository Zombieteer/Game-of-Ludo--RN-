import { createStackNavigator, HeaderTitle } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import GameScreen from '../screens/gameScreen'
import SelectPlayer from '../screens/selectPlayer'
import React from 'react'
import { ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const screens = {
    SelectPlayer: {
        screen: SelectPlayer,
        navigationOptions: {
            headerShown: false,
        }
    },
    GameScreen: {
        screen: GameScreen,
        navigationOptions: {
            title: '',
            headerStyle: { height: 60, backgroundColor: '#F6DDCC' }
        }
    },
}

const HomeStack = createStackNavigator(screens)
export default createAppContainer(HomeStack)