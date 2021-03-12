import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Slider from '@react-native-community/slider';

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function App(){

  const [ password , setPassword ] = useState('');
  const [ sizeSlider, setSizeSlider ] = useState(5)

  function generatePass(){
    let pass ="";;

    for( let i = 0, n = charset.length; i < sizeSlider; i++){
      pass += charset.charAt(Math.floor(Math.random() * n))
    }

    setPassword(pass);
  }

  return(
    <View style={styles.container}>
      <Image
        source={require('./src/assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>{sizeSlider} Caracteres </Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50}}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#ffa200"
          maximumTrackTintColor="#000"
          value={sizeSlider}
          onValueChange={(value) => setSizeSlider(value.toFixed(0))}
          
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePass}>
        <Text style={styles.buttonText} >Gerar Senha</Text>
      </TouchableOpacity>

      {password !== '' && (
        <View style={styles.area}>
          <Text style={styles.password}>{password}</Text>
        </View>
      )}
      
    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3ff'
  },
  logo:{
    marginBottom: 60,
  },

  title:{
    fontSize: 30,
    fontWeight: 'bold'
  },

  area:{
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 7,
  },

  button:{
    backgroundColor: '#ffa200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 25
  },

  buttonText:{
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },

  password:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20
  }
});