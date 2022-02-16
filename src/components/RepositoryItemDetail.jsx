import RepositoryItem from "./RepositoryItem";
import { useParams } from 'react-router-native';
import { REPOSITORY } from '../graphql/queries';
import { useQuery } from "@apollo/client";
import {Text,View,Pressable} from 'react-native';
import * as Linking from 'expo-linking';
import gs from '../globalStyles';
import ReviewListContainer from "./ReviewListContainer";


const RepositoryItemDetail = () => {
  const params = useParams();
  const variables = {
    repositoryId:params.id,
    first:5,    
  };

  const queryResult = useQuery(REPOSITORY,{
    variables,
    fetchPolicy:'network-only'
  });

  const {data,loading,fetchMore} = queryResult;

  if(!data) return <Text>Loading...</Text>
  const item = data.repository;
  const reviews = item.reviews.edges.map(edge=>edge.node);

  const onPress = () => {
    console.log('opening url',item.url);
    Linking.openURL(item.url);
  };

  const onEndReached = () => {
    const canFetchMore = !loading && data.repository.reviews.pageInfo.hasNextPage;
    if(!canFetchMore) return;
    fetchMore({
      variables:{
        ...variables,
        after:data.repository.reviews.pageInfo.endCursor
      }
    })
  }
  
  return (
    <View style={[gs.flexContainerCol,gs.margin10,gs.backgroundColorLight]}>
      <RepositoryItem item={item}/>
      <Pressable onPress={onPress} style={gs.roundedBox}>
        <Text style={gs.textLight}>Open in Github</Text>
      </Pressable>
      <ReviewListContainer reviews={reviews} onEndReached={onEndReached}/>
    </View>
  );
};

export default RepositoryItemDetail;