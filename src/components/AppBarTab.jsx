import {StyleSheet,View,Text} from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import gs from '../globalStyles';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  tab: {
    backgroundColor: theme.color.secondary,
    paddingTop: Constants.statusBarHeight,
    paddingLeft:10,
    paddingRight:10
  },

});

const AppBarTab = ({func,title,path}) => {
  //console.log('starting appbartab',title);
  const pressFunc = func ? func : ()=>{};
  return(
    <View style={styles.tab}>
      <Link to={path} onPress={pressFunc}>
        <Text style={[gs.text,gs.colorTextLight,gs.heading]}>{title}</Text>
      </Link>
    </View>
  );
  /*return (
    <Pressable onPress={()=>{Alert.alert("You pressed me")}} style={styles.tab}>
      <View style={styles.container}>
        <Text style={[styles.text,styles.heading]}>{title}</Text>
      </View>
    </Pressable>
  );*/
}

export default AppBarTab;