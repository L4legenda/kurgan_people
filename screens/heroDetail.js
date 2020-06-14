import React, {Component, useState } from 'react'
import { TouchableOpacity, Text, StyleSheet, Image, ScrollView, View, Dimensions, Button  } from 'react-native'

import ActionSheet from 'react-native-actionsheet'

const screen = Dimensions.get("screen");
const screenWidth = screen.width;
const screenHeight = screen.height;


function HeroScreen(props) {
    const data = props['route']['params']['data'];

    const [selected, setSelected] = useState("start");

    return (
        <View style={style.main}>
            <ScrollView>
                <View style={style.container}>
                    <Image
                        style={style.image}
                        source={{uri: data.image}}
                    />
                    <Text style={style.titleTop}>{ data.fio.split(" ")[0] }</Text>
                    <Text style={style.titleBottom}>{ data.fio.split(" ")[1] + " " + data.fio.split(" ")[2] }</Text>
                </View>
                
                <Text style={style.dialog}>{ data['dialog'][selected]['info'] }</Text>
            </ScrollView>
            <View style={style.menuBottom}>
                {
                    data['dialog'][selected]['btn'].map( (item, index) => (
                        <TouchableOpacity
                            style={style.button}
                            key={index}
                            onPress={ () => setSelected( sel => item['next'] ) }
                        >
                            <Text style={style.buttonText}>{item['text']}</Text>
                        </TouchableOpacity>
                    ) )
                }
                
            </View>
        </View>
    )    
}

const style = StyleSheet.create({
    main: {
        ...StyleSheet.absoluteFillObject
    },
    image: {
        width: 200,
        height: 200
    },
    container: {
        flex: 1,
        alignItems: "center",
    },
    titleTop: {
        paddingTop: 5,
        fontSize: 20 
    },
    titleBottom: {
        fontSize: 16 
     },
    menuBottom: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: "#fff"
    },
    button: {
        padding: 12,
        marginTop: 2,
        backgroundColor: '#0853d4',
    },
    buttonText: {
        color: "#fff",
        textAlign: "center"
    },
    dialog: {
        paddingTop: 15,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 25,
        textAlign: 'center'
    }
})

export default HeroScreen