import { useState } from "react";
import { Text, TextInput, Button } from "react-native-paper";

export default function ViaCep() {
  const [text, setText] = useState('')
  const [cep, setCep] = useState('')
  
  return (
    <>
      <Text variant="displayLarge" style={{color: '#000'}}>ViaCep</Text>
      <TextInput 
        label={'Texto'}
        value={text}
        onChangeText={t => setText(t)} />
      <Button 
        style={{backgroundColor: '#c934eb', color: '#FFF'}}
        onPress={async () => {
          let req = await fetch(`https://viacep.com.br/ws/${text}/json`)
          console.log(req)
          let rjs = await req.json()
          console.log(rjs)
          setCep(`Você está em: ${rjs['logradouro']}, ${rjs['localidade']} - ${rjs['estado']}`)
      }}>
        Consultar
      </Button>
      <Text style={{color: '#000'}}>
        {cep}
      </Text>
    </>
  )
}