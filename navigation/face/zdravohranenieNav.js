import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PochetnieGrajdaneKurganskoyOblScreen from '../../screens/zdravohranenie'
import FaceDatailScreen from '../../screens/detail/FaceDatail'


const Stack = createStackNavigator();



function MyStack(){  
    return (
        <Stack.Navigator initialRouteName="Работники здравоохранения, социальной защиты">
            <Stack.Screen name="Работники здравоохранения, социальной защиты" component={PochetnieGrajdaneKurganskoyOblScreen} />
            <Stack.Screen name="Информация" component={FaceDatailScreen} />
        </Stack.Navigator>
    )
}

export default function PochetnieGrajdaneKurganskoyOblNavigate() {
    return (
        <MyStack />
    )
}