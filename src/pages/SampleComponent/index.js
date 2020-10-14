import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';


const SampleComponent = () => {
    return (
      <View style={{margin: 10}}>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}}></View>
      <Text style={{fontSize: 20,}}>Hallo</Text>
      <HaiHai />
      <Gambar />
      <TextInput style={{borderWidth: 1, marginTop: 10}}></TextInput>
      <BoxGreen />
      <Profile />
    </View>
    )
   
  }
  
  //! ini adalah function component menggunakan function atau arrow function ()=>
  const HaiHai = () => {
    return <Text>Muhammad Fauzi</Text>;
  };
  
  //! ini adalah function component menggunakan function atau arrow function ()=>
  const Gambar = () => {
    return <Image source={{uri : 'https://placeimg.com/100/100/people' }}
    style={{width: 100, height: 100}}
    ></Image>
  };
  
  
  //! class Component
  class BoxGreen extends Component{
    render() {
      return <Text>dibawah ini kucing nakalku</Text>;
    }
  };
  
  //! class Component
  class Profile extends Component{
    render() {
      return(
        <View>
          <Image source={{ uri: 'https://placeimg.com/100/100/animals'}} style={{width: 100, height: 100, borderRadius: 50}}></Image>
          <Text style={{ fontSize:24, fontWeight: 'bold' }}>Ayam Goreng</Text>
          <Text style={{ fontSize:15, fontWeight: '500' }}>Aku Kucing Nakal</Text>
        </View>
      )
    }
  }

  export default SampleComponent;