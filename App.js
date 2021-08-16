import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
         <Image style={{width:100, height:100, margin: "auto", borderRadius: 50}} source={require('./assets/mia.png')}/>
      <Text style={styles.titulo}>Nombre: Marco Antonio Hernandez Hernandez</Text>
      <Text style={styles.subtitulo}>Hobbies: Jugar basloncesto, jugar Futbol</Text>
      <Text style={styles.subtitulo}>Lenguaje de programacion:</Text>
      <Text style={styles.lenguajes}>Java y Angular</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width:100, 
    height:100, 
    margin: "auto", 
    marginBottom:"30%",
    marginTop: "0",
    borderRadius: 50,
  },
  titulo: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "sans-serif", 
  },
  subtitulo: {
    fontSize: 17,
    fontFamily: "sans-serif",
    color: "blue"
  },
  lenguajes: {
    fontSize: 15,
    color: "red"
  }
});
