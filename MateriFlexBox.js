// TODO Belajar tata letak pada react native menggunakan flexbox [v]
//  TODO Mengenal Fungsi FlexDirection > column, row,  colum-reserve, row-reserve
//  TODO Mengenal AlignItems [v]
//  Mengejal JustifyContent [v]


import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';


class MateriFlexBox extends Component {
    render () {
        return (
            <View>
                {/* Menu Bar */}
                <View style={{
                flexDirection: 'column', 
                alignItems: 'center',
                paddingVertical: 10, 
                marginTop: 20, 
                borderBottomWidth: 1,
                borderColor: '#b2bec3'}}>
                    {/* Font Text */}
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Profil</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={{uri: 'https://avatars3.githubusercontent.com/u/53123172?s=460&u=8362fccf74139293abe86a8caec3fbed60815d99&v=4'}}
                        style={{width: 100, height: 100, borderRadius: 50, marginTop: 20}}
                    ></Image>
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 10}}>Muhammad Fauzi</Text>     
                        <Text style={{fontWeight: '300', fontSize: 15}}>yes, iam ready</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
                    <Text>Post</Text>
                    <Text>Follower</Text>
                    <Text>Following</Text>
                </View>
            </View>
        )
    }
}




export default MateriFlexBox;