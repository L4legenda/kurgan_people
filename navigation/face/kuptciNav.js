import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PochetnieGrajdaneKurganskoyOblScreen from '../../screens/kuptci'
import FaceDatailScreen from '../../screens/detail/FaceDatail'


const Stack = createStackNavigator();



function MyStack(){  
    return (
        <Stack.Navigator initialRouteName="Купцы и промышленники">
            <Stack.Screen name="Купцы и промышленники" component={PochetnieGrajdaneKurganskoyOblScreen} />
            <Stack.Screen name="Информация" component={FaceDatailScreen} />
        </Stack.Navigator>
    )
}

export default function PochetnieGrajdaneKurganskoyOblNavigate() {
    return (
        <MyStack />
    )
}