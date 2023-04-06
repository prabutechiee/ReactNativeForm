import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AddData from './Src/project1'
import FetchData from './Src/fetchtable1'

const stack= createNativeStackNavigator();

export default function App(){
    return(
    <NavigationContainer>
        <stack.Navigator>
        <stack.Screen name="DETAILS"component={AddData} />
        <stack.Screen name="RECHECKING" component={FetchData}/>
        </stack.Navigator>
    </NavigationContainer>
    );
}
