import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeignt = Dimensions.get('window').height;

export const stylesButtonModule = StyleSheet.create({
  containerButtonModule: {
    borderColor: "black", 
    borderWidth: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    width: 150,
    height: 150
  },
  containerFlexButtonModule: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
})

export default class ButtonModule extends React.Component {
  render() {
    return (
      <ScrollView>
          <Text style={{marginTop: 10, marginBottom: 10}}>Appuyer et relâcher de suite</Text>
          <View style={stylesButtonModule.containerFlexButtonModule}>

          <View style={stylesButtonModule.containerButtonModule}>
            <View style={{backgroundColor: "red", borderRadius: 50,width: 100, height: 100, borderColor: "black", alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{margin: "10%"}}>Maintenir</Text>
            </View>
          </View>

          <View style={stylesButtonModule.containerButtonModule}>
            <View style={{borderRadius: 50,width: 100, height: 100, borderColor: "black", borderWidth: 1, borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center'}}>
              <Text>Exploser</Text>
              <Text>+</Text>
              <Text>Piles &gt; 1</Text> 
            </View>
          </View>

          <View style={stylesButtonModule.containerButtonModule}>
            <View style={stylesButtonModule.containerButtonModule}>
              <Text>Indicateur: FRK</Text>
              <Text>+</Text>
              <Text>Piles &gt; 2</Text>    
            </View>
          </View>
        </View>


        <View>
          <Text>Dans les autres cas relâcher le bouton en fonction de la couleur de la bande</Text>
          
          <View style={stylesButtonModule.containerButtonModule}>
            <Text>Si</Text>
            <View></View>
            <Text>4</Text>
          </View>

          <View style={stylesButtonModule.containerButtonModule}>
            <Text>Si</Text>
            <View></View>
            <Text>5</Text>
          </View>
          <View style={stylesButtonModule.containerButtonModule}>
            <Text>Sinon 1</Text>    
          </View>
        </View>

      </ScrollView>
    );
    
  }
}
