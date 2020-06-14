import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Image, ScrollView, View, Dimensions  } from 'react-native'
import faceZaural from '../data/faceZaural/faceZauralec.json'

const screen = Dimensions.get("screen");
const screenWidth = screen.width;
const screenHeight = screen.height;

const data = faceZaural[8]["list"];


const FaceZauralecScreen = ({ navigation  }) => (
    <ScrollView>
        { data.map( (item, index) => (
            <TouchableOpacity
                key={index}
                style={ style.container }
                onPress={() => navigation.navigate('Информация', {"data": item})}
                >
                <Image
                    style={ style.image }
                    source={{ uri : item.image }}
                />
                <View
                    style={ style.containerText }
                >
                    <Text style={style.titleTop}>{ item.name.split(" ")[0] }</Text>
                    <Text style={style.titleBottom}>{ item.name.split(" ")[1] + " " + (item.name.split(" ")[2] != undefined ? item.name.split(" ")[2] : '') }</Text>
                    <Text style={style.information} numberOfLines={3} ellipsizeMode="head">{ item.mini_info }</Text>
                </View>
            </TouchableOpacity>
        ) ) }
    </ScrollView>
)

const style = StyleSheet.create({
    container: {
        margin: 20,
        flexDirection: "row",
        width: screenWidth - 40
    },
    containerText: {
        paddingLeft: 5,
        backgroundColor: "#fff",
        width: screenWidth - 40 - 100,
        justifyContent: 'flex-start'
    },
    titleTop: {
        fontSize: 20,
        fontWeight: "bold"
    },
    titleBottom: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8
    },
    image: {
        width: 100,
        height: 120
    },
    information: {
        fontSize: 12
    }

})

export default FaceZauralecScreen