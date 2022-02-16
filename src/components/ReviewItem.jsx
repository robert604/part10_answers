
import {Text,View,Pressable,Alert} from 'react-native';
import gs from '../globalStyles';
import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';

const ReviewItem = ({item,myReviews,refetch}) => {
  const navigate = useNavigate();
  const [deleteReview] = useMutation(DELETE_REVIEW);


  const created = new Date(item.createdAt);
  const date = created.getDate();
  const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][created.getMonth()];
  const year = created.getFullYear();

  const viewRepository = () => {
    navigate(`/repository/${item.repository.id}`);    
  }
  const deleteTheReview = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text:'CANCEL',
          onPress:() => console.log('Cancelled delete review'),
          style:'cancel'
        },
        {
          text:'DELETE',
          onPress:async () => {
            await deleteReview({
              variables:{
                reviewId:item.id
              }
            });
            refetch();
          }
        }
      ]
    )

  }  

  return(
    <View style={[gs.backgroundColorWhite]}>
      <View style={[gs.flexContainerRow,{alignSelf:'flex-start'}]}>
        <View style={[gs.iconRegularCircle,gs.borderColorPrimary]}>
          <Text style={[gs.colorPrimary,gs.bold]}>{item.rating}</Text>
        </View>
        <View style={[gs.flexContainerCol,gs.marginLeft10]}>
          {myReviews
            ? <Text style={[gs.bold]}>{item.repository.fullName}</Text>
            : <Text style={[gs.bold]}>{item.user.username}</Text>
          }
          <Text style={[gs.colorTertiary]}>{`${date} ${month} ${year}`}</Text>
          <Text style={[]}>{item.text}</Text>
        </View>
      </View>
      {myReviews
        ? <View style={[gs.flexContainerRow,{justifyContent:'space-between'}]}>
          <Pressable onPress={viewRepository} style={[gs.roundedBox,{flex:0.5}]}>
            <Text style={gs.textLight}>View repository</Text>
          </Pressable>
          <Pressable onPress={deleteTheReview} style={[gs.roundedBox,gs.backgroundColorRed,gs.borderColorRed,{flex:0.5}]}>
            <Text style={gs.textLight}>Delete review</Text>
          </Pressable>        
        </View>
        : null
      }
    </View>  
  );
};

export default ReviewItem;