import RepositoryItem from "./RepositoryItem";
import { useParams } from 'react-router-native';
import { REPOSITORY } from '../graphql/queries';
import { useQuery } from "@apollo/client";
import {Text,View,Pressable} from 'react-native';
import * as Linking from 'expo-linking';
import gs from '../globalStyles';


const RepositoryItemDetail = () => {
  const params = useParams();
  const {data} = useQuery(REPOSITORY,{
    variables:{
      repositoryId:params.id,     
    },
    fetchPolicy:'network-only'
  });

  if(!data) return <Text>Loading...</Text>
  const item = data.repository;
  const onPress = () => {
    console.log('opening url',item.url);
    Linking.openURL(item.url);
  };
  return (
    <View style={gs.margin5}>
      <RepositoryItem item={item}/>
      <Pressable onPress={onPress} style={gs.roundedBox}>
        <Text style={gs.textLight}>Open in Github</Text>
      </Pressable>
    </View>
  );
};

export default RepositoryItemDetail;