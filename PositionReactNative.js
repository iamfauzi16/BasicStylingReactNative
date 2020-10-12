// TODO Belajar Position pada react native [v]
// TODO membuat notifikasi didalam Icon [v]
// TODO merapihkan styling menggunakan StyleSheet [v]
// TODO Installasi Extension es7 [v]

import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import shopping from './shopping.png';
const PositionReactNative = () => {
    return (
        <View style={styles.bungkus}>
            <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>Materi Position</Text>
            <View style={styles.cartWrapper}>
            <Image source={shopping} style={styles.iconStyle}></Image>
            <Text style={styles.pesan}>10</Text>
            </View>
            <Text style={styles.tulisan}>Keranjang belanja anda</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bungkus: {
        padding: 20,
        alignItems: 'center',
    },
    cartWrapper: {
        borderWidth: 1,
        width: 93,
        height: 93,
        borderColor: '#6c5ce7',
        borderRadius: 93/2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'

    },

    iconStyle: {
        width: 64,
        height: 64
    },

    tulisan: {
        fontSize: 20,
        color: '#777777',
        marginTop: 20,
    },
    
    pesan: {
        width: 25,
        height: 25,
        backgroundColor: '#00b894',
        borderRadius: 50,
        position: 'absolute',
        padding: 4,
        top: 0,
        right: 0
    }
})

export default PositionReactNative;
