import { StatusBar, View } from 'react-native';
import { Button } from './src/modules/travels/components/commom/button/Button';
import { Input } from './src/modules/travels/components/commom/input/Input';

export default function App() {

  return (
    <View className="w-full h-full items-center justify-center bg-primary-background">
      <StatusBar backgroundColor={'white'}/>
      <Input labelText='Senha' placeholder='Digite sua senha' />
    </View>
  );
}
