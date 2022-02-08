import {StyleSheet,View,Text} from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';

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
  text:{
    color:theme.color.textLight
  },
  heading: {
    fontSize: theme.fontSizes.heading
  }
});

const AppBarTab = ({title,path}) => {

  return(
    <View style={styles.tab}>
      <Link to={path}><Text style={[styles.text,styles.heading]}>{title}</Text></Link>
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