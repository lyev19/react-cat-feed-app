import { View,TextInput,Text,StyleSheet,TouchableOpacity} from "react-native"
import { Button} from 'react-native'
import  AsyncStorage  from '@react-native-async-storage/async-storage'; 
import { useEffect, useState } from "react";
export const SettingsA = ({navigation})=>{
 const [times,setTimes]=useState([])
 
 useEffect(() => {
   async function a (){
 
      const timesVal = await AsyncStorage.getItem("times")
      const timesv = await JSON.parse(timesVal)
      setTimes(timesv.times)
      console.log(timesv)

    }
     
    a()
 }, []);

  const Presenting = ()=>{
      return(<View style={styles.containerB} >{times.map(a=> <Text key={a} style={styles.items}>{a} </Text>)}</View>)
  }

  const pushing = (val)=>{
     


  }

   return(
       <View style={styles.containerA}>
          <View style={styles.containerC} >
             <Text>Set your schedule!</Text>
          </View>
          <Presenting/>
          <View style={styles.containerC}><Button title="add new hour"></Button></View>
         
          <View style={styles.containerD}><TouchableOpacity style={styles.buttonStyle} title="back to home " onPress= {()=>{navigation.navigate("Home")}} >
            
            <Text style={styles.appButtonText}>Back home</Text></TouchableOpacity>
            
          
          </View>
       </View>
   )

}

const styles = StyleSheet.create({
   items:{
      backgroundColor:"#abe4f7",
      width:70,
      height:70,
      fontSize:30,
      textAlign:"center",
      textAlignVertical:"center",
    
      borderBottomColor:"black",
      borderBottomWidth:1,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20
      
   },
   containerA:{
      display: "flex",
      flex:1,
      flexDirection: "column",
      backgroundColor: "whitesmoke",
      alignItems: 'center',
      justifyContent: 'center',
      gap:10
      
      
   },
   containerB:{
      flex:2,
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      backgroundColor: "whitesmoke",
      width:400,
      gap:10,
   },
   containerC:{
      flex:1
   },
   containerD:{
      flex:3,
   
   },
   buttonStyle:{
      elevation: 8,
      backgroundColor: "#343f42",
      borderRadius: 10,
      width:300,
      height:70,
      alignItems:"center",
      justifyContent:"center"
   },
   appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
})

