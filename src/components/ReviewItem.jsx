
import {Text,View} from 'react-native';
import gs from '../globalStyles';

const ReviewItem = ({item,myReviews}) => {
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
        {myReviews
          ? <Text style={[gs.bold]}>{item.repository.fullName}</Text>
          : <Text style={[gs.bold]}>{item.user.username}</Text>
        }
        <Text style={[gs.colorTertiary]}>{`${date} ${month} ${year}`}</Text>
        <Text style={[]}>{item.text}</Text>

      </View>

    </View>
  );
};

export default ReviewItem;