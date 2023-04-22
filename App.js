import { StatusBar } from 'expo-status-bar'
import { Button,StyleSheet, Text, View } from 'react-native'
import { useState,useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

export default function App() {
  const [last,setLast] = useState("Leon")
  const [fed,setFed]= useState(true)
  const datad = new Date()
  const [timer,setTimer] = useState(datad.getHours())
  const[minutes,setMinutes]=useState(datad.getMinutes())
  const[seconds,setSeconds]=useState(datad.getSeconds())
  const [times,setTimes]=useState(60000)
  const [feeding,setfeeding]= useState([6,12,18,22])
  const [petName,setPet] = useState("Mostaza")
  const userList=["Leon","Lore"]
  const clickHandler=()=>{
     
    setFed(true)
    
  }
  
  const checkTime= (list)=>{
     for(let i=0;i<list.lenght;i++){
       if(timer===list[i]){
         setFed(false)
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
    
    if(checkTime(feeding)){
      setFed(false);
    }

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
