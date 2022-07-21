import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import normalize from 'react-native-normalize';
import { logo, logo_2 } from '../../assets';

const Intro = (props) => {

    const slides = [
        {
            key: 1,
            title: 'Title 1',
            text: `Buat dirimu lebih percaya diri`,
            image: logo_2,
            backgroundColor: '#f3d3de',
        },
        {
            key: 2,
            title: 'Title 2',
            text: 'Membantu Meningkatkan penjualan anda',
            image: logo_2,
            backgroundColor: '#f3d3de',
        },
        {
            key: 3,
            title: 'Title 3',
            text: 'Mitra Bisnis Usaha Anda untuk Membuat brand sendiri',
            image: logo_2,
            backgroundColor: '#f3d3de',
        },
    ];

    const [showRealApp, setShowRealApp] = useState(false);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.background}>
                {/* <Text style>{item.title}</Text> */}
                <View style={{ justifyContent: "center", alignItems: "center", paddingTop: normalize(130) }}>
                    <Image source={item.image} style={styles.imgSize} />
                </View>
                <View style={{paddingLeft:normalize(50), paddingRight:normalize(50)}}>
                    <Text style={{ textAlign: "center", fontSize: normalize(24), color: "black" } }>{item.text}</Text>
                </View>
            </View>
        );
    }

    const renderDone = () => {
        return (
            <View style={{paddingHorizontal:normalize(20)}}>
                <Text style={{ color: "#129587", fontSize: normalize(20), fontWeight:"bold" }}>Done</Text>
            </View>
        )
    }

    const renderNext = () => {
        return (
            <View style={{paddingHorizontal:normalize(20)}}>
                <Text style={{ color: "black", fontSize: normalize(20), fontWeight:"bold" }}>Next</Text>
            </View>
        )
    }

    return (
        <AppIntroSlider renderItem={renderItem} renderNextButton={renderNext} data={slides} onDone={() => props.navigation.navigate("Login")} renderDoneButton={renderDone} />
    )
}

export default Intro;

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: "#ecd6dd",

    },
    imgSize: {
        width: normalize(250),
        height: normalize(200)
    },
    objCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text1: {
        fontSize: normalize(18),
        textAlign: "center"
    },
    dot1: {
        width: normalize(15),
        height: normalize(15),
        borderRadius: 15,
        backgroundColor: "#fcd206"
    },
    dot2: {
        width: normalize(15),
        height: normalize(15),
        borderRadius: 15,
        backgroundColor: "#dfdfdf",
        marginLeft: normalize(10)
    }
})