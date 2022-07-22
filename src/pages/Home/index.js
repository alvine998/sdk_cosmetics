import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import normalize from 'react-native-normalize'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { logo_2 } from '../../assets'

const Home = ({ navigation }) => {
    const dataProducts = [
        {
            id: 1,
            city: 'Bekasi Kota',
            price: 'Rp. 0',
            discount: '100%',
            sell_price: 'Rp. 20.000',
            image: ''
        },
        {
            id: 2,
            city: 'Bekasi Kota',
            price: 'Rp. 20.000',
            discount: '50%',
            sell_price: 'Rp. 20.000',
            image: ''
        },
        {
            id: 3,
            city: 'Jakarta Timur',
            price: 'Rp. 125.000',
            discount: '20%',
            sell_price: 'Rp. 150.000',
            image: ''
        },
        {
            id: 4,
            city: 'Jakarta Utara',
            price: 'Rp. 30.000',
            discount: '70%',
            sell_price: 'Rp. 100.000',
            image: ''
        },
    ]
    return (
        <>
            <View style={styles.background}>
                <ScrollView>
                    <View style={styles.header}>
                        <View style={styles.searchBar}>
                            <Icon name='search' color={"#f3d3de"} size={normalize(20)} />
                            <TextInput placeholder='Cari' style={styles.searchInput} placeholderTextColor={"#f3d3de"} />
                        </View>
                        <View style={styles.rightHeader}>
                            <TouchableOpacity>
                                <Icon name='bell' color={"#fff"} size={normalize(25)} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: normalize(20) }}>
                                <Icon name='shopping-cart' color={"#fff"} size={normalize(25)} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: normalize(20) }}>
                                <Icon name='heart' color={"#fff"} size={normalize(25)} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.centering}>
                        <Image source={logo_2} style={styles.imgSize} />
                    </View>

                    <View style={styles.body}>
                        <Text style={styles.textSub}>Kategori</Text>
                        <View style={styles.categoryBody}>
                            <TouchableOpacity style={{ alignItems: "center" }}>
                                <Icon name='square' color={"#f3d3de"} size={normalize(30)} />
                                <Text>Skincare</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignItems: "center" }}>
                                <Icon name='square' color={"#f3d3de"} size={normalize(30)} />
                                <Text>Makeup</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignItems: "center" }}>
                                <Icon name='wine-bottle' color={"#f3d3de"} size={normalize(30)} />
                                <Text>Parfum</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignItems: "center" }}>
                                <Icon name='capsules' color={"#f3d3de"} size={normalize(30)} />
                                <Text>Suplemen</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignItems: "center" }}>
                                <Icon name='th' color={"#f3d3de"} size={normalize(30)} />
                                <Text>Lainnya</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.center}>
                            <View style={styles.banner}>

                            </View>
                            <TouchableOpacity style={styles.btnClick}>
                                <Text style={styles.textBtn}>Klik</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.promo}>
                                <Text style={styles.textPromo}>Promo</Text>
                            </View>
                            <TouchableOpacity style={{ marginLeft: 'auto', marginTop: normalize(35) }}>
                                <Text style={styles.textOther}>Lihat semua</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.body2}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {
                                dataProducts.map((value, index) =>
                                    <TouchableOpacity key={index} style={[value.id == 1 ? styles.card : styles.card, { marginLeft: normalize(10) }]}>
                                        <View style={styles.imgProduct}>

                                        </View>
                                        <View style={styles.bodyCard}>
                                            <Text style={styles.textPrice}>{value.price}</Text>
                                            <View style={styles.row}>
                                                <View style={styles.discount}>
                                                    <Text style={styles.textDiscount}>{value.discount}</Text>
                                                </View>
                                                <View>
                                                    <Text style={styles.textSell}>{value.sell_price}</Text>
                                                </View>
                                            </View>
                                            <View style={[styles.row, { marginTop: normalize(10) }]}>
                                                <Icon name='shopping-bag' color={"#0d99bd"} size={normalize(20)} />
                                                <Text style={styles.textCity}>{value.city}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#f3d3de",
        height: '100%'
    },
    searchBar: {
        width: normalize(220),
        height: normalize(40),
        backgroundColor: "white",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: normalize(20)
    },
    searchInput: {
        marginLeft: normalize(10),
        color: "#f3d3de",
        width: normalize(200)
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: normalize(10)
    },
    rightHeader: {
        marginLeft: 'auto',
        flexDirection: "row",
        marginRight: normalize(15)
    },
    centering: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: normalize(40)
    },
    imgSize: {
        width: normalize(200),
        height: normalize(200)
    },
    body: {
        height: normalize(380),
        padding: normalize(20),
        backgroundColor: "white",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    textSub: {
        color: "black",
        fontSize: normalize(18),
        marginTop: normalize(10),
        fontWeight: "bold"
    },
    categoryBody: {
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: normalize(20),
        flexDirection: "row",
    },
    banner: {
        width: normalize(350),
        height: normalize(150),
        backgroundColor: "#f3d3de",
        borderRadius: 20,
        marginTop: normalize(20)
    },
    center: {
        alignItems: "center",
        justifyContent: "center"
    },
    btnClick: {
        width: normalize(100),
        height: normalize(40),
        backgroundColor: "#a82075",
        marginLeft: 'auto',
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginRight: normalize(10),
        marginTop: normalize(-20)
    },
    textBtn: {
        color: "white",
        fontSize: normalize(18),
        fontWeight: "bold"
    },
    textPromo: {
        color: "white",
        fontSize: normalize(20),
        fontWeight: "bold"
    },
    row: {
        alignItems: "center",
        flexDirection: "row"
    },
    promo: {
        width: normalize(100),
        height: normalize(40),
        backgroundColor: "#0d99bd",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: normalize(30),
        marginRight: 'auto'
    },
    textOther: {
        color: "#0d99bd",
        fontSize: normalize(16),
        fontWeight: "bold"
    },
    card: {
        height: normalize(250),
        width: normalize(150),
        backgroundColor: "#fff",
        borderRadius: 10
    },
    body2: {
        marginTop: normalize(20),
        paddingHorizontal: normalize(20),
        marginBottom: normalize(20)
    },
    imgProduct: {
        height: normalize(130),
        backgroundColor: "#dfdfdf",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    bodyCard: {
        padding: normalize(10)
    },
    textPrice: {
        color: "black",
        fontWeight: "bold",
        fontSize: normalize(18)
    },
    textDiscount: {
        color: "red",
        fontWeight: "bold",
        fontSize: normalize(14)
    },
    textSell: {
        fontSize: normalize(12),
        textDecorationLine: "line-through",
        textDecorationStyle: "solid",
        marginTop: normalize(10),
        marginLeft: normalize(10)
    },
    textCity: {
        fontSize: normalize(14),
        marginLeft: normalize(10)
    },
    discount: {
        width: normalize(40),
        height: normalize(25),
        backgroundColor: "#f3d3de",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: normalize(10)
    }
})

export default Home