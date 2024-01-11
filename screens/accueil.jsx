import { View, Text, Button } from 'react-native';


export default function Accueil({ navigation }) {
  return (
    
      <View>
        <Text style={{fontSize: 26}}>Keep Talking and Nobody Explodes</Text>
        <Text>Manuel de Désamorçache de bombe</Text>
        <Button title="Module: Bouton" onPress={() => navigation.navigate("ButtonModule")}/>
      </View>

  );
}