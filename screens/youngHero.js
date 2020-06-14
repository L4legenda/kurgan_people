import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import youngHero from '../data/youngHero/dataYoungHero.json'

const YoungHeroScreen = ({ navigation }) => (
    <ScrollView  >
        {youngHero.map((item, index) => (
            <TouchableOpacity 
                key={index}
                onPress={ () => navigation.navigate('Информация', {data: item})}
                style={style.container}>
                <Image
                style={style.image}
                    source={{ uri: item.image}}
                />
                <Text
                    style={style.text}
                >{ item.name }</Text>
            </TouchableOpacity>
        ))}
        
        
    </ScrollView >
)

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        margin: 0
    },
    image: {
        width: 200,
        height: 200
    },
    text: {
        fontSize: 18,
        paddingTop: 15
    }
})

export default YoungHeroScreen