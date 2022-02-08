import {View,Text,Image,StyleSheet} from 'react-native';
import theme from '../theme';

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
    textDark:{
      color:theme.color.textDark,
      fontWeight:'700',      
    },
    textCentered:{
      textAlign:'center'
    },
    centered:{
      alignItems:'center',
      justifyContent:'center',
    },
    containerRow:theme.flexContainerRow,
    iconRegular:theme.icon.regular,
    containerCol:theme.flexContainerCol,
    flex1:theme.flex1,
    flex0:theme.flex0,
    flexStart: {
      alignItems:'flex-start'
    },    
    flexEnd: {
      alignItems:'flex-end'
    },
    flexCenter: {
      alignItems:'center'
    },
    paddingLeft10:{
      paddingLeft:10
    },
  });

  return(
    <View styles={[]}>
      <View style={[styles.containerRow,styles.paddingLeft10]}>
        <Image style={styles.iconRegular}source={{uri:item.ownerAvatarUrl}}></Image>
        <View style={[styles.containerCol,styles.flex0,styles.flexStart,styles.paddingLeft10]}>
          <Text style={styles.textDark}>{`${item.fullName}`}</Text>
          <Text style={styles.textMedium}>{`${item.description}`}</Text>
          <View  style={[styles.roundedBox]}>
            <Text style={[styles.textLight,styles.flex0]}>{`${item.language}`}</Text>
          </View>          
        </View>
      </View>
      <View style={[styles.containerRow]}>
        <View style={[styles.containerCol,styles.flex1]}>
          <Text style={[styles.textDark,styles.textCentered]}>{`${item.stargazersCount}k`}</Text>
          <Text style={[styles.textMedium,styles.textCentered]}>Stars</Text>
        </View>
        <View style={[styles.containerCol,styles.flex1]}>       
          <Text style={[styles.textDark,styles.textCentered]}>{`${item.forksCount}k`}</Text>
          <Text style={[styles.textMedium,styles.textCentered]}>Forks</Text>          
        </View>        
        <View style={[styles.containerCol,styles.flex1]}>         
          <Text style={[styles.textDark,styles.textCentered]}>{`${item.reviewCount}`}</Text>
          <Text style={[styles.textMedium,styles.textCentered]}>Reviews</Text>          
        </View>        
        <View style={[styles.containerCol,styles.flex1]}>      
          <Text style={[styles.textDark,styles.textCentered]}>{`${item.ratingAverage}`}</Text> 
          <Text style={[styles.textMedium,styles.textCentered]}>Rating</Text>          
        </View>
      </View>            
    </View>
  );
}

export default RepositoryItem;