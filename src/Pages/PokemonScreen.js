import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'; 

import imagenDormido from '../../assets/PikachuDormido.gif'
import { ScrollView } from 'react-native-gesture-handler';

export const PokemonScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.contenedorEntrenador}>
            <Text style={styles.textoTitle}>Bienvenido entrenador</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('care')}>
            <View style={styles.tarjeta}>
                <Text style={styles.nombre}>Nombre: Pikachu</Text>
                <Text style={styles.estado}>Estado: Durmiendo</Text>
                <Image style={{width: 80, height: 80, resizeMode: 'contain'}} source={imagenDormido} />
            </View>
        </TouchableOpacity>

        <ScrollView>
        <View style={styles.contenendorEjecicios}>
      
            <TouchableOpacity onPress={() => console.log('Tienda')}>
                <View style={styles.cardEjercicio}>
                <Text style={styles.TextoRutina}>Tienda</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('Ajustes')}>
            <View style={styles.cardEjercicio}>
                <Text style={styles.TextoRutina}>Ajustes</Text>
            </View>
            </TouchableOpacity>

        </View> 
        </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    contenedorEntrenador:{
        margin: 20
    },
    textoTitle:{
        fontSize: 27,
        fontWeight: 'bold',
        // color: 'white'
    },
    tarjeta:{
        paddingTop: 20,
        paddingBottom: 50,
        paddingLeft: 20,
        margin: 20,
        borderRadius: 10,
        backgroundColor: '#2FDEDE'
    },
    nombre:{
        fontSize: 20
    },
    estado:{
        fontSize: 16,
        color: 'white'
    },
    contenendorEjecicios:{
        justifyContent: 'center',
        // margin: 20,
        flexDirection: 'row',
        flexWrap: 'wrap'
      },
      cardEjercicio:{
        alignItems: 'center',
        backgroundColor: '#ECECEC',
        padding: 50,
        margin: 3,
        borderRadius: 10
      },
      TextoRutina:{
        fontSize: 20,
        marginVertical: 10
      },
    
  });
