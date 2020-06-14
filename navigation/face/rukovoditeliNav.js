import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PochetnieGrajdaneKurganskoyOblScreen from '../../screens/rukovoditeli'
import FaceDatailScreen from '../../screens/detail/FaceDatail'


const Stack = createStackNavigator();



function MyStack(){  
    return (
        <Stack.Navigator initialRouteName="Руководители предприятий, организаций">
            <Stack.Screen name="Руководители предприятий, организаций" component={PochetnieGrajdaneKurganskoyOblScreen} />
            <Stack.Screen name="Информация" component={FaceDatailScreen} />
        </Stack.Navigator>
    )
}

export default function PochetnieGrajdaneKurganskoyOblNavigate() {
    return (
        <MyStack />
    )
}