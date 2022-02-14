import {View,Text,Image,StyleSheet} from 'react-native';
import theme from '../theme';
import gs from '../globalStyles';

const RepositoryItem = ({item}) => {
  item = {...item};
  item.stargazersCount = Math.round(item.stargazersCount/100)/10;
  item.forksCount = Math.round(item.forksCount/100)/10;  
  const styles = StyleSheet.create({
    roundedBox:{
      borderRadius:5,
      borderWidth:1,
      borderColor:theme.color.primary,
      backgroundColor:theme.color.primary,
      padding:6,
      alignItems:'center',
      justifyContent:'center',
    },
    textLight:{
      color:theme.color.textLight,
      fontWeight:'bold'
    },
    textMedium:{
      color:theme.color.textMedium
    },
    textPrimary:{
      color:theme.color.textPrimary,
      fontWeight:'700',      
    },
    textCentered:{
      textAlign:'center'
    },
    centered:{
      alignItems:'center',
      justifyContent:'center',
    },

    iconRegular:theme.icon.regular,


  });

  return(
    <View testID='repositoryItem' styles={[]}>
      <View style={[gs.flexContainerRow,gs.paddingLeft10]}>
        <Image style={styles.iconRegular}source={{uri:item.ownerAvatarUrl}}></Image>
        <View style={[gs.flexContainerCol,gs.flex0,gs.flexStart,gs.paddingLeft10]}>
          <Text style={[gs.text,styles.textPrimary]}>{`${item.fullName}`}</Text>
          <Text style={[gs.text,styles.textMedium]}>{`${item.description}`}</Text>
          <View  style={[styles.roundedBox]}>
            <Text style={[styles.textLight,gs.flex0]}>{`${item.language}`}</Text>
          </View>          
        </View>
      </View>
      <View style={[gs.flexContainerRow]}>
        <View style={[gs.flexContainerCol,gs.flex1]}>
          <Text style={[gs.text,styles.textPrimary,styles.textCentered]}>{`${item.stargazersCount}k`}</Text>
          <Text style={[gs.text,styles.textMedium,styles.textCentered]}>Stars</Text>
        </View>
        <View style={[gs.flexContainerCol,gs.flex1]}>       
          <Text style={[gs.text,styles.textPrimary,styles.textCentered]}>{`${item.forksCount}k`}</Text>
          <Text style={[gs.text,styles.textMedium,styles.textCentered]}>Forks</Text>          
        </View>        
        <View style={[gs.flexContainerCol,gs.flex1]}>         
          <Text style={[gs.text,styles.textPrimary,styles.textCentered]}>{`${item.reviewCount}`}</Text>
          <Text style={[gs.text,styles.textMedium,styles.textCentered]}>Reviews</Text>          
        </View>        
        <View style={[gs.flexContainerCol,gs.flex1]}>      
          <Text style={[gs.text,styles.textPrimary,styles.textCentered]}>{`${item.ratingAverage}`}</Text> 
          <Text style={[gs.text,styles.textMedium,styles.textCentered]}>Rating</Text>          
        </View>
      </View>            
    </View>
  );
}

export default RepositoryItem;