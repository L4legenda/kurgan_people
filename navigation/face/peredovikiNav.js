import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PochetnieGrajdaneKurganskoyOblScreen from '../../screens/peredoviki'
import FaceDatailScreen from '../../screens/detail/FaceDatail'


const Stack = createStackNavigator();



function MyStack(){  
    return (
        <Stack.Navigator initialRouteName="Передовики и новаторы производства">
            <Stack.Screen name="Передовики и новаторы производства" component={PochetnieGrajdaneKurganskoyOblScreen} />
            <Stack.Screen name="Информация" component={FaceDatailScreen} />
        </Stack.Navigator>
    )
}

export default function PochetnieGrajdaneKurganskoyOblNavigate() {
    return (
        <MyStack />
    )
}