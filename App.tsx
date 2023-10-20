import { StatusBar, View } from 'react-native';
import { Button } from './src/modules/travels/components/commom/button/Button';
import { Input } from './src/modules/travels/components/commom/input/Input';
import React, { useState } from 'react';

export default function App() {
  const [stateTest, seStateTest] = useState<boolean>(false)

  return (
    <View className="w-full h-full items-center justify-center bg-primary-background">
      <StatusBar backgroundColor={'white'}/>
      <Input labelText='Senha' placeholder='Digite sua senha' />
      <Button text='Clique em mim' onClick={() => seStateTest(!stateTest)}/>
    </View>
  );
}
