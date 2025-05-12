import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ImageBackground, Image, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';

export default function App() {
  const [textoInput, setTextoInput] = useState("");
  const contactar=()=>{
    alert(textoInput);
  }
  return (
    <ImageBackground
    resizeMode='cover'
    source={require('./assets/milanga.jpg')}
    style={{flex: 1, justifyContent: "center", alignItems: "center"}}
    >
      <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <View style={styles.cardYo}>
          <Image style={styles.fotoPerfil} source={require('./assets/fotoperfil.jpg')} />
          <Text style={{fontSize: 30, margin: 10, marginBottom: 0}}>Tomás Goldberg</Text>
          <Text style={{fontSize: 15, margin: 1}}>Desarrollador full stack</Text> 
          <TextInput style={styles.input} keyboardType='default' onChangeText={(e) => setTextoInput(e)} />
          <TouchableOpacity style={styles.boton} onPress={contactar}>
            <Text>Contactar</Text>
          </TouchableOpacity>
          <Pressable style={({ pressed }) => (pressed ? styles.botonApretado : styles.botonPressable)}>
            <Text>
              Ver perfil
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
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
    alignItems: "center"
  },
  input:{
    width: "70%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10
  },
  boton: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },
  botonPressable: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10
  },
  botonApretado:{
    backgroundColor: "#5b9cdc",
    padding: 10,
    borderRadius: 10
  }
});
