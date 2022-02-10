/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';*/
import { NativeRouter } from 'react-router-native';
import Main from './src/components/main';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
//import Constants from 'expo-constants';

const apolloClient = createApolloClient();

export default function App() {
  console.log('starting app------');
  //console.log(Constants.manifest);
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>        
      </NativeRouter>

    </>
  );
}
