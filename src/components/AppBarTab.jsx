import {Pressable,View,Text,Alert,StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  tab: {
    backgroundColor: theme.color.secondary
  },
  text:{
    color:theme.color.textLight
  },
  heading: {
    fontSize: theme.fontSizes.heading
  }
});

const AppBarTab = () => {
  return (
    <Pressable onPress={()=>{Alert.alert("You pressed me")}} style={styles.tab}>
      <View style={styles.container}>
        <Text style={[styles.text,styles.heading]}>Repositories</Text>
      </View>
    </Pressable>
  );
}

export default AppBarTab;