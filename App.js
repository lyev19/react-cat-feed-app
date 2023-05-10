
import {StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler';
import { SettingsA } from './components/settings'
import { HomeScreen } from './components/mai'
import AsyncStorage from '@react-native-async-storage/async-storage';

async function jumpStart() {
  const a = await AsyncStorage.getItem("times")

  console.log("this is it")
  console.log(a)
  //if asyncstorage doesnt exist
  
  if (a === null) {
    await AsyncStorage.setItem("last",JSON.stringify({"hours":6,"minutes":0})) 
    await AsyncStorage.setItem('token', 'my-token-value');
    const ob = { "times": [{ "hours": 6, "minutes": 0 }, { "hours": 12, "minutes": 0 }, { "hours": 18, "minutes": 0 }, { "hours": 22, "minutes": 0 }] }
    await AsyncStorage.setItem("times", JSON.stringify(ob))
    await AsyncStorage.setItem("fed", JSON.stringify({ "fed": "false" }))
    const fed = await AsyncStorage.getItem("fed")
    const times = await AsyncStorage.getItem("times")
    console.log(fed + times)
  }
  else if (a.times === []) {
    await AsyncStorage.setItem('token', 'my-token-value');
    const ob = { "times": [{ "hours": 6, "minutes": 0 }, { "hours": 12, "minutes": 0 }, { "hours": 18, "minutes": 0 }, { "hours": 22, "minutes": 0 }] }
    await AsyncStorage.setItem("times", JSON.stringify(ob))
    await AsyncStorage.setItem("fed", JSON.stringify({ "fed": "false" }))
    const fed = await AsyncStorage.getItem("fed")
    const times = await AsyncStorage.getItem("times")
  }
}


jumpStart()


const Stack = createStackNavigator();

export default function App() {

  return (
     <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen name="Home" component={HomeScreen} options={{title:"Cat feed aplication"}} />
           <Stack.Screen name="Settings" component={SettingsA} options={{title:"Settings"}}></Stack.Screen>
        </Stack.Navigator>
     </NavigationContainer>
    
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

