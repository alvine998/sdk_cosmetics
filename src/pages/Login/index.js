import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import normalize from 'react-native-normalize'
import { logo_2 } from '../../assets'

const Login = ({navigation}) => {
    return (
        <>
            <ScrollView style={styles.background}>
                <View style={styles.container}>
                    <Image source={logo_2} style={styles.imgSize} />
                    <Text style={styles.textLogin}>No. Handphone</Text>
                    <View style={styles.inputLogin}>
                        <TextInput placeholder='Ketik disini' keyboardType='number-pad' maxLength={13} />
                    </View>
                    <TouchableOpacity onPress={()=>navigation.push("Home")}>
                        <View style={styles.butonLogin}>
                            <Text style={styles.textLogin2}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container2}>
                        <Text style={styles.textLogin2}>Belum punya akun?</Text>
                        <TouchableOpacity onPress={()=>navigation.push('Register')}>
                            <Text style={styles.textLogin3}> Daftar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        height: "100%",
        backgroundColor: "#fff"
    },
    imgSize: {
        width: normalize(150),
        height: normalize(150)
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: normalize(150),
        paddingHorizontal: normalize(45)
    },
    container2: {
        flexDirection: "row",
        alignItems: "center",
        marginTop:normalize(10)
    },
    inputLogin: {
        width: normalize(300),
        height: normalize(40),
        borderWidth: 1,
        borderColor: "#808080",
        borderRadius: 10,
        justifyContent: "center",
        paddingLeft: normalize(10)
    },
    textLogin: {
        color: "black",
        textAlign: "left",
        fontWeight: "bold",
        marginBottom: normalize(10),
        marginRight: 'auto',
        fontSize: normalize(17)
    },
    textLogin2: {
        color: "black",
        fontSize: normalize(20)
    },
    textLogin3: {
        color: "#0d99bd",
        fontSize: normalize(20)
    },
    butonLogin: {
        width: normalize(300),
        height: normalize(40),
        backgroundColor: "#e38bb1",
        borderRadius: 10,
        justifyContent: "center",
        marginTop: normalize(10),
        alignItems: "center"
    },
})

export default Login