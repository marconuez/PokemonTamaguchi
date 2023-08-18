import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import imagenDefault from '../../assets/PikachuStand.gif'
import imagenCorriendoD from '../../assets/pikachuCorriendo.gif'
import imagenCorriendoI from '../../assets/PikachuIzquierda.gif'
import imagenHambriento from '../../assets/PikachuHambriento.gif'
import imagenDormido from '../../assets/PikachuDormido.gif'
import imagenComiendo from '../../assets/PikachuComiendo2.gif'
import imagenEnojado from '../../assets/PikachuEnojado.gif'
import { PadComponent } from '../PadComponent'
import { ButtonsComponent } from '../ButtonsComponent'

export const CarePokemon = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
   const [Acciones, setAcciones] = useState(imagenDefault)
   const [hunger, setHunger] = useState(100);
   const [happiness, setHappiness] = useState(100);
   const [energy, setEnergy] = useState(100);

    const [positionX, setPositionX] = useState(0);
    const [direction, setDirection] = useState(1); // 1: derecha, -1: izquierda
    const targetPositionX = 200;

    // useEffect(() => {
    //   if( hunger < 20 || happiness < 10 && energy < 20){
    //     const interval = setInterval(() => {
    //       setPositionX(prevX => {
    //         const newX = 0; // Ajusta el valor según la velocidad deseada
    
    //         if (direction === 1 && newX >= targetPositionX) {
    //           setDirection(-1); // Cambiar la dirección a izquierda
    //           setAcciones(imagenCorriendoI)
    //         } else if (direction === -1 && newX <= 0) {
    //           setDirection(1); // Cambiar la dirección a derecha
    //           setAcciones(imagenCorriendoD)
    //         }
    
    //         return newX;
    //       });
    //     }, 100); // Ajusta el intervalo de tiempo según la velocidad deseada
        
    //     return () => clearInterval(interval);
    //   }
    //   else{
    //     const interval = setInterval(() => {
    //       setPositionX(prevX => {
    //         const newX = prevX + 5 * direction; // Ajusta el valor según la velocidad deseada
    
    //         if (direction === 1 && newX >= targetPositionX) {
    //           setDirection(-1); // Cambiar la dirección a izquierda
    //           setAcciones(imagenCorriendoI)
    //         } else if (direction === -1 && newX <= 0) {
    //           setDirection(1); // Cambiar la dirección a derecha
    //           setAcciones(imagenCorriendoD)
    //         }
    
    //         return newX;
    //       });
    //     }, 100); // Ajusta el intervalo de tiempo según la velocidad deseada
        
    //     return () => clearInterval(interval);
    //   }
  
    // }, [direction]);
 
   useEffect(() => {
     // Función para disminuir el hambre, la felicidad y la energía con el tiempo
     const decreaseStats = setInterval(() => {
        // setAcciones(imagenDefault)
       setHunger((prevHunger) => prevHunger - 5);
       if(hunger < 20){
        setAcciones(imagenHambriento)
       }
       setHappiness((prevHappiness) => prevHappiness - 3);
       if(happiness < 10){
        setAcciones(imagenEnojado)
       }
       setEnergy((prevEnergy) => prevEnergy - 2);
       if(energy < 20){
        setAcciones(imagenDormido)
       }
     }, 3000);
 
     // Limpiar el intervalo cuando el componente se desmonte
     return () => {
       clearInterval(decreaseStats);
     };
   }, [hunger,happiness,energy]);
 
   const feedTamagotchi = () => {
     setHunger((prevHunger) => prevHunger + 10);
     setAcciones(imagenComiendo)
     setHappiness((prevHappiness) => prevHappiness + 5);
   };
 
   const playWithTamagotchi = () => {
     setHappiness((prevHappiness) => prevHappiness + 10);
     setEnergy((prevEnergy) => prevEnergy - 5);
   };
 
   const sleepTamagotchi = () => {
     setEnergy(100);
   };

   const moveCharacter = (direction) => {
    setPosition((prevPosition) => {
      let newPosition = { ...prevPosition };
      if (direction === 'up') {
        newPosition.y -= 10;
        setAcciones(imagenDefault)
      }
      if (direction === 'down') newPosition.y += 10;
      if (direction === 'left'){
        newPosition.x -= 10;
        setAcciones(imagenCorriendoD)
      } 
      if (direction === 'right') {
        newPosition.x += 10;
        setAcciones(imagenCorriendoD)
      }
      return newPosition;
    });
  };

  return (
    <View style={styles.container}>
    {/* <ImageBackground source={require('./assets/sala.jpg')} resizeMode="cover" style={{flex: 1, justifyContent: 'center'}}> */}
    <View style={styles.redSection}>
      <View style={{position:'relative', top:50, left: 20}}>
        <Text>Hunger: {hunger}</Text>
        <Text>Happiness: {happiness}</Text>
        <Text>Energy: {energy}</Text>

      </View>
      <View style={[styles.gameScreen]}>
        <Image style={{width: 200, height: 130, resizeMode: 'stretch', left: positionX }} source={Acciones} />
      </View>
    </View>
    {/* </ImageBackground> */}
    <View style={styles.blueSection}>
      <PadComponent moveCharacter={moveCharacter}/>
      <View>
        <ButtonsComponent feedTamagotchi={feedTamagotchi} sleepTamagotchi={sleepTamagotchi}/>

      </View>
    </View>
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    redSection: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundImage: 'url("https://picsum.photos/200/300")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    blueSection: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'red',
    },
    gameScreen:{
      top: 250,
      position: 'absolute'
    }
  
  });
