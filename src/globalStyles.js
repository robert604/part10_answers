import { StyleSheet } from "react-native";
import theme from './theme';

const globalStyles = StyleSheet.create({
  text:{
    color:theme.color.secondary,
    fontSize:theme.fontSizes.body,
    fontFamily:theme.fonts.platformSpecific,
    fontWeight:theme.fontWeights.normal
  },
  flexContainerRow:{
    flexDirection: 'row',
    flexGrow:1,
    flexShrink:1
  },
  flexContainerCol:{
    flexDirection: 'column',
    flexGrow:1,
    flexShrink:1
  },
  flex1:{
    flex:1
  },
  flex0:{
    flex:0
  },
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
  height10:{
    height:10
  },
  borderShape:{
    borderWidth:2,
    borderRadius:5
  },
  borderColorPrimary:{
    borderColor:theme.color.primary
  },
  borderColorTertiary:{
    borderColor:theme.color.tertiary
  },
  borderColorRed:{
    borderColor:'red'
  },
  colorPrimary:{
    color:theme.color.primary
  },
  colorSecondary:{
    color:theme.color.secondary
  },
  colorTertiary:{
    color:theme.color.tertiary
  },  
  backgroundColorPrimary:{
    backgroundColor:theme.color.primary
  },
  backgroundColorTertiary:{
    backgroundColor:theme.color.tertiary
  },
  backgroundColorLight:{
    backgroundColor:theme.color.light
  },
  backgroundColorWhite:{
    backgroundColor:'white'
  },  
  marginLeft10:{
    marginLeft:10
  },
  margin10:{
    margin:10
  },  
  margin5:{
    margin:5
  },
  margin1:{
    margin:1
  },  
  marginTop5:{
    marginTop:5
  },
  padding1:{
    padding:1
  },
  padding5:{
    padding:5
  },  
  colorTextLight:{
    color:theme.color.light
  },
  colorTextError:{
    color:theme.color.textError
  },
 
  heading: {
    fontSize: theme.fontSizes.heading
  },
  textAlignCenter:{
    textAlign:'center'
  },
  bold:{
    fontWeight:'bold'
  },
  textLight:{
    color:theme.color.light,
    fontWeight:'bold'
  },
  textMedium:{
    color:theme.color.textMedium
  },
  textPrimary:{
    color:theme.color.secondary,
    fontWeight:'700',      
  },
  roundedBox:{
    borderRadius:5,
    borderWidth:1,
    borderColor:theme.color.primary,
    backgroundColor:theme.color.primary,
    padding:6,
    alignItems:'center',
    justifyContent:'center',
  },
  iconRegular:{
    width:theme.icon.regularSize,
    height:theme.icon.regularSize
  },
  iconRegularCircle:{
    width:theme.icon.regularSize,
    height:theme.icon.regularSize,
    borderRadius:1000,
    borderWidth:3,
    alignItems:'center',
    justifyContent:'center',
  }
});

export default globalStyles;