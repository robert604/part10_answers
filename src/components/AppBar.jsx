import { View,StyleSheet,ScrollView } from 'react-native';
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
    <View style={[styles.appBar]}>
      <ScrollView horizontal>
        <AppBarTab title='Repositories' path='/'/>
        <AppBarTab title='Sign In' path ='/signin'/>
               
      </ScrollView>
    </View>
  );

};

export default AppBar;