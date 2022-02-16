import { View,StyleSheet,ScrollView } from 'react-native';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { useDataContext } from '../contexts/dataContext';

const styles = StyleSheet.create({
  appBar:{
    backgroundColor: theme.color.secondary,
  }
});


const AppBar = () => {
  const {signedIn} = useDataContext();

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signOutFunc = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate('/');    
  };

  return (
    <View style={[styles.appBar]}>
      <ScrollView horizontal>
        <AppBarTab title='Repositories' path='/'/>
        { signedIn
          ? <AppBarTab title='Create a review' path='/review'/> 
          : null
        }
        { signedIn
          ? <AppBarTab title='My reviews' path='/myreviews'/> 
          : null
        }        
        { signedIn
          ? <AppBarTab func={signOutFunc} title='Sign Out' path = '/' />
          : <AppBarTab title='Sign In' path ='/signin'/>
        }
        { signedIn
          ? null
          : <AppBarTab title='Sign Up' path='/signup'/> 
        }        

      </ScrollView>
    </View>
  );

};

export default AppBar;