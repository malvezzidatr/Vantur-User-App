import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl text-cyan-800">Open up App.tsx to start working o n your app!</Text>
      <StatusBar style="auto"/> 
    </View>
  );
}
