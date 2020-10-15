// TODO Belajar tata letak pada react native menggunakan flexbox [v]
//  TODO Mengenal Fungsi FlexDirection > column, row,  colum-reserve, row-reserve
//  TODO Mengenal AlignItems [v]
//  Mengejal JustifyContent [v]


import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';


class FlexBox extends Component {
    constructor(props) {
        super(props);
        console.log('==> constructor')
        this.state = {
            subscriber: 200,
        };
    }

    componentDidMount() {
        console.log('==> componentDidMount')
        setTimeout(() => {
            this.setState({
                subscriber: 670,
    
            });

        }, 2000);
    }

    componentDidUpdate() {
        console.log('==> componentDidUpdate')
    }

    render () {
        console.log('==> Render')
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
                    <View>
                        <Text style={styles.header}>Post</Text>
                        <Text style={styles.paragraf}>{this.state.subscriber}</Text>
                    </View>

                    <View>
                        <Text style={styles.header}>Follower</Text>
                        <Text style={styles.paragraf}>32k</Text>
                    </View>

                    <View>
                        <Text style={styles.header}>Following</Text>
                        <Text style={styles.paragraf}>2k</Text>
                    </View>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: 'bold',
    
    },

    paragraf: {
        fontSize: 15
    }
})



export default FlexBox;