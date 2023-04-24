import { StatusBar } from 'expo-status-bar'
import { Button,StyleSheet, Text, View } from 'react-native'
import { useState,useEffect } from 'react'

export const Main = (props) => {

   
    return (
        <View style={styles.container}>
          <View style={styles.container1}>
            <Text style={styles.Text}>Feed your cat!</Text> 
          </View>
    
          <View style={styles.container2}>
           <Text style={styles.Text}>Is cat fed? {fed?"yes":"no"}</Text>
           
           <Text style={styles.Text}>  {timer} : {minutes} : {seconds}  </Text>
           <Text style={styles.Text}> Next food time for cat! : <FoodTime/> </Text>
           <StatusBar style="auto"/>
          </View>
    
          <View style={styles.container3}>
          <Text style={styles.Text}>{fed?<Text>Cat is already fed</Text>:<Button onPress={()=>{clickHandler()}}title="i fed the cat!" />} </Text> 
          </View>
    
          <View style={styles.container4}>
             <Text > Settings </Text>
          </View>
    
        </View>
        
      );
}

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flex:1,
      flexDirection: "column",
      backgroundColor: "black",
      alignItems: 'center',
      justifyContent: 'center',
      gap:4
    },
    Text:{
      color: "whitesmoke",
      fontSize: 20
    },
    container2: {
        flex:2,
        backgroundColor: "steelblue",
        width: 400,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    Box1:{
      flex:2
    },
    Box2:{
      
      color: "black"
    },
    container3: {
      flex:1,
      backgroundColor: "skyblue",
      width: 380,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    container4: {
      flex:1,
      backgroundColor: "powderblue",
      width: 380,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
  
    },
    container1:{
      flex:1,
      backgroundColor: "darkblue",
      width: 400,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  });