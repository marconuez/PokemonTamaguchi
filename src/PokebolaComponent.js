import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const PokebolaComponent = ({color, presionaPokebola}) => {

  return (
    <View style={styles.container}>
        <View style={styles.Pokebola}>
            <View style={styles.redSection}></View>
            <View style={styles.blueSection}></View>
            <TouchableOpacity style={[styles.PokebolaCentro, {backgroundColor: color}]} onPress={() => presionaPokebola()}>
                <View></View>
            </TouchableOpacity>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        // top: 260,
        // alignItems: 'center',
        // justifyContent: 'center',
        // zIndex: 99
    },
    Pokebola:{
        borderWidth: 10,
        padding: 80,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    PokebolaCentro:{
        // alignItems: 'center',
        borderWidth: 10,
        borderRadius: 100,
        position: 'absolute',
        padding: 20,
        backgroundColor: 'white'
    },
    redSection: {
        // flex: 1,
        position: 'absolute',
        // padding: 30,
        backgroundColor: 'red',
        width: 200,
        height: 86,
        top: 0,
        borderBottomWidth: 10
        
    },
    blueSection: {
        flex: 1,
        borderTopWidth: 7,
        backgroundColor: 'white',
        position: 'absolute',
        padding: 20,
        bottom: 0,
        width: 200,
        height: 80,
      },
  });
