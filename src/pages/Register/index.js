import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import normalize from 'react-native-normalize'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { logo_2 } from '../../assets'

const Register = ({navigation}) => {
    // const [choice, setChoice] = useState(true)
    // const [choice2, setChoice2] = useState(false)
    const [jk, setJk] = useState('L')
    const [images, setImages] = useState(null)
    return (
        <>
            <ScrollView style={styles.background}>
                <View style={styles.header}>
                    <Text style={styles.textRegister}>Daftar</Text>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.imgContainer}>
                        <View style={styles.centering}>
                            {
                                images == null ?
                                    <Icon name='user-circle' size={normalize(100)} color="#fff" /> : ""
                            }
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container3}>
                        <Text style={styles.textRegister2}>NAMA LENGKAP</Text>
                        <View style={styles.inputRegister}>
                            <TextInput placeholder='Ketik disini' />
                        </View>
                        <Text style={styles.textRegister2}>NO. HANDPHONE</Text>
                        <View style={styles.inputRegister}>
                            <TextInput placeholder='Ketik disini' keyboardType='number-pad' maxLength={13} />
                        </View>
                        <View style={{ marginBottom: normalize(10) }}>
                            <Text style={styles.textRegister2}>JENIS KELAMIN</Text>
                            <View>
                                <View style={styles.row}>
                                    <TouchableOpacity onPress={() => setJk("L")} style={styles.dot1}>
                                        <View style={jk == 'L' ? styles.dotActive : {}}>

                                        </View>
                                    </TouchableOpacity>
                                    <Text style={styles.textDot}>Laki-laki</Text>
                                </View>

                                <View style={styles.row}>
                                    <TouchableOpacity onPress={() => setJk("P")} style={styles.dot1}>
                                        <View style={jk == 'P' ? styles.dotActive : {}}>

                                        </View>
                                    </TouchableOpacity>
                                    <Text style={styles.textDot}>Perempuan</Text>
                                </View>

                            </View>
                        </View>
                        <Text style={styles.textRegister2}>ALAMAT</Text>
                        <View style={styles.inputRegister2}>
                            <TextInput multiline placeholder='Ketik disini' />
                        </View>
                        <Text>
                            Dengan mengklik daftar, anda menyetujui
                            <Text style={{ color: "#0d99bd" }}> Ketentuan, Kebijakan Data, dan Kebijakan Cookie kami.</Text>
                            Anda akan menerima Notifikasi SMS dari SDK dan dapat menolaknya kapan saja.
                        </Text>
                        <TouchableOpacity onPress={()=>navigation.push("Login")}>
                            <View style={styles.buttonRegister}>
                                <Text style={styles.textRegister}>Daftar</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={{textAlign:"center", marginTop:normalize(10)}}>Daftar untuk menggunakan aplikasi</Text>
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
    centering: {
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        height: normalize(100),
        backgroundColor: "#e38bb1",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    dot1: {
        width: normalize(20),
        height: normalize(20),
        borderRadius: 20,
        backgroundColor: "#dfdfdf",
        marginTop: normalize(10),
        alignItems: "center",
        justifyContent: "center"
    },
    dotActive: {
        width: normalize(15),
        height: normalize(15),
        borderRadius: 15,
        backgroundColor: "#0d99bd",
    },
    imgSize: {
        width: normalize(150),
        height: normalize(150)
    },
    imgContainer: {
        width: normalize(100),
        height: normalize(100),
        borderRadius: 100,
        backgroundColor: "#dfdfdf",
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: normalize(-30),
        paddingHorizontal: normalize(45)
    },
    container2: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: normalize(10)
    },
    container3: {
        marginTop: normalize(20)
    },
    inputRegister: {
        width: normalize(300),
        height: normalize(40),
        backgroundColor: "#dfdfdf",
        borderRadius: 10,
        justifyContent: "center",
        paddingLeft: normalize(10),
        marginTop: normalize(5),
        marginBottom: normalize(10)
    },
    inputRegister2: {
        width: normalize(300),
        height: normalize(100),
        backgroundColor: "#dfdfdf",
        borderRadius: 10,
        paddingLeft: normalize(10),
        marginTop: normalize(5),
        marginBottom: normalize(10)
    },
    textRegister: {
        color: "black",
        fontWeight: "bold",
        fontSize: normalize(20)
    },
    textRegister2: {
        color: "black",
        fontSize: normalize(16)
    },
    textDot: {
        marginTop: normalize(10),
        marginLeft: normalize(10)
    },
    buttonRegister: {
        width: normalize(300),
        height: normalize(40),
        backgroundColor: "#e38bb1",
        borderRadius: 10,
        justifyContent: "center",
        marginTop: normalize(10),
        alignItems: "center"
    },
})

export default Register