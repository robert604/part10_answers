/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';*/
import { NativeRouter } from 'react-router-native';
import Main from './src/components/main';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {


  console.log('starting app-----=-');
  //console.log(Constants.manifest);
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>        
      </NativeRouter>

    </>
  );
}
