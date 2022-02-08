import { StyleSheet } from "react-native";

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
});

export default globalStyles;