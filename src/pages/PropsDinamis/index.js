import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'

const Story= (props) => {
    return (
        <View style={{
            alignItems: 'center', 
            marginRight: 20}}>

            <Image source={{
                uri: props.gambar,}}

                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 70/2,
                }}></Image>

                <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
        </View>
        
        
    )
}


const PropsDinamis = () => {
    return (
        <View>
            <Text>Hallo React Native </Text>
            <ScrollView horizontal>
            <View style={{flexDirection: 'row'}}>
                <Story 
                judul="Kumpulan Hamka" 
                gambar="https://instagram.fcgk18-2.fna.fbcdn.net/v/t51.2885-15/s150x150/102422708_688397608371526_3389069547487136553_n.jpg?_nc_ht=instagram.fcgk18-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=cd7wQZSop0MAX9X0DFn&oh=9c36fb5df399a74dbb460e8e95eeb2fc&oe=5FB0ACEA"/>

                <Story 
                judul="Buku lain" 
                gambar="https://instagram.fcgk18-1.fna.fbcdn.net/v/t51.2885-15/s150x150/101979411_107577270899089_7854416054945377622_n.jpg?_nc_ht=instagram.fcgk18-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=ZQyYjG7jzKsAX8pZKLs&oh=b68fec5679e7511667aa126f29292f64&oe=5FB23AAE"/>

                <Story 
                judul="Kata Mereka" 
                gambar="https://instagram.fcgk18-2.fna.fbcdn.net/v/t51.2885-15/s150x150/120370056_1080084129116604_6517569025800433328_n.jpg?_nc_ht=instagram.fcgk18-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=KPqwEok1GaIAX9fBImM&oh=e9c4555037a11ad4b795e9d58b531fa9&oe=5FB1572B"/>
                
                <Story 
                judul="Muslimah Buku" 
                gambar="https://instagram.fcgk18-1.fna.fbcdn.net/v/t51.2885-15/s150x150/102565655_204854743892120_3099733137140499119_n.jpg?_nc_ht=instagram.fcgk18-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=NZtFylbuZH0AX9dHFBY&oh=74e90ceb3703ee4f0d28a732d313d421&oe=5FB2FE61"/>
                
                <Story 
                judul="Promo" 
                gambar="https://instagram.fcgk18-1.fna.fbcdn.net/v/t51.2885-15/s150x150/106203551_196016125140671_780947538259091422_n.jpg?_nc_ht=instagram.fcgk18-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=78J0wuhDRz0AX_l8rv-&oh=1f26b2f7c00d6de0d306113df40c89ba&oe=5FB207A7" />
            </View>
            </ScrollView>
        </View>
    )
} 

export default PropsDinamis;

const styles = StyleSheet.create({})
 