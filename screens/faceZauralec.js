import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Image, ScrollView, View, Dimensions  } from 'react-native'
import faceZaural from '../data/faceZaural/faceZauralec.json'

const screen = Dimensions.get("screen");
const screenWidth = screen.width;
const screenHeight = screen.height;

{/* <Image
style={ style.image }
source={{ uri : item.image }}
/>
<View
style={ style.containerText }
>
<Text style={style.titleTop}>{ item.fio.split(" ")[0] }</Text>
<Text style={style.titleBottom}>{ item.fio.split(" ")[1] + " " + item.fio.split(" ")[2] }</Text>
<Text style={style.information}>{ item.mini_Info }</Text>
</View> */}

const FaceZauralecScreen = ({ navigation  }) => (
    <ScrollView>
        {faceZaural.map( (item, index) => (
            <TouchableOpacity
                key={index}
                style={ style.container }
                >
                    <Text>{ item.theme }</Text>
            </TouchableOpacity>
         ) )}
        
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

    }
})

export default FaceZauralecScreen