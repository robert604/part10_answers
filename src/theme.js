import {Platform} from 'react-native';
const theme = {
  color:{
    secondary: '#202020',
    textLight: '#e0e0e0',
    textMedium:'#808080',
    textPrimary:'#24292e',
    textError:'red',
    primary: '#0366d6',
    tertiary:'#a0a0a0'
  },
  fontSizes:{
    body:14,
    heading:24
  },
  fonts:{
    main:'System',
    platformSpecific:Platform.select({
      android:'Roboto',
      ios:'Arial',
      default:'System'
    })
    
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },  
  icon:{
    regular:{
      width:50,
      height:50
    }
  },


}

export default theme;