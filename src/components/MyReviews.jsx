import {View} from 'react-native';
import { useEffect,useState } from 'react';
import { useQuery } from '@apollo/client';
import {ME} from '../graphql/queries';
import gs from '../globalStyles';
import ReviewListContainer from "./ReviewListContainer";

const MyReviews = () => {

  const [meData,setMeData] = useState(null);
  const variables = {
    includeReviews: true,
    first:5,    
  }
  const queryResult = useQuery(ME,{
    variables,
    fetchPolicy: 'cache-and-network',
  });  
  const {data,loading,fetchMore,refetch} = queryResult;

  useEffect(() => {
    if(data) {
      setMeData(data.me);
    }
  },[data])
  if(!meData) return null;

  const onEndReached = () => {
    const canFetchMore = !loading && data.me.reviews.pageInfo.hasNextPage;
    if(!canFetchMore) return;
    fetchMore({
      variables:{
        ...variables,
        after:data.me.reviews.pageInfo.endCursor
      }
    })
  }

  const reviews = meData.reviews.edges.map(obj=>obj.node);
  return (
    <View style={[gs.flexContainerCol,gs.margin10,gs.backgroundColorLight]}>
      <ReviewListContainer reviews={reviews} onEndReached={onEndReached} myReviews={true} refetch={refetch}/>
    </View>

  );

};

export default MyReviews;