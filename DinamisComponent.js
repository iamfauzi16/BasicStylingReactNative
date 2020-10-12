import React from 'react';
import  {View, Text, Image} from 'react-native';
import macbook from './macbook.jpg';
const DinamisComponent = () => {
    return (
      <View style={{padding: 12, backgroundColor: '#f2f2f2' , width: 212, borderRadius: 8 , marginTop: 20}}>
      <Image source={macbook} style={{width: 188, height: 107, borderRadius: 8}}></Image>
      <Text style={{
        fontSize: 18, 
        fontWeight: 'bold', 
        marginTop: 12}}> Macbook Pro 2020</Text>
        
      <Text style={{
        fontSize: 24, 
        marginTop: 14, 
        color: 'orange'}}> Rp. 25.000.000</Text>
  
      <Text style={{
        fontSize: 14, 
        marginTop: 5, 
        fontWeight: '300'}}> Jakarta Timur</Text>
      <View style={{backgroundColor: '#3ae374', borderRadius: 15, paddingVertical: 6, marginTop: 10}}>
        <Text style={{
          fontSize: 20,
          fontWeight: '500',
          color: 'white',
          textAlign: 'center'
        }}>BELI</Text>
      </View>
    </View>
    )
  }

export default DinamisComponent;