import React from 'react'
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export const PadComponent = ({moveCharacter}) => {
  return (
    <View style={styles.container}>
      
    <View style={styles.caja}>
      <TouchableOpacity onPress={() => moveCharacter('left')}>
        <AntDesign name="caretleft" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => moveCharacter('right')}>
        <AntDesign name="caretright" size={30} color="black" />
      </TouchableOpacity>
    </View>
    <View style={styles.caja2}>
      <TouchableOpacity onPress={() => moveCharacter('up')}>
        <AntDesign name="caretup" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => moveCharacter('down')}>
        <AntDesign name="caretdown" size={30} color="black" />
      </TouchableOpacity>
    </View>
    <View style={styles.caja3}>
      <AntDesign name="caretup" size={24} color="black" />
      <AntDesign name="caretdown" size={24} color="black" />
    </View>
    
    
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    bottom: 100,
    left: 10,
    //   backgroundColor: 'blue',
      // flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    caja:{
      // flex: 1,
      // margin: 90,
      zIndex: 2,
      backgroundColor: 'red',
      justifyContent: 'space-between',
      borderWidth: 4,
      padding: 20,
      // fontSize: 30,
      width: 160,
      // position: 'absolute',
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    caja2:{
      flex: 1, 
      zIndex: 2,
      position: 'absolute',
      // flexDirection: 'row',
      alignItems: 'center',
      // margin: 90,
      backgroundColor: 'red',
      justifyContent: 'space-between',
      borderBottomWidth: 4,
      borderTopWidth: 4,
      padding: 2,
      // fontSize: 30,
      height: 150,
      width: 63
    },
    caja3:{
      flex: 1, 
      zIndex: 1,
      position: 'absolute',
      // flexDirection: 'row',
      // alignItems: 'center',
      // margin: 90,
      backgroundColor: 'blue',
      justifyContent: 'space-between',
      borderWidth: 4,
      padding: 20,
      // fontSize: 30,
      height: 150,
      width: 70,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    }
  });
