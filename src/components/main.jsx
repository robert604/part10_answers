//import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Navigate, Route,Routes } from 'react-router-native';
import SignIn from './SignIn';



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

  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.separator} />      
      <Routes>
        <Route path='/' element={<RepositoryList/>} exact />
        <Route path='/signin' element={<SignIn/>} exact />
        <Route path='*' element={<Navigate to='/' replace/>} />
      </Routes>
    </View>
  );
};

export default Main;