import * as Font from 'expo-font'

export default useFonts = () => Font.loadAsync({
    'bungeeFont': require('../assets/fonts/BungeeSpice-Regular.ttf'),
    'glitchFont': require('../assets/fonts/RubikGlitch-Regular.ttf')
})