import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PochetnieGrajdaneKurganskoyOblScreen from '../../screens/pisateli'
import FaceDatailScreen from '../../screens/detail/FaceDatail'


const Stack = createStackNavigator();



function MyStack(){  
    return (
        <Stack.Navigator initialRouteName="Писатели">
            <Stack.Screen name="Писатели" component={PochetnieGrajdaneKurganskoyOblScreen} />
            <Stack.Screen name="Информация" component={FaceDatailScreen} />
        </Stack.Navigator>
    )
}

export default function PochetnieGrajdaneKurganskoyOblNavigate() {
    return (
        <MyStack />
    )
}