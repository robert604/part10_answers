//import Constants from 'expo-constants';
import { StyleSheet, View} from 'react-native';
import RepositoryList from './RepositoryList';
import RepositoryItemDetail from './RepositoryItemDetail';
import AppBar from './AppBar';
import { Navigate, Route,Routes } from 'react-router-native';
import SignIn from './SignIn';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import { useEffect, useState,createContext } from 'react';
import { DataProvider } from '../contexts/dataContext';
import CreateReview from './CreateReview';

export const dataContext = createContext();

const styles = StyleSheet.create({
  container: {
    //marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
  separator: {
    height: 20
  }
});

const Main = () => {

  const [signedIn,setSignedIn] = useState(false);
  const {data} = useQuery(ME);  

  useEffect(() => {
    if(data) {
      setSignedIn(data.me ? true : false);
    }
  },[data])

  const theData = {signedIn};


  return (
    <View style={styles.container}>
      <DataProvider value={theData}>
        <AppBar />
      </DataProvider>

      <View style={styles.separator} />      
      <Routes>
        <Route path='/' element={<RepositoryList/>} exact />
        <Route path='/signin' element={<SignIn/>} exact />
        <Route path='*' element={<Navigate to='/' replace/>} />
        <Route path='/repository/:id' element={<RepositoryItemDetail/>} />
        <Route path='/review' element={<CreateReview />} />
      </Routes>
    </View>
  );
};

export default Main;