import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import victorin from "../data/victorin/victorin.json"

const VictorinScreen = () => {
    const [ id, setId ] = useState(0);
    const [ point, setPoint ] = useState(0);

    const [ finish, setFinish ] = useState(false);

 return (
    <View style={ style.container }>
        <View style={[style.quest, finish ? {display: "none"} : {display: "flex"} ]}>
            <Text style={style.questText}>{victorin[id].quest}</Text>
        </View>
        
        <View style={[style.menuBottom, finish ? {display: "none"} : {display: "flex"}]}>
            {
                victorin[ id ][ 'answers' ].map( (item, index) => (
                    <TouchableOpacity
                        style={style.button}
                        key={index}
                        onPress={ () => {

                            if( victorin[ id ].idAnswer == index ){
                                setPoint( sel => sel + 1 );
                            }
                            

                            const len = victorin.length - 1;
                            if(id < len){
                                setId( sel => sel + 1 );
                            }else{
                                setFinish( data => true )
                            }
                            
                        } }
                    >
                        <Text style={style.buttonText}>{item}</Text>
                    </TouchableOpacity>
                ) )
            }
                
        </View>

        <View style={[style.finish, finish ? {display: "flex"} : {display: "none"} ]}>
            <Text>Ваши баллы: {point}</Text>
        </View>
        
    </View>
    )
}

const style = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    },
    quest: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    questText: {
        textAlign: "center"
    },
    menuBottom: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: "#ccc"
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
    finish: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default VictorinScreen