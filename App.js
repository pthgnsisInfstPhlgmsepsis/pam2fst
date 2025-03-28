import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import ViaCep from './ViaCep';

export default function App() {
  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={{alignItems: 'center', justifyContent: 'center', gap: '1em'}}
    >
      <ViaCep />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: '1em',
    margin: '2em'
  },
  miku: {
    fontSize: '2em',
    fontWeight: 'bold',
    fontStyle: 'italic',
  }
});
