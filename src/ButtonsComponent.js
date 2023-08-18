import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export const ButtonsComponent = ({feedTamagotchi, sleepTamagotchi}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => feedTamagotchi()}>
        <View style={[styles.buttons, {top: 40}]}>
            <Text style={styles.texto}>B</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => sleepTamagotchi()}>
        <View style={styles.buttons}> 
            <Text style={styles.texto}>A</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      // top: 40,
      left: 30
    },
    buttons: {
        padding: 25,
        margin: 10,
        borderRadius: 100,
        borderWidth: 2
    },
    texto:{
      fontSize: 30
    }
    
  
  });