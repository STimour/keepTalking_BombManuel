import { View, Text, StyleSheet, Pressable } from 'react-native';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';

const styles = StyleSheet.create({
  titleContainter: {
    margin: 15
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center'
  },
  buttonContainer: {
    width: 250,
    height: 35,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
  }
});

const Accueil = ({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const useFonts = async () => {
      await Font.loadAsync({
        'Bungee Spice': require('../assets/fonts/BungeeSpice-Regular.ttf'),
        'Rubik Glitch': require('../assets/fonts/RubikGlitch-Regular.ttf')
      });

      setFontsLoaded(true);
    };

    useFonts();
  }, []);

  return (
    <View style={styles.centerContainer}>
      <View style={styles.titleContainter}>
        <Text style={{fontSize: 26, textAlign: "center", fontFamily: fontsLoaded ? 'Bungee Spice' : 'System'}}>Keep Talking and Nobody Explodes</Text>
        <Text style={{fontSize: 22, textAlign: "center", fontFamily: fontsLoaded ? 'Rubik Glitch' : 'System'}}>Manuel de Désamorçage de Bombe</Text>
      </View>
      <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("FilsModule")}>
        <Text style={{...styles.buttonText, fontFamily: fontsLoaded ? 'Rubik Glitch' : 'System'}}>Module: Fils</Text>
      </Pressable>
      <Pressable style={styles.buttonContainer} onPress={() => {
        try {
          navigation.navigate("ButtonModule");
        } catch (error) {
          console.error("Error navigating to ButtonModule:", error);
        }
      }}>
        <Text style={{...styles.buttonText, fontFamily: fontsLoaded ? 'Rubik Glitch' : 'System'}}>Module: Bouton</Text>
      </Pressable>
    </View>
  );
};

export default Accueil;
