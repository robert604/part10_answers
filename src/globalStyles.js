import { StyleSheet } from "react-native";
import theme from './theme';

const globalStyles = StyleSheet.create({
  text:{
    color:theme.color.textPrimary,
    fontSize:theme.fontSizes.body,
    fontFamily:theme.fonts.platformSpecific,
    fontWeight:theme.fontWeights.normal
  },
  flexContainerRow:{
    flexDirection: 'row'
  },
  flexContainerCol:{
    flexDirection: 'column'
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
  marginLeft10:{
    marginLeft:10
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
  backgroundColorPrimary:{
    backgroundColor:theme.color.primary
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
    color:theme.color.textLight
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
  roundedBox:{
    borderRadius:5,
    borderWidth:1,
    borderColor:theme.color.primary,
    backgroundColor:theme.color.primary,
    padding:6,
    alignItems:'center',
    justifyContent:'center',
  },  
});

export default globalStyles;