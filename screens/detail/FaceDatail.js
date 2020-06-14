import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'


function YoungHeroDetailScreen(props){
    const data = props['route']['params']['data'];
    return (
        <ScrollView>
            <View style={style.container}>
                <Image
                    style={style.image}
                    source={{uri: data.image}}/>
                <Text
                    style={style.titleTop}
                >
                    {data.name.split(" ")[0]}
                </Text>
                <Text
                    style={style.titleBottom}
                >
                    {data.name.split(" ")[1] + " " + (data.name.split(" ")[2] != undefined ? data.name.split(" ")[2] : '')}
                </Text>
                <Text style={style.text}>
                    { data.full_info }
                </Text>
            </View>
        </ScrollView >
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 40
    },
    image: {
        width: 200,
        height: 200
    },
    titleTop: {
        fontSize: 18,
        paddingTop: 15,
        fontWeight: "bold" 
    },
    titleBottom: {
        fontSize: 16,
        fontWeight: "bold" 
    },
    text: {
        paddingTop: 20,
        textAlign: 'center'
    },
    yearHero: {
        paddingTop: 5,
        fontWeight: "bold" 
    }
})

export default YoungHeroDetailScreen