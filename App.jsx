import ButtonModule from './screens/buttonModule';
import Accueil from './screens/accueil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Accueil">
          <Stack.Screen name="Accueil" component={Accueil}/>
          <Stack.Screen name="ButtonModule" component={ButtonModule}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}