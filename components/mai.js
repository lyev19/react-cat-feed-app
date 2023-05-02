import { StatusBar } from 'expo-status-bar'
import { Button,StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { useState,useEffect } from 'react'
import  AsyncStorage  from '@react-native-async-storage/async-storage'; 

export const HomeScreen = ({navigation})=>{
  const [fed,setFed]= useState() 
  const datad = new Date()
  const [timer,setTimer] = useState(datad.getHours())
  const[minutes,setMinutes]=useState(datad.getMinutes())
  const[seconds,setSeconds]=useState(datad.getSeconds())
  const [times,setTimes]=useState(60000)
  const [feeding,setfeeding]= useState([0]) //imp
  const [petName,setPet] = useState("Mostaza") //imp
  

  useEffect( () => {
    async function a (){
      const fedVal = await  AsyncStorage.getItem("fed")
      const f = await JSON.parse(fedVal)
      setFed(f.fed)
      const timesVal = await AsyncStorage.getItem("times")
      const timesv = await JSON.parse(timesVal)
      setfeeding(timesv.times)
      console.log(f)
      console.log(timesv.times)

    }
     
    a()
    
    
  }, []);

 async function seter (t){
  if (t){
    await AsyncStorage.setItem("fed",JSON.stringify({"fed":"true"}))
  }
  else{
    await AsyncStorage.setItem("fed",JSON.stringify({"fed":"false"}))
  }
   
 }


  const clickHandler=()=>{
     
    setFed(true)
    seter(true)
    
  }
  
  const checkTime= (list)=>{
    if(list!=undefined){
      for(let i=0;i<list.lenght;i++){
        if(timer===list[i].hours){
          setFed(false)
          seter(false)
        }
      }
    }
     
  }



  const FoodTime = ()=>{
    if(!fed){
      return(<Text>FEED NOW</Text>)
    }
    else if (timer>=6 && timer<12){
      return(<Text>Feed at 12!</Text>)
    }
    else if(timer>=12 && timer<18){
      return(<Text>feed at 18</Text>)
    }
    else if(timer>=18 && timer<22 ){
      return(<Text>feed at 22</Text>)
    }
    else{
      return(<Text>Feed at 6 am!</Text>)
    }
  }

  const foodTime1 = ()=>{

  }

  useEffect(() => {
    console.log("time")
    let dat= new Date()
    let intER = 60000;
    
    let interval = setInterval(() => {
      if(interval===0){
        
      }
      else{
        setTimes((prevtime)=>{prevtime!==0?prevtime-10:intER})
        dat=new Date()
       
        setTimer(dat.getHours())
        setMinutes(dat.getMinutes())
        setSeconds(dat.getSeconds())
        
      }
       

    }, 1000);
    
   checkTime(feeding)
  }, [timer]);




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
      <View style={styles.container3}>
        <Text>Current schedule</Text>
        <Text>{feeding.map(a=><Text> {a.hours>=10?"":"0"}{a.hours}:{a.minutes>=10?"":"0"}{a.minutes} </Text>)}</Text></View>
      <TouchableHighlight 
      underlayColor="skyblue"
      style={styles.container4} onPress= {()=>{navigation.navigate("Settings")}}>
         <Text > Settings </Text>
      </TouchableHighlight>

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