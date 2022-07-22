import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import normalize from 'react-native-normalize'
import Icon from 'react-native-vector-icons/FontAwesome5'
import IconFA from 'react-native-vector-icons/FontAwesome'

import { logo_2 } from '../../assets'

const Home = ({ navigation }) => {
    const dataProducts = [
        {
            id: 1,
            city: 'Bekasi Kota',
            price: 'Rp. 0',
            discount: '100%',
            sell_price: 'Rp. 20.000',
            image: '',
            name: 'Lorem ipsum dolor nores',
            rating: '5.0',
            sold: '500+'
        },
        {
            id: 2,
            city: 'Bekasi Kota',
            price: 'Rp. 20.000',
            discount: '50%',
            sell_price: 'Rp. 20.000',
            image: '',
            name: 'Lorem ipsum dolor nores',
            rating: '5.0',
            sold: '500+'
        },
        {
            id: 3,
            city: 'Jakarta Timur',
            price: 'Rp. 125.000',
            discount: '20%',
            sell_price: 'Rp. 150.000',
            image: '',
            name: 'Lorem ipsum dolor nores',
            rating: '5.0',
            sold: '500+'
        },
        {
            id: 4,
            city: 'Jakarta Utara',
            price: 'Rp. 30.000',
            discount: '70%',
            sell_price: 'Rp. 100.000',
            image: '',
            name: 'Lorem ipsum dolor nores',
            rating: '5.0',
            sold: '500+'
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
                        <Text style={[styles.textSub, { marginTop: normalize(10) }]}>Kategori</Text>
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
                        <View style={styles.rowEnd}>
                            <View style={styles.promo}>
                                <Text style={styles.textPromo}>Promo</Text>
                            </View>
                            <TouchableOpacity style={{ marginLeft: 'auto' }}>
                                <Text style={styles.textOther}>Lihat semua</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.body2}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {
                                dataProducts.map((value, index) =>
                                    <TouchableOpacity key={index} style={[value.id == 1 ? styles.card : styles.card2]}>
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
                    <View style={styles.specialBody}>
                        <View>
                            <Text style={styles.textSub}>Spesial</Text>
                            <View style={[styles.row, { marginTop: normalize(10) }]}>
                                <TouchableOpacity style={styles.specialBox1}>

                                </TouchableOpacity>
                                <View>
                                    <TouchableOpacity style={styles.specialBox2}>

                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.specialBox3}>

                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: normalize(20) }}>
                            <View style={styles.rowEnd}>
                                <Text style={styles.textSub}>Eksklusif</Text>
                                <TouchableOpacity style={{ marginLeft: 'auto' }}>
                                    <Text style={styles.textOther}>Lihat semua</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.row, { marginTop: normalize(10) }]}>
                                <TouchableOpacity style={styles.exclusiveBox1}>

                                </TouchableOpacity>
                                <View>
                                    <TouchableOpacity style={styles.exclusiveBox2}>

                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.exclusiveBox3}>

                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.exclusiveBox2}>

                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.exclusiveBox3}>

                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: normalize(20) }}>
                            <View style={styles.rowEnd}>
                                <Text style={styles.textSub}>Skincare</Text>
                                <TouchableOpacity style={{ marginLeft: 'auto' }}>
                                    <Text style={styles.textOther}>Lihat semua</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.rowWrap, { marginTop: normalize(10) }]}>
                                {
                                    dataProducts.map((value, index) =>
                                        <TouchableOpacity key={index} style={styles.card3}>
                                            <View style={styles.imgProduct}>

                                            </View>
                                            <View style={styles.bodyCard}>
                                                <Text style={styles.textName}>{value.name}</Text>
                                                <Text style={[styles.textPrice, { marginTop: normalize(10) }]}>{value.price}</Text>
                                                <View style={{ marginTop: normalize(10) }}>
                                                    <Text style={styles.textCity2}>{value.city}</Text>
                                                </View>
                                                <View style={[styles.row, { marginTop: normalize(10) }]}>
                                                    <IconFA name='star' color={"black"} style={{ paddingRight: normalize(5) }} />
                                                    <Text style={styles.textCity2}>{value.rating} | Terjual {value.sold}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </View>

                        <View style={{ marginTop: normalize(20) }}>
                            <View style={styles.rowEnd}>
                                <Text style={styles.textSub}>Makeup</Text>
                                <TouchableOpacity style={{ marginLeft: 'auto' }}>
                                    <Text style={styles.textOther}>Lihat semua</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.rowWrap, { marginTop: normalize(10) }]}>
                                {
                                    dataProducts.slice(0,2).map((value, index) =>
                                        <TouchableOpacity key={index} style={styles.card3}>
                                            <View style={styles.imgProduct}>

                                            </View>
                                            <View style={styles.bodyCard}>
                                                <Text style={styles.textName}>{value.name}</Text>
                                                <Text style={[styles.textPrice, { marginTop: normalize(10) }]}>{value.price}</Text>
                                                <View style={{ marginTop: normalize(10) }}>
                                                    <Text style={styles.textCity2}>{value.city}</Text>
                                                </View>
                                                <View style={[styles.row, { marginTop: normalize(10) }]}>
                                                    <IconFA name='star' color={"black"} style={{ paddingRight: normalize(5) }} />
                                                    <Text style={styles.textCity2}>{value.rating} | Terjual {value.sold}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </View>

                        <View style={{ marginTop: normalize(20) }}>
                            <View style={styles.rowEnd}>
                                <Text style={styles.textSub}>Perawatan Rambut Pria</Text>
                                <TouchableOpacity style={{ marginLeft: 'auto' }}>
                                    <Text style={styles.textOther}>Lihat semua</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.rowWrap, { marginTop: normalize(10) }]}>
                                {
                                    dataProducts.slice(0,2).map((value, index) =>
                                        <TouchableOpacity key={index} style={styles.card3}>
                                            <View style={styles.imgProduct}>

                                            </View>
                                            <View style={styles.bodyCard}>
                                                <Text style={styles.textName}>{value.name}</Text>
                                                <Text style={[styles.textPrice, { marginTop: normalize(10) }]}>{value.price}</Text>
                                                <View style={{ marginTop: normalize(10) }}>
                                                    <Text style={styles.textCity2}>{value.city}</Text>
                                                </View>
                                                <View style={[styles.row, { marginTop: normalize(10) }]}>
                                                    <IconFA name='star' color={"black"} style={{ paddingRight: normalize(5) }} />
                                                    <Text style={styles.textCity2}>{value.rating} | Terjual {value.sold}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "#e38bb1" }}>
                        <View style={[styles.body2, {}]}>
                            <View style={styles.rowEnd}>
                                <Text style={styles.textSub2}>Perawatan Rambut Wanita</Text>
                                <TouchableOpacity style={{ marginLeft: 'auto' }}>
                                    <Text style={styles.textOther2}>Lihat semua</Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {
                                    dataProducts.map((value, index) =>
                                        <TouchableOpacity key={index} style={value?.id == 1 ? styles.card4 : styles.card5}>
                                            <View style={styles.imgProduct}>

                                            </View>
                                            <View style={styles.bodyCard}>
                                                <Text style={styles.textName}>{value.name}</Text>
                                                <Text style={[styles.textPrice, { marginTop: normalize(10) }]}>{value.price}</Text>
                                                <View style={{ marginTop: normalize(10) }}>
                                                    <Text style={styles.textCity2}>{value.city}</Text>
                                                </View>
                                                <View style={[styles.row, { marginTop: normalize(10) }]}>
                                                    <IconFA name='star' color={"black"} style={{ paddingRight: normalize(5) }} />
                                                    <Text style={styles.textCity2}>{value.rating} | Terjual {value.sold}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.otherBody}>
                        <View>
                            <View style={styles.rowEnd}>
                                <Text style={styles.textSub}>Parfum</Text>
                                <TouchableOpacity style={{ marginLeft: 'auto' }}>
                                    <Text style={styles.textOther}>Lihat semua</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.rowWrap, { marginTop: normalize(10) }]}>
                                {
                                    dataProducts.slice(0,2).map((value, index) =>
                                        <TouchableOpacity key={index} style={styles.card3}>
                                            <View style={styles.imgProduct}>

                                            </View>
                                            <View style={styles.bodyCard}>
                                                <Text style={styles.textName}>{value.name}</Text>
                                                <Text style={[styles.textPrice, { marginTop: normalize(10) }]}>{value.price}</Text>
                                                <View style={{ marginTop: normalize(10) }}>
                                                    <Text style={styles.textCity2}>{value.city}</Text>
                                                </View>
                                                <View style={[styles.row, { marginTop: normalize(10) }]}>
                                                    <IconFA name='star' color={"black"} style={{ paddingRight: normalize(5) }} />
                                                    <Text style={styles.textCity2}>{value.rating} | Terjual {value.sold}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </View>

                        <View style={{marginTop:normalize(20)}}>
                            <View style={styles.rowEnd}>
                                <Text style={styles.textSub}>Perawatan Tubuh</Text>
                                <TouchableOpacity style={{ marginLeft: 'auto' }}>
                                    <Text style={styles.textOther}>Lihat semua</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.rowWrap, { marginTop: normalize(10) }]}>
                                {
                                    dataProducts.slice(0,2).map((value, index) =>
                                        <TouchableOpacity key={index} style={styles.card3}>
                                            <View style={styles.imgProduct}>

                                            </View>
                                            <View style={styles.bodyCard}>
                                                <Text style={styles.textName}>{value.name}</Text>
                                                <Text style={[styles.textPrice, { marginTop: normalize(10) }]}>{value.price}</Text>
                                                <View style={{ marginTop: normalize(10) }}>
                                                    <Text style={styles.textCity2}>{value.city}</Text>
                                                </View>
                                                <View style={[styles.row, { marginTop: normalize(10) }]}>
                                                    <IconFA name='star' color={"black"} style={{ paddingRight: normalize(5) }} />
                                                    <Text style={styles.textCity2}>{value.rating} | Terjual {value.sold}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </View>

                        <View style={{marginTop:normalize(20)}}>
                            <View style={styles.rowEnd}>
                                <Text style={styles.textSub}>Suplemen</Text>
                                <TouchableOpacity style={{ marginLeft: 'auto' }}>
                                    <Text style={styles.textOther}>Lihat semua</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.rowWrap, { marginTop: normalize(10) }]}>
                                {
                                    dataProducts.slice(0,2).map((value, index) =>
                                        <TouchableOpacity key={index} style={styles.card3}>
                                            <View style={styles.imgProduct}>

                                            </View>
                                            <View style={styles.bodyCard}>
                                                <Text style={styles.textName}>{value.name}</Text>
                                                <Text style={[styles.textPrice, { marginTop: normalize(10) }]}>{value.price}</Text>
                                                <View style={{ marginTop: normalize(10) }}>
                                                    <Text style={styles.textCity2}>{value.city}</Text>
                                                </View>
                                                <View style={[styles.row, { marginTop: normalize(10) }]}>
                                                    <IconFA name='star' color={"black"} style={{ paddingRight: normalize(5) }} />
                                                    <Text style={styles.textCity2}>{value.rating} | Terjual {value.sold}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </View>

                        <View style={{marginTop:normalize(20)}}>
                            <View style={styles.rowEnd}>
                                <Text style={styles.textSub}>Perawatan Mulut</Text>
                                <TouchableOpacity style={{ marginLeft: 'auto' }}>
                                    <Text style={styles.textOther}>Lihat semua</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.rowWrap, { marginTop: normalize(10) }]}>
                                {
                                    dataProducts.slice(0,2).map((value, index) =>
                                        <TouchableOpacity key={index} style={styles.card3}>
                                            <View style={styles.imgProduct}>

                                            </View>
                                            <View style={styles.bodyCard}>
                                                <Text style={styles.textName}>{value.name}</Text>
                                                <Text style={[styles.textPrice, { marginTop: normalize(10) }]}>{value.price}</Text>
                                                <View style={{ marginTop: normalize(10) }}>
                                                    <Text style={styles.textCity2}>{value.city}</Text>
                                                </View>
                                                <View style={[styles.row, { marginTop: normalize(10) }]}>
                                                    <IconFA name='star' color={"black"} style={{ paddingRight: normalize(5) }} />
                                                    <Text style={styles.textCity2}>{value.rating} | Terjual {value.sold}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </View>

                        <View style={{marginTop:normalize(20)}}>
                            <View style={styles.rowEnd}>
                                <Text style={styles.textSub}>Makanan & Minuman</Text>
                                <TouchableOpacity style={{ marginLeft: 'auto' }}>
                                    <Text style={styles.textOther}>Lihat semua</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.rowWrap, { marginTop: normalize(10) }]}>
                                {
                                    dataProducts.slice(0,2).map((value, index) =>
                                        <TouchableOpacity key={index} style={styles.card3}>
                                            <View style={styles.imgProduct}>

                                            </View>
                                            <View style={styles.bodyCard}>
                                                <Text style={styles.textName}>{value.name}</Text>
                                                <Text style={[styles.textPrice, { marginTop: normalize(10) }]}>{value.price}</Text>
                                                <View style={{ marginTop: normalize(10) }}>
                                                    <Text style={styles.textCity2}>{value.city}</Text>
                                                </View>
                                                <View style={[styles.row, { marginTop: normalize(10) }]}>
                                                    <IconFA name='star' color={"black"} style={{ paddingRight: normalize(5) }} />
                                                    <Text style={styles.textCity2}>{value.rating} | Terjual {value.sold}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </View>

                        <View style={{marginTop:normalize(20)}}>
                            <View style={styles.rowEnd}>
                                <Text style={styles.textSub}>Kebutuhan Rumah Tangga</Text>
                                <TouchableOpacity style={{ marginLeft: 'auto' }}>
                                    <Text style={styles.textOther}>Lihat semua</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.rowWrap, { marginTop: normalize(10) }]}>
                                {
                                    dataProducts.slice(0,2).map((value, index) =>
                                        <TouchableOpacity key={index} style={styles.card3}>
                                            <View style={styles.imgProduct}>

                                            </View>
                                            <View style={styles.bodyCard}>
                                                <Text style={styles.textName}>{value.name}</Text>
                                                <Text style={[styles.textPrice, { marginTop: normalize(10) }]}>{value.price}</Text>
                                                <View style={{ marginTop: normalize(10) }}>
                                                    <Text style={styles.textCity2}>{value.city}</Text>
                                                </View>
                                                <View style={[styles.row, { marginTop: normalize(10) }]}>
                                                    <IconFA name='star' color={"black"} style={{ paddingRight: normalize(5) }} />
                                                    <Text style={styles.textCity2}>{value.rating} | Terjual {value.sold}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

const dimScreen = Dimensions.get("screen")

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
        height: normalize(370),
        padding: normalize(20),
        backgroundColor: "white",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    textSub: {
        color: "gray",
        fontSize: normalize(20),
        fontWeight: "bold"
    },
    textSub2: {
        color: "white",
        fontSize: normalize(20),
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
    rowWrap: {
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    rowEnd: {
        alignItems: "flex-end",
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
    textOther2: {
        color: "#a82075",
        fontSize: normalize(16),
        fontWeight: "bold"
    },
    card: {
        height: normalize(250),
        width: normalize(150),
        backgroundColor: "#fff",
        borderRadius: 10
    },
    card2: {
        height: normalize(250),
        width: normalize(150),
        backgroundColor: "#fff",
        borderRadius: 10,
        marginLeft: normalize(10)
    },
    card3: {
        height: normalize(250),
        width: normalize(165),
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: normalize(10),
        elevation: 5
    },
    card4: {
        height: normalize(250),
        width: normalize(165),
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: normalize(20),
    },
    card5: {
        height: normalize(250),
        width: normalize(165),
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: normalize(20),
        marginLeft: normalize(10)
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
    textName: {
        color: "black",
        fontWeight: "bold",
        fontSize: normalize(16)
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
    textCity2: {
        fontSize: normalize(14)
    },
    discount: {
        width: normalize(40),
        height: normalize(25),
        backgroundColor: "#f3d3de",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: normalize(10)
    },
    specialBody: {
        height: normalize(1650),
        padding: normalize(20),
        backgroundColor: "white"
    },
    specialBox1: {
        width: normalize(170),
        height: normalize(150),
        backgroundColor: "#0d99bd"
    },
    specialBox2: {
        width: normalize(170),
        height: normalize(75),
        backgroundColor: "#129587",
        marginLeft: normalize(5)
    },
    specialBox3: {
        width: normalize(170),
        height: normalize(75),
        backgroundColor: "#129587",
        marginLeft: normalize(5),
        marginTop: normalize(5)
    },
    exclusiveBox1: {
        width: normalize(100),
        height: normalize(200),
        backgroundColor: "#0d99bd",
        marginLeft: normalize(-15)
    },
    exclusiveBox2: {
        width: normalize(140),
        height: normalize(100),
        backgroundColor: "#129587",
    },
    exclusiveBox3: {
        width: normalize(140),
        height: normalize(100),
        backgroundColor: "#f3d3de",
    },
    otherBody: {
        height: normalize(1850),
        padding: normalize(20),
        backgroundColor: "white"
    }
})

export default Home