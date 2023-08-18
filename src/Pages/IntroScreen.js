import React, { useRef } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import { PokebolaComponent } from '../PokebolaComponent';
import { Audio } from 'expo-av';
import Logo from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native';

export const IntroScreen = () => {
    const navigation = useNavigation();
    const boxScale = useRef(new Animated.Value(1)).current;
    const [color, setColor] = useState('white');

  // useEffect(() => {
  //   const reproduce = async() => {
  //     const { sound } = await Audio.Sound.createAsync(
  //       require('./assets/comienzo.mp3')
  //     );
  //     await sound.playAsync();

  //   }
  //   reproduce()
  // }, [])
  
  const reproducirSonido = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/catch.mp3')
    );
    await sound.playAsync();
  };

  const presionaPokebola = () => {
    reproducirSonido()
    
    const interval = setInterval(() => {
      // Actualizar la posición sumando un valor al eje X
      setColor(color => {
        if (color === 'yellow') return 'white';
        if (color === 'white') return 'yellow';
      });
    }, 500); // Ajusta el intervalo de tiempo según la velocidad deseada

    setTimeout(() => {
      clearInterval(interval);
      setColor('white')
      animateBox()
    }, 5000);


    return () => {
      clearInterval(interval);
    };
  }

  const animateBox = () => {
    Animated.timing(boxScale, {
      toValue: 800,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
        navigation.replace('pokemon'); // Reemplaza 'SiguientePantalla' con el nombre de tu siguiente pantalla
      }, 3000); // Intervalo de tiempo en milisegundos (en este caso, 3 segundos)
    
      return () => clearTimeout(timer);
    };


  return (
    <View style={styles.container}>
    <StatusBar/>
      <View style={styles.pokebolaContainer}>
        <PokebolaComponent color={color} presionaPokebola={presionaPokebola}/>
      </View>
    <View style={styles.WhiteSection}>
      <Image style={styles.Logo} source={Logo} />
    </View>
    <View style={styles.redSection}>
        <Animated.View style={[styles.box, { transform: [{ scale: boxScale }] }]}/>
      <View style={styles.contenedorCreador}>
        <Text style={styles.textoContenedor}>Creado por :</Text>
        <Text style={styles.textoContenedor}>Marco Antonio Nuñez Cabezas</Text>
      </View>
    </View>

   </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    redSection: {
      flex: 1,
      backgroundColor: 'red',
      justifyContent: 'flex-end'
    },
    WhiteSection: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderBottomWidth: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    pokebolaContainer:{
      flex: 1,
      left:95,
      top: 314,
      zIndex: 1,
      position: 'absolute',
    },
    Logo:{
      width: 300,
      height: 110,
      resizeMode: 'cover',
    },
    contenedorCreador:{
      alignItems: 'center',
      justifyContent: 'center'
    },
    textoContenedor:{
      fontSize: 13,
      color: 'white',
      bottom: 40,
      fontWeight: 'bold'
    },
    box:{
        padding: 1,
        backgroundColor: 'red',
        zIndex: 99
    }
  
  });
