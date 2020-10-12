import React from 'react';
import { Text, View, Image, TextInput, StyleSheet} from 'react-native';


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

      </View>
  
     
    );
  };


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
  export default StylingReactNativeComponent;