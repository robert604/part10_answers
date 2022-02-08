/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';*/
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import Main from './src/components/main';

export default function App() {
  console.log('starting app');
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style='auto'/>
    </>
  );
}
