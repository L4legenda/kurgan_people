import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Icon } from 'react-native-elements'


import MapScreen from '../screens/map'
import VictorinScreen from '../screens/victorin'

import FaceZauralecScreen from './FaceZauralNavigator'
import YoungHeroNavigateScreen from './YoungHeroNavigation'
import HeroScreen from './HeroNavigation'




const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
            initialRouteName="Карта"
            activeColor="#ffffff"
            inactiveColor="#000000"
            barStyle={{ backgroundColor: '#694fad' }}
        >
        <Tab.Screen 
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name='child' type='font-awesome' color="#f2f2f2" />
                ),
            }}
            name="Юные герои" component={YoungHeroNavigateScreen} />
        <Tab.Screen
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name='map' color="#f2f2f2" />
                ),
            }}
            name="Карта" component={MapScreen} />
        <Tab.Screen name="Герои" component={HeroScreen} 
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name='forum' color="#f2f2f2" />
                ),
            }}
        />
        <Tab.Screen name="Зауральцы" component={FaceZauralecScreen} 
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name='flag' type="font-awesome" color="#f2f2f2" />
                ),
            }}
        />
        <Tab.Screen name="Викторина" component={VictorinScreen} 
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name='question-circle' type='font-awesome' color="#f2f2f2" />
                ),
            }}
        />
    </Tab.Navigator>
  );
}





export default function app(){
    return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    )
}
