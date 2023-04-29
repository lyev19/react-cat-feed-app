import { View,TextInput} from "react-native"
import { Button} from 'react-native'
export const SettingsA = ({navigation})=>{
   


   return(
       <View>
          <View>
             <Button title="back to home " onPress= {()=>{navigation.navigate("Home")}} />
           
          </View>
       </View>
   )

}