import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HeroScreen from '../screens/hero'
import HeroDetailScreen from '../screens/heroDetail'


const Stack = createStackNavigator();



function MyStack(){  
    return (
        <Stack.Navigator initialRouteName="Герои">
            <Stack.Screen name="Герои" component={HeroScreen} />
            <Stack.Screen name="Информация" component={HeroDetailScreen} />
        </Stack.Navigator>
    )
}

export default function HeroNavigate() {
    return (
        <MyStack />
    )
}