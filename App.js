import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import ViaCep from './ViaCep';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <ViaCep />
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1em',
    margin: '2em'
  },
  miku: {
    fontSize: '2em',
    fontWeight: 'bold',
    fontStyle: 'italic',
  }
});
