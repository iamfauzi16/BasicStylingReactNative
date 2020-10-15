// TODO : Membuat Text, View, InputText, Image [v]
// TODO : Belajar Function component dan class component[v]
//  TODO : Mengenal text,view,input text, image[v]
//  TODO : Membuat Class Component [v]
// TODO : Membuat Basic Styling [v]
//  TODO : Mengenal Export dan import [v] 
// TODO : Merapihkan code/ mempersingkat [v]

import React from 'react';
import { View, ScrollView } from 'react-native';
import SampleComponent from './pages/SampleComponent';
import Position from './pages/Position';
import FlexBox from './pages/FlexBox';
import DinamisComponent from './pages/DinamisComponent';
import Styling from './pages/Styling';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';


//! ini adalah function component menggunakan function atau arrow function ()=>
const App = () => { 
  return (
    <View>
      <ScrollView>
        {/* <Position /> */}
        {/* <FlexBox /> */}
        {/* <DinamisComponent />
        <Styling />
        <SampleComponent /> */}
        {/* <PropsDinamis /> */}
        <StateDinamis />
      </ScrollView>
    </View>

  )
};

// Basic Styling
// Dinamis Component


export default App;