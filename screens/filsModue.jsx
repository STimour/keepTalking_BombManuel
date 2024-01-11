import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { CheckBox, TextInput } from 'react-native-web';


export default function FilsModue(){
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

    const styles = StyleSheet.create({
        container: {
            borderRadius: 50,
            overflow: 'hidden',
            marginBottom: 10,
            borderColor: "black",
            borderWidth: 1,
            justifyContent: 'center', // Center vertically
            alignItems: 'center',
            padding: 25
          },
        textStyle: {
            fontSize: 18, 
            fontFamily: fontsLoaded ? 'Rubik Glitch' : 'System'
        },
        answerTextStyle: {
            fontSize: 18, 
            fontFamily: fontsLoaded ? 'Bungee Spice' : 'System'
        }
    })
    
    const [threeWires, setThreeWires] = useState(false)
    const [fourWires, setFourWires] = useState(false)
    const [fiveWires, setFiveWires] = useState(false)
    const [sixWires, setSixWires] = useState(false)



    const [redWire, setRedWire] = useState(true)
    const [lastWireWhite, setLastWireWhite] = useState(false)
    const [blueWire, setBlueWire] = useState(false)
    const [yellowWire, setYellowWire] = useState(false)
    const [blackWire, setBlackWire] = useState(false)
    const [lastNbSerieOdd, setLastNbSerieOdd] = useState(false)

return(
    <SafeAreaView style={styles.container}>
        <Text style={{fontSize: 24, fontFamily: fontsLoaded ? 'Rubik Glitch' : 'System'}}>Module Fils
        </Text>
        <Text style={{fontSize: 24, fontFamily: fontsLoaded ? 'Rubik Glitch' : 'System'}}>Nombre de fils
        </Text>
        <View style={{flexDirection: 'row'}}>
        
            <View style={{flexDirection: 'collumn'}}>

                <View style={{flexDirection: 'row', margin: 25}}>
                    <Text style={styles.textStyle}>3 fils</Text>
                    <CheckBox value={threeWires} onValueChange={() => setThreeWires((threeWires) => !threeWires)}/>
                </View>
                    <View>
                        {threeWires ?  
                        <View>
                            <View style={{flexDirection: 'row', margin: 25}}>
                                <Text style={styles.textStyle}>Fils Rouge</Text>
                                <CheckBox value={redWire} onValueChange={() => setRedWire((redWire) => !redWire)}/>
                            </View>
                            <View style={{flexDirection: 'row', margin: 25}}> 
                                <Text style={styles.textStyle}>Le dernier fil est BLANC</Text>
                                <CheckBox value={lastWireWhite} onValueChange={() => setLastWireWhite((lastWireWhite) => !lastWireWhite)}/>
                            </View>
                            <View style={{flexDirection: 'row', margin: 25}}>
                                <Text style={styles.textStyle}>Il y a plus d'un fil BLEU</Text>
                                <CheckBox value={blueWire} onValueChange={() => setBlueWire((setBlueWire) => !setBlueWire)}/>
                            </View>
                                

                            {redWire && !lastWireWhite || lastWireWhite && !blueWire ? (
                            <View style={{ marginBottom: 25 }}>
                              <Text style={styles.answerTextStyle}>Couper le dernier fils</Text>
                            </View>
                          ) : !redWire ? (
                            <View style={{ marginBottom: 25 }}>
                              <Text style={styles.answerTextStyle}>Couper le deuxième fil</Text>
                            </View>
                          ) : blueWire ? (
                            <View style={{ marginBottom: 25 }}>
                              <Text style={styles.answerTextStyle}>Couper le dernier fil BLEU</Text>
                            </View>
                          ) : null}


                            
                        </View> 
                        : null}
                    </View>
            </View>


            <View style={{flexDirection: 'row', margin: 25}}>
                <Text style={{fontSize: 24, fontFamily: fontsLoaded ? 'Rubik Glitch' : 'System'}}>4 fils</Text>
                <CheckBox value={fourWires} onValueChange={() => setFourWires((fourWires) => !fourWires)}/>
            </View>


            <View style={{flexDirection: 'row', margin: 25}}>
                <Text style={{fontSize: 24, fontFamily: fontsLoaded ? 'Rubik Glitch' : 'System'}}>5 fils</Text>
                <CheckBox value={fiveWires} onValueChange={() => setFiveWires((fiveWires) => !fiveWires)}/>
            </View>


            <View style={{flexDirection: 'row', margin: 25}}>
                <Text style={{fontSize: 24, fontFamily: fontsLoaded ? 'Rubik Glitch' : 'System'}}>6 fils</Text>
                <CheckBox value={sixWires} onValueChange={() => setSixWires((sixWires) => !sixWires)}/>
            </View>


        </View>
        
    </SafeAreaView>
)
}