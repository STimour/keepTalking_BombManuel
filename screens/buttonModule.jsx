import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


export const stylesButtonModule = StyleSheet.create({
  containerButtonModule: {
    borderColor: "black", 
    borderWidth: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 30
  },
  containerButtonModuleSecondeStep: {
    borderColor: "black", 
    borderWidth: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  containerFlexButtonModule: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center", 
    alignItems: "baseline", 
  },
  containerFlexButtonModuleSec: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center", 
    alignItems: "center",
    margin: 25
  }
})

export default function ButtonModule() {

    return (
      <ScrollView contentContainerStyle={{alignItems: "center"}}>

        <Text style={{marginTop: 50, textAlign: "center", fontSize: 26 }}>Appuyer et relâcher de suite</Text>
          
        <View style={stylesButtonModule.containerFlexButtonModule}>
          <View style={{flexDirection: "collumn", justifyContent: "center", alignItems: "center", marginTop: 20}}>
            <View style={stylesButtonModule.containerButtonModule}>
              <View style={{backgroundColor: "red", borderRadius: 50,width: 100, height: 100, borderColor: "black", alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 18}}>Maintenir</Text>
              </View>
            </View>
            <View style={stylesButtonModule.containerButtonModule}>
                <Text style={{fontSize: 15}}>Indicateur: FRK</Text>
                <Text style={{fontSize: 16}}>+</Text>
                <Text style={{fontSize: 15}}>Piles &gt; 2</Text>    
            </View>
          </View>
          <View style={{flexDirection: "collumn", justifyContent: "center", alignItems: "center", marginTop: 20, borderColor: "black", borderWidth: 1, padding: 30}}>
            <View style={{borderRadius: 50,width: 100, height: 100, borderColor: "black", borderWidth: 1, borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
              <Text style={{fontSize: 18}}>Exploser</Text>
            </View>
              <Text style={{fontSize: 18}}>+</Text>
              <Text style={{marginBottom: 60, fontSize: 18}}>Piles &gt; 1</Text> 
          </View>
        </View>

        <Text style={{marginTop: 30, textAlign: "center", fontSize: 26 }}>Dans les autres cas relâcher le bouton en fonction de la couleur de la bande</Text>
        <View style={{width: 300, marginBottom: 50}}>
          <View style={stylesButtonModule.containerFlexButtonModule}>
            <View style={stylesButtonModule.containerButtonModuleSecondeStep}>
              <View style={stylesButtonModule.containerFlexButtonModuleSec}>
                <Text style={{fontSize: 24}}>Si</Text>
                <View style={{backgroundColor: "blue", width: 20, height: 50, marginHorizontal: 20}}></View>
                <Text style={{fontSize: 24}}>4</Text>
              </View>
            </View>

            <View style={stylesButtonModule.containerButtonModuleSecondeStep}>
              <View style={stylesButtonModule.containerFlexButtonModuleSec}>
                <Text style={{fontSize: 24}}>Si</Text>
                <View style={{backgroundColor: "yellow", width: 20, height: 50, marginHorizontal: 20}}></View>
                <Text style={{fontSize: 24}}>5</Text>
              </View>
            </View>
          </View>
          
          <View style={{borderColor: "black", borderWidth: 1, width: 300, padding: 20}}>
            <Text style={{fontSize: 24, textAlign: 'center'}}>Sinon 1</Text>    
          </View>
        </View>

      </ScrollView>
    );    
  }

