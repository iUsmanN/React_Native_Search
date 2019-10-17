import {
    StyleSheet,
  } from 'react-native';
  
  const styles = StyleSheet.create({
    imageA:{
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
    },
  
    button:{
      backgroundColor:'red', 
      width: '15%', 
      height:'4%', 
      marginTop: 5, 
      borderRadius: 10, 
      justifyContent: 'flex-end', 
      flexDirection: 'row'
    },
  
    textinput:{
      width: '100%',
      height:'6%',
      borderRadius: 10,
      backgroundColor: 'white',
      opacity: 0.9,
      marginTop: '20%',
      paddingHorizontal: '4%'
    },
  
    imageB:{
      width: 20,
      height:20,
      backgroundColor:'red',
      marginRight: 10,
      marginLeft: 40
    },
  
    loginWithAppleStyle:{
        width:'70%',
        height: '7%',
        backgroundColor: 'white',
        borderRadius: 15,
        margin: 20,
        opacity: 0.8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
  
    loginWithAppleText:{
      textAlign: 'center',
      textAlignVertical: 'bottom',
      paddingVertical: 17,
      fontSize: 20,
      justifyContent: 'flex-start',
        alignItems: 'center'
  }
  
  
  });

  export default styles