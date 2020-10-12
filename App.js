// TODO : Membuat Text, View, InputText, Image [v]
// TODO : Belajar Function component dan class component[v]
//  TODO : Mengenal text,view,input text, image[v]
//  TODO : Membuat Class Component [v]
// TODO : Membuat Basic Styling [v]
//  TODO : Mengenal Export dan import [v] 
// TODO : Merapihkan code/ mempersingkat [v]

import React from 'react';
import { View, ScrollView } from 'react-native';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNative';
import DinamisComponent from './DinamisComponent';
import MateriFlexBox from './MateriFlexBox';
import PositionReactNative from './PositionReactNative';

//! ini adalah function component menggunakan function atau arrow function ()=>
const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <PositionReactNative /> */}
        <MateriFlexBox />
        {/* <DinamisComponent />
        <StylingReactNativeComponent />
        <SampleComponent /> */}
      </ScrollView>
    </View>

  )
};

// Basic Styling
// Dinamis Component


export default App;