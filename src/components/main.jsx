//import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';


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
      <RepositoryList />
    </View>
  );
};

export default Main;