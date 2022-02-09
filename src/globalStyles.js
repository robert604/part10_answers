import { StyleSheet } from "react-native";
import theme from './theme';

const globalStyles = StyleSheet.create({
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
});

export default globalStyles;