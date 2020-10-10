// TODO : Membuat Text, View, InputText, Image [v]
// TODO : Belajar Function component dan class component[v]
//  TODO : Mengenal text,view,input text, image[v]
//  TODO : Membuat Class Component [v]
// TODO : Membuat Basic Styling [v]

import React, { Component } from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import macbook from './macbook.jpg';

//! ini adalah function component menggunakan function atau arrow function ()=>
const App = () => {
  return (
   <DinamisComponent />
  )
};

// Basic Styling

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.Text}>Styling React Native</Text>
      <View style={{
        // styling Object
        width: 100, 
        height: 100, 
        backgroundColor: '#0abde3', 
        borderWidth: 2,
        borderColor: '#5f27cd',
        marginTop: 20,
        marginLeft: 20}}>

        </View>

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
    </View>

   
  );
};

// Dinamis Component
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

// styling with Stylesheet
const styles = StyleSheet.create({
  Text: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'orange',
    marginTop: 40,
    marginLeft: 20
  }
  
})
// Master
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

export default App;