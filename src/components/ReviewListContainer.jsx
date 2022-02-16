import { FlatList,View } from "react-native";
import gs from '../globalStyles';
import ReviewItem from "./ReviewItem";


const ReviewListContainer = ({reviews,onEndReached,myReviews}) => {

  const Separator = () => <View style={[gs.height10]}/>

  return (
    <FlatList
      style={[gs.marginTop5]}
      data={reviews}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      keyExtractor={({id})=>id}
      ItemSeparatorComponent={Separator}
      renderItem={({item}) => <ReviewItem style={[]} item={item} myReviews={myReviews}/>}
    />
  );
};

export default ReviewListContainer;