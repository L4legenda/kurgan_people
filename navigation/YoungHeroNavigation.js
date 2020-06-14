import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import YoungHeroDetailScreen from '../screens/youngHeroDetail'
import YoungHeroScreen from '../screens/youngHero'

const Stack = createStackNavigator();

function MyStack(){
    return (
        <Stack.Navigator initialRouteName="Юные герои">
            <Stack.Screen name="Юные герои" component={YoungHeroScreen} />
            <Stack.Screen name="Информация" component={YoungHeroDetailScreen} />
        </Stack.Navigator>
    )
}

export default function YoungHeroNavigate() {
    return (
        <MyStack />
    )
}
