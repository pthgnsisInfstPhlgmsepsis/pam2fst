import { useState } from "react";
import { Text, TextInput, Button } from "react-native-paper";

export default function ViaCep() {
  const [text, setText] = useState('')
  const [cep, setCep] = useState('')
  
  return (
    <>
      <Text variant="displayMedium" style={{color: '#000'}}>ViaCep</Text>
      <Text style={{color: '#999', textAlign: 'center'}}>Exemplo de requisição <code>fetch()</code> utilizando a API ViaCep</Text>
      <TextInput 
        mode='outlined'
        label={'Digite seu CEP'}
        value={text}
        onChangeText={t => setText(t)} />
      <Button 
        mode='contained'
        onPress={async () => {
          let req = await fetch(`https://viacep.com.br/ws/${text}/json`)
          console.log(req)
          let rjs = await req.json()
          console.log(rjs)
          setCep(`Você está em: ${rjs['logradouro']}, ${rjs['localidade']} - ${rjs['estado']}`)
      }}>
        Consultar o endereço
      </Button>
      <Text style={{color: '#000', textAlign: 'center'}}>
        {cep}
      </Text>
    </>
  )
}