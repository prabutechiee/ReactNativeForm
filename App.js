import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AddData from './Src/project2'
import FetchData from './Src/fetchtable2'

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
