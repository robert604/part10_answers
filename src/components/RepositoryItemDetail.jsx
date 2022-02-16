import RepositoryItem from "./RepositoryItem";
import { useParams } from 'react-router-native';
import { REPOSITORY } from '../graphql/queries';
import { useQuery } from "@apollo/client";
import {Text,View,Pressable,FlatList,ScrollView} from 'react-native';
import * as Linking from 'expo-linking';
import gs from '../globalStyles';


const ReviewItem = ({item}) => {
  const created = new Date(item.createdAt);
  const date = created.getDate();
  const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][created.getMonth()];
  const year = created.getFullYear();
  return(
    <View style={[gs.flexContainerRow,gs.backgroundColorWhite,{alignSelf:'flex-start'}]}>
      <View style={[gs.iconRegularCircle,gs.borderColorPrimary]}>
        <Text style={[gs.colorPrimary,gs.bold]}>{item.rating}</Text>
      </View>
      <View style={[gs.flexContainerCol,gs.marginLeft10]}>
        <Text style={[gs.bold]}>{item.user.username}</Text>
        <Text style={[gs.colorTertiary]}>{`${date} ${month} ${year}`}</Text>
        <Text style={[]}>{item.text}</Text>

      </View>

    </View>
  );
};



const RepositoryItemDetail = () => {
  const params = useParams();
  const variables = {
    repositoryId:params.id,
    first:5 
  };

  const {data,loading,fetchMore} = useQuery(REPOSITORY,{
    variables,
    fetchPolicy:'network-only'
  });

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

  const Separator = () => <View style={gs.height10}/>

  return (
    <View style={[gs.flexContainerCol,gs.margin10,gs.backgroundColorLight]}>
      <RepositoryItem item={item}/>
      <Pressable onPress={onPress} style={gs.roundedBox}>
        <Text style={gs.textLight}>Open in Github</Text>
      </Pressable>
      <FlatList
        style={[gs.marginTop5]}
        data={reviews}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        keyExtractor={({id})=>id}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => <ReviewItem style={[]} item={item}/>}
      />
    </View>
  );
};

export default RepositoryItemDetail;