import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ImageBackground, Image, SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {


  return (
    <ImageBackground
    resizeMode='cover'
    source={require('./assets/milanga.jpg')}
    style={{flex: 1, justifyContent: "center", alignItems: "center"}}
    >
      <View style={styles.cardYo}>
        <Image style={styles.fotoPerfil} source={require('./assets/fotoperfil.jpg')} />
        <Text style={{fontSize: 30}}>Tomás Goldberg</Text>
        <Text style={{fontSize: 15}}>Desarrollador full stack</Text>
        <TextInput value='Mensaje' keyboardType='default' />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fotoPerfil: {
    borderRadius: 9999999,
    width: 150,
    height: 150
  },
  cardYo: {
    backgroundColor: "white",
   borderRadius: 20,
    width: "80%",
    height: "50%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  }
});
