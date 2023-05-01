import { View,TextInput,Text,StyleSheet,TouchableOpacity,Modal} from "react-native"
import { Button} from 'react-native'
import  AsyncStorage  from '@react-native-async-storage/async-storage'; 
import { useEffect, useState } from "react";
import { TimePickerModal } from 'react-native-paper-dates';
import React from "react";
export const SettingsA = ({ navigation }) => {


   const [times, setTimes] = useState([])
   const [modalVis, setModalVis] = useState(false)
   const [modalRemover,setModalRemover] = useState(false)
   const [selectedItem,setSelectedItem] = useState({"hours":0,"minutes":0})

   useEffect(() => {
      async function a() {
          //i need to make everything wait until the new time is set
         const timesVal = await AsyncStorage.getItem("times")
         const timesv = await JSON.parse(timesVal)
         setTimes(timesv.times)
      }

      a()
      console.log("properly set")
   }, []);

   useEffect(() => {
       console.log("new set!")
     async function b (){
        await AsyncStorage.setItem("times",JSON.stringify({"times":times}))
     }
     b()
     console.log(times)
   }, [times]);


   const Presenting = () => {
      return (<View style={styles.containerB} >{times.map(a =><TouchableOpacity key={a.hours + a.minutes}  onPress={()=>onPushModalRemoverItem(a)}><Text style={styles.items}>{a.hours>=10?"":"0"}{a.hours} : {a.minutes>=10?"":"0"}{a.minutes} </Text></TouchableOpacity> )}</View >)
   }
   
   const onPushModal = ()=>{
       setModalVis(!modalVis)
   }
   const onPushModalRemover = ()=>{
      setModalRemover(!modalRemover)
   }
   const onPushModalRemoverItem= (h)=>{
      setModalRemover(!modalRemover)
      console.log(h)
      setSelectedItem(h)

   }
   const checkTimes = (a)=>{
      
      let result=true;
      console.log(a)
      console.log(times)
      if(times===[]){
         result=false
      }
      else{
      for(let i=0;i<times.length;i++){
         if(times[i].hours===a.hours && times[i].minutes===a.minutes){
            result=false
         }
      }
      }
      return result
   }


 const onConfirmation = ({hours,minutes})=>{
    setModalVis(false);
    const b = {hours,minutes}
    if(checkTimes(b)){
      console.log("proper item")
      setTimes( (times)=>[...times,{hours,minutes}])

    }
    else{
      console.log("incorrect")
    }
 }
   const filtering = (a)=>{ 
      
       return a.hours===selectedItem.hours && a.minutes===selectedItem.minutes
     }

   const Removing = () => {
      
       console.log("!removed")
       const newTimes = times.filter(a=> !filtering(a) )
       console.log(newTimes)
       setTimes(newTimes)
       onPushModalRemover()
      
   }

   return (
      <View style={styles.containerA}>
          
          <TimePickerModal
          visible={modalVis}
          onDismiss={onPushModal}
          onConfirm={onConfirmation} //make on confirmation
          hours={24}
         
          />

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalRemover}
            onRequestClose={()=>{setModalRemover(!modalRemover)}}
          > 
             <View>
               <Text> Are u sure u want to remove this</Text>
               <Button title="remove" onPress={Removing}></Button>
               <Button title="cancel" onPress={onPushModalRemover}></Button>
             </View>
           </Modal>

         <Text style={styles.containerC}>Set your schedule!</Text>

         <Presenting />
         <View style={styles.containerC}><Button title="add new hour" onPress={onPushModal}></Button></View>



      </View>
   )

}

const styles = StyleSheet.create({
   items:{
      backgroundColor:"#1486ff",
      width:70,
      height:70,
      fontSize:20,
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
      backgroundColor: "#f5faff",
      alignItems: 'center',
      justifyContent: 'center',
      gap:10
      
      
   },
   containerB:{
      flex:1,
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      backgroundColor: "#deeaff",
      width:400,
      gap:10,
   },
   containerC:{
      flex:1,
      fontSize:40
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

