import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFA from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Home from '../pages/Home';
import normalize from 'react-native-normalize';

const Tab = createBottomTabNavigator();

export function BottomTabs({active, setActive}) {
    const [login, setLogin] = useState(false)
    // const getSession = () => {
    //     AsyncStorage.getItem("loginSession").then(
    //         res => {
    //             if(res == null){
    //                 setLogin(false)
    //             } else {
    //                 setLogin(true)
    //             }
    //         }
    //     )
    // }

    useEffect(()=>{
        // getSession()
    },[])
    return (
        <Tab.Navigator  screenOptions={{ headerShown: false, tabBarInactiveTintColor:"grey", tabBarActiveTintColor:"grey" }}>
            <Tab.Screen  name="Home" component={Home} options={{ tabBarLabel: "Home", tabBarIcon: ({focused}) => (<Icon name="home" size={normalize(25)} color={focused ? "grey" : "gray"} />)}}/>
            <Tab.Screen name="Chat" component={Home} options={{ tabBarLabel: "Chat", tabBarIcon: ({focused}) => (<Icon name="comment-dots"  size={normalize(25)} color={focused ? "grey" : "gray"} />)}} />
            <Tab.Screen name="Transaction" component={Home} options={{ tabBarLabel: "Transaksi", tabBarIcon: ({focused}) => (<Icon name="bookmark"  size={normalize(25)} color={focused ? "grey" : "gray"}/>)}}/>
            <Tab.Screen name="Profil" component={Home} options={{ tabBarLabel: "Profil", tabBarIcon: ({focused}) => (<Icon name="user"  size={normalize(25)} color={focused ? "grey" : "gray"}/>)}}/>
        </Tab.Navigator>
    );
}