import { View,StyleSheet } from 'react-native';
import AppBarTab from './AppBarTab';
import gs from '../globalStyles';
import theme from '../theme';

const styles = StyleSheet.create({
  appBar:{
    backgroundColor: theme.color.secondary,
  }
});


const AppBar = () => {
  return (
    <View style={[styles.appBar,gs.flexContainerRow]}>
      <AppBarTab title='Repositories' path='/'/>
      <AppBarTab title='Sign In' path ='/signin'/>
    </View>
  );

};

export default AppBar;