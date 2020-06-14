import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import hero from '../data/hero/hero.json'

const MapScreen = () => (
    <View style={style.container}>
        <MapView style={style.map} initialRegion={{latitude: 55.446566, longitude: 65.354467, latitudeDelta: 0.09, longitudeDelta: 0.0921}}>
            {
                hero.map( (item, index) => (
                    <Marker key={index} title={item.fio} coordinate={{ latitude: item.location[0], longitude: item.location[1] }}/>
                ) )
            }
        </MapView>
    </View>
)

const style = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
})

export default MapScreen