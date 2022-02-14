import {Platform} from 'react-native';
const theme = {
  color:{
    secondary: '#202020',
    textMedium:'#808080',
    textError:'red',
    primary: '#0366d6',
    tertiary:'#a0a0a0',
    light:'#e0e0e0'
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
    regularSize:50,

  },


}

export default theme;