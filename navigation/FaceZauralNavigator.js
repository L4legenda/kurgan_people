import React, { useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import PochetnieGrajdaneKurganskoyOblScreen from './face/pochetnieGrajdaneKurganskoyOblNav'
import DekabristiScreen from './face/dekabristiNav'
import Kuptci from './face/kuptciNav'
import Peredoviki from './face/peredovikiNav'
import Rukovoditeli from './face/rukovoditeliNav'
import Predprinimateli from './face/predprinimateliNav'
import Uchenie from './face/uchenieNav'
import Obrazovanie from './face/obrazovanieNav'
import Zdravohranenie from './face/zdravohranenieNav'
import Pisateli from './face/pisateliNav'

import HeroDetailScreen from '../screens/heroDetail'

import faceZaural from '../data/faceZaural/faceZauralec.json'
import { onChange } from 'react-native-reanimated';


const components = {
    pochetnieGrajdaneKurganskoyObl : PochetnieGrajdaneKurganskoyOblScreen,
    dekabristi : DekabristiScreen,
    kuptci : Kuptci,
    peredoviki: Peredoviki,
    rukovoditeli: Rukovoditeli,
    predprinimateli: Predprinimateli,
    uchenie: Uchenie,
    obrazovanie: Obrazovanie,
    zdravohranenie: Zdravohranenie,
    pisateli: Pisateli

}

const Drawer = createDrawerNavigator();

export default function MyDrawer({ navigation  }) {

    return (
      <Drawer.Navigator>
          {
              faceZaural.map( (item, index) => (
                <Drawer.Screen key={index} name={item.theme} component={components[item.fielJs] } />
               ) )
          }
      </Drawer.Navigator>
    );
  }