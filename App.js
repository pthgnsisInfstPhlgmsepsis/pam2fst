import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView  } from 'react-native';
import { Text, TextInput, Button, Portal, Modal } from "react-native-paper";
import { useState } from 'react'
import ViaCep from './ViaCep';

export default function App() {
  const [modalVisible, setVisibile] = useState(false)
  const showModal = () => setVisibile(true)
  const hideModal = () => setVisibile(false)
  const [modalText, setModalText] = useState('')

  const [text, setText] = useState('') // texto do nome
  const [email, setEmail] = useState('') // texto do email 

  const [tCep, setTCep] = useState('') // texto do cep
  const [tRua, setRua] = useState('') // texto da rua
  const [tCidade, setCidade] = useState('') // texto da cidade
  const [tBairro, setBairro] = useState('') // texto do bairro 
  const [tComplemento, setComp] = useState('') // texto do complemento
  const [uf, setUF] = useState('') // texto do complemento
  const [tNumero, setNumero] = useState(null) // numero

  const clearFields = () => {
    setBairro('')
    setCidade('')
    setNumero('')
    setEmail('')
    setText('')
    setComp('')
    setUF('')
    setRua('')
    setTCep('')
  }

  return (
    <ScrollView 
      contentContainerStyle={[styles.container, {alignItems: 'center'}]}
    >
      <Text variant="displayMedium" style={{color: '#000'}}>ViaCep</Text>
      <Text style={{color: '#999', textAlign: 'center'}}>Exemplo de requisição <code>fetch()</code> utilizando a API ViaCep</Text>
      <TextInput 
        mode='outlined'
        label={'Nome'}
        value={text}
        style={styles.inputs}
        onChangeText={t => setText(t)} />
      <TextInput 
        mode='outlined'
        label={'E-Mail'}
        value={email}
        style={styles.inputs}
        onChangeText={t => setEmail(t)} />

      <TextInput 
        mode='outlined'
        label={'CEP'}
        value={tCep}
        style={styles.inputs}
        keyboardType="numeric"
        onBlur={async () => {
          if (tCep.length !== 8) {
            setModalText('CEP precisa ter 8 digitos!')
            showModal()
            clearFields()
          } else {
            let req = await fetch(`https://viacep.com.br/ws/${tCep}/json`)
            let rjs = await req.json()
            if (rjs.hasOwnProperty('erro')) {
              setModalText('CEP invalido!')
              showModal()
              clearFields()
              return
            }
            setRua(rjs['logradouro'])
            setCidade(rjs['localidade'])
            setBairro(rjs['bairro'])
            setUF(rjs['uf'])
          }
        }}
        onChangeText={tc => setTCep(tc)} />

      <TextInput 
        mode='outlined'
        label={'Rua'}
        value={tRua}
        style={styles.inputs}
        onChangeText={t => setRua(t)}
      />
      <TextInput 
        mode='outlined'
        label={'Bairro'}
        value={tBairro}
        style={styles.inputs}
        onChangeText={t => setBairro(t)}
      />
      <TextInput 
        mode='outlined'
        label={'Complemento'}
        value={tComplemento}
        style={styles.inputs}
        onChangeText={t => setComp(t)}
      />
      <TextInput 
        mode='outlined'
        label={'Cidade'}
        value={tCidade}
        style={styles.inputs}
        onChangeText={t => setCidade(t)}
      />
      <TextInput 
        mode='outlined'
        keyboardType="numeric"
        label={'Número'}
        value={tNumero}
        style={styles.inputs}
        onChangeText={t => setNumero(t)} /> 
      <TextInput 
        mode='outlined'
        label={'UF'}
        value={uf.toLocaleUpperCase()}
        style={styles.inputs}
        onChangeText={t => setUF(t)} /> 

      <Button 
        mode='contained'
        style={{width: '10em', borderRadius: '0.3em', backgroundColor: '#c953b6'}}
        onPress={() => {
          setModalText('Registrado com sucesso!')
          showModal()
          clearFields()
        }}
      >
        Registrar
      </Button>
      <Portal>
        <Modal visible={modalVisible} onDismiss={hideModal} contentContainerStyle={[styles.modal, styles.container]}>
          <Text>{modalText}</Text>
        </Modal>
      </Portal>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: '1em',
    margin: '0.5em'
  },
  miku: {
    fontSize: '2em',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  inputs: {
    width: '15em',
  },
  modal: {
    alignSelf: 'center',
    maxWidth: '70%',
    maxHeight: '30%',
    backgroundColor: '#FFF',
    padding: '2em',
    borderRadius: '0.5em'
  }
});
