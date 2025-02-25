import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper'
import ViaCep from './ViaCep';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <ViaCep />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  miku: {
    fontSize: '2em',
    fontWeight: 'bold',
    fontStyle: 'italic',
  }
});
