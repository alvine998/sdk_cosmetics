import { StackActions } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import normalize from 'react-native-normalize';
import { logo } from '../assets';

const Splash = (props) => {
    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.dispatch(StackActions.replace("Intro"))
        }, 1000)
    })
    return (
        <View>
            <View style={styles.background}>
                <View style={styles.objCenter}>
                    <Image source={logo} style={styles.imgSize} />
                    {/* <View style={{marginTop:normalize(20)}}>
                        <Text style={{color:"white", fontSize:normalize(18)}}>Powered by Koisenta</Text>
                    </View> */}
                </View>
            </View>
        </View>
    );
}

export default Splash;

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: "#f3d3de",
    },
    imgSize: {
        width: normalize(250),
        height: normalize(250)
    },
    objCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})