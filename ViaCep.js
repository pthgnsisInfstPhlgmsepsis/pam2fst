import { useState } from "react";
import { Text, TextInput, Button, Portal, Modal, View } from "react-native-paper";
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  inputs: {
    width: '30%',
    maxWidth: '30%',
  }
})

export default function ViaCep() {
  const [modalVisible, setVisibile] = useState(false)
  const showModal = () => setVisibile(true)
  const hideModal = () => setVisibile(false)

  const [text, setText] = useState('') // texto do nome
  const [email, setEmail] = useState('') // texto do email 

  const [tCep, setTCep] = useState('') // texto do cep
  const [tRua, setRua] = useState('') // texto da rua
  const [tCidade, setCidade] = useState('') // texto da cidade
  const [tBairro, setBairro] = useState('') // texto do bairro 
  const [tComplemento, setComp] = useState('') // texto do complemento
  const [uf, setUF] = useState('') // texto do complemento
  const [tNumero, setNumero] = useState(null) // numero
  
  return (
    <>
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
          let req = await fetch(`https://viacep.com.br/ws/${tCep}/json`)
          let rjs = await req.json()

          setRua(rjs['logradouro'])
          setCidade(rjs['localidade'])
          setBairro(rjs['bairro'])
          setUF(rjs['uf'])
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
        style={{width: '30%', borderRadius: '0.3em', backgroundColor: '#c953b6'}}
        onPress={() => {
          showModal()
          clearFields()
        }}
      >
        Registrar
      </Button>
      <Portal>
        <Modal visible={modalVisible} onDismiss={hideModal}>
          <Text>asfsjafh</Text>
        </Modal>
      </Portal>
    </>
  )
}

const modalStyle = StyleSheet.create({
  modal: {
    backgroundColor: '#FFF',
    padding: '1.5em',
    margin: '3em',
    flex: 1,
    alignItems: 'center'
  }
})

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