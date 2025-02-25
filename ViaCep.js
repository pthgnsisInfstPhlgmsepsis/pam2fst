import { useState } from "react";
import { Text, TextInput } from "react-native-paper";

export default function ViaCep() {
  const [text, setText] = useState('')
  
  return (
    <>
      <Text variant="displayLarge" style={{color: '#000'}}>ViaCep</Text>
      <TextInput 
        label={'Texto'}
        value={text}
        onChangeText={t => setText(t)} />
      <Text>{text}</Text>
    </>
  )
}