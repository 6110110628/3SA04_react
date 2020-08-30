import React from 'react'
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native'

export default function forecast(props){

    var picture = "";
    var nameProv = "";
    
    if (props.name == "Hat Yai") {
        nameProv = props.name;
        //picture = require("../img/hatyai.jpg");
    }
    if (props.name == "Trang") {
        nameProv = props.name;
        //picture = require("../img/trang.jpg");
    }
    if (props.name == "Chiang Mai") {
        nameProv = props.name;
        //picture = require("../img/chiangmai.jpg");
    }
    if (props.name == "Khon Kaen") {
        nameProv = props.name;
        //picture = require("../img/khonkaen.jpg");
    }
    if (props.name == "Chonburi") {
        nameProv = "Chonburi";
        //picture = require("../img/chonburi.jpg");
    }

    var bg = require("../img/sky.jpg");
        if(props.main == "Clouds"){
            bg = require("../img/cloud.jpg");
        }
        if(props.main == "Rain"){
            bg = require("../img/rain.jpg");
        }

    return(
        <ImageBackground source={bg} style={styles.backdrop1}>
        <View style={styles.backdrop}>
            <Text style={styles.h1} > {nameProv} </Text>
            <Text style={styles.h2} > {props.main} </Text>
            <Text style={styles.h2} > {props.description} </Text>
            <Text style={styles.h2} > {props.temp} °C </Text>
            <View style={{paddingTop: '10%'}}>
                <Image source={picture} style={{width: 350, height: 200}} />
            </View>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    h1: {
        fontSize: 30, 
        fontWeight: 'bold',
        color: '#000000',
        paddingTop: '10%',
    },

    h2: {
        fontSize: 30,
        color: '#000000',
        alignItems: 'center',
    },

    backdrop: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },

    backdrop1: {
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        opacity: 0.7,
    }

})