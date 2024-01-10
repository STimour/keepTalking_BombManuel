import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ButtonModule from './src/buttonModule';

export default function App() {
  return (
    <View style={styles.container}>
      <ButtonModule/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});