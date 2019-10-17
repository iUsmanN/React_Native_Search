import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { WebView } from 'react-native-webview'
class A extends Component {
  render(){
    return(
      
      <ImageBackground style={styles.imageA} source={{uri: 'https://images.unsplash.com/photo-1507679826810-8e7b0e6957b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80'}}>
        
        <Text style={{color:'white', fontSize: 180}}>◓</Text>
        <View style={{height:150, width: 50}}></View>
        
        <TouchableOpacity style= {styles.loginWithAppleStyle} onPress={() => {this.props.navigation.navigate('Apple')}}>
          <Image style={styles.imageB} source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAeFBMVEUAAAD///9PT0/7+/vHx8f39/cfHx/q6urX19d5eXkKCgo8PDxMTEy+vr5sbGyhoaFXV1fOzs4jIyMaGhpzc3MpKSlgYGATExOIiIiSkpLx8fEyMjIVFRVZWVng4OA4ODizs7NDQ0Oampqvr6+Li4stLS2AgICnp6d7uNDLAAAEjklEQVR4nOWb65qiMAyGEZSTAqIgiorojHr/d7g64+7SNkkrNMyzz36/hbzSNuSEM+FQErmri9lPHfvWp+naeWj7MwBB8WX9odtPAHi7yvmt3Q8AJFfnr7LRAeql01U7NkCwF+w74cgATSnarwyvswUQ+qJ95zwuQHiQ7DvRqACzq2zfyUcFKBT7V9NLrQAkin1TR2wHoF4r9uNmTICj+gBS44stAOSq/TgYE2CpApieQSsAoWp/VY8JkKoA0zcuHw6gHgHjI2gFQPUBi7euHwygOMH5bFyAuWT/9MYGtAJQSf//TfuDAQLJAXjv3mAowLRr/pC8fwOLAHFh7oAZAPqZtwUQu5d+5ocD1GnxmSXvHX2rAINlCNAku3Sz2aTbj1Bz0MJ7tPDj6uCvylOa6QMjE4A8WnXOWuxm6HpPIyk9cQ7uJw2hBRCtv3S+A6seRuqL8Usu5R40ALns6n+rSsWXfn05Ib98qrz3AwiAYKNz1+2fpUiOMfXL5zPDFoIA6FYbEJ3Sy7S9ucijFxRv4d2LAwTUM+2jBegtUIAG2HsDtYdODwaQK+muBflA0QIBSHSbqieB+gxgACDbtKO5shNBgIDj+X9rYwLgYd7HhuTiGQQQMdpXkhYAoOUzH38o1lQAxg2wBgpHKgDfApg5ooDHAzzkmrli8gU4RFc4cJQBGq4HECO1YxlArfhZEtbBkQFMXu19tETsywBcLwEfTZolgA0TAF41EgFmTFsQXQAZgGsFiLKZCLDlsT/H7UsALg8A1UATAZgOIZW6CwANj/0TYV8EYNqDZBNXAMh4ANQoBANgOgRkC1MAYHoVkwUcAYDnFB4o+yLAmQXA/4cAFv89AM8mjM0BgAacDZFV3DEAyCaaAAD0YG0Ir9HJAEwRYWEMwJQWkrMEY7wNzQOSqf5evUTNtQkAgf5evUSFRGJMqK3N9pRxWM5VnTqaAnBlZkRQNEpiQs1ViQAtFwCem4gANRtAZdiw4KuRXpEKgQRwYwNwXCMALl/41Abs2UgAHpcregosFMpFKqYE/Vtz4K0kA1w4AZxKPY1KoZIV4OGRZJ+olGrtN8tExTePBuDsVnyrTEgA7jVwpFErtV/Akx51dacBWm77cU0DTOQRZdsSO3cAAFtQ8FKuA+AKTV+SyqZQ35ApRXzprgdg6xw/tfb0ABPbowtdyVVLEIAxKlAmjuH2Pd8uUMq2MABb826txCTIBAVX905NUxGAmic0K9WwEBti2bEAAJ/+YACePJVmQ2fAEDpH1Nq3D371gE9S2c+UwUIJDjCzvQjQApDDbLldZ4B8dkKN89k9Ccjnf+Q8oc3wEMlNNQON9hqZJda/p0c6rUUG2ACHdqbUVprSc6Z0YitbJr570gHMbBRtFsQwtHauuB7uj+BhUlMA5VtSSf58XtLTZy45DG4w2l1j7mBVtM3r5k22wY4sbd9ottyD3kv7rXyywgKIYuKdZhjebLq+lfLFOAW/6JxlckDvasfrDcf7Z1Hn380zfFflRWfT7oEIqCfAYx3azb70q3161/2pZpcez6fl59Tou4tfJ5k+nNLssLoAAAAASUVORK5CYII='}}></Image>
          <Text style={styles.loginWithAppleText}>Search with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style= {styles.loginWithAppleStyle} onPress={() => {this.props.navigation.navigate('Google')}}>
          <Image style={styles.imageB} source={{uri: 'data:image/png;base64,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'}}></Image>
          <Text style={styles.loginWithAppleText}>Search with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style= {styles.loginWithAppleStyle} onPress={() => {this.props.navigation.navigate('Facebook')}}>
          <Image style={styles.imageB} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEsV43xAHj2KeGfwtxAJuqLuEC5s-VnySqPYxsuqfy5kFCkGQn'}}></Image>
          <Text style={styles.loginWithAppleText}>Search with Facebook</Text>
        </TouchableOpacity>

      </ImageBackground>
    )
  }
}

class APPLE extends Component {

  constructor() {
    super()
    this.state={}
    this.state.text=null
  }

  render(){
    return(
      <ImageBackground style={styles.imageA} source={{uri: 'https://images.unsplash.com/photo-1495250357898-6822052ef5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'}}>
        <View style={{width: '80%', height: '60%', justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 100, height: 100}} source={{uri: 'https://t1.rbxcdn.com/194fb681e5f5deb47a79566d0bdf3df5'}}></Image>
        <TextInput style={styles.textinput} placeholder='Search' autoCapitalize='none' onChangeText={(event) => {this.setState({text: event.valueOf()})}} onSubmitEditing={(it) => {this.props.navigation.navigate('web', {something: "https://www.apple.com/us/search/" + this.state.text})}}></TextInput>
        </View>
      </ImageBackground>
    )
  }
}

class GOOGLE extends Component {

  constructor() {
    super()
    this.state={}
    this.state.text=null
  }
  render(){
    return(
      
      <ImageBackground style={styles.imageA} source={{uri: 'https://images.unsplash.com/photo-1529333241880-9558d5e5e064?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}}>
        <View style={{width: '80%', height: '60%', justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 100, height: 100}} source={{uri: 'https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_960_720.png'}}></Image>
        <TextInput style={styles.textinput} placeholder='Search' autoCapitalize='none' onChangeText={(event) => {this.setState({text: event.valueOf()})}} onSubmitEditing={(it) => {this.props.navigation.navigate('web', {something: "https://www.google.com/search?q=" + this.state.text})}}></TextInput>
        </View>
      </ImageBackground>
    )
  }
}

class FB extends Component {

  constructor() {
    super()
    this.state={}
    this.state.text=null
  }

  render(){
    return(
      <ImageBackground style={styles.imageA} source={{uri: 'https://images.unsplash.com/photo-1499510318569-1a3d67dc3976?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2196&q=80'}}>
        <View style={{width: '80%', height: '60%', justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 100, height: 100}} source={{uri: 'https://icon-library.net/images/facebook-black-and-white-icon/facebook-black-and-white-icon-11.jpg'}}></Image>
        <TextInput style={styles.textinput} placeholder='Search' autoCapitalize='none' onChangeText={(event) => {this.setState({text: event.valueOf()})}} onSubmitEditing={(it) => {this.props.navigation.navigate('web', {something: "www.facebook.com/search/top/?q=" + this.state.text})}}></TextInput>
        </View>
      </ImageBackground>
    )
  }
}

class MyWeb extends Component {
  
  render() {
    console.log(this.props.navigation.state.params.something)
    return (
      <WebView
        source={{uri: this.props.navigation.state.params.something}}
        style={{marginTop: 40}}
      />
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: A,
    Apple: APPLE,
    Google: GOOGLE,
    Facebook: FB,
    web: MyWeb,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}



const styles = StyleSheet.create({
  imageA:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
  },

  button:{backgroundColor:'red', width: '15%', height:'4%', marginTop: 5, borderRadius: 10, justifyContent: 'flex-end', flexDirection: 'row'},

  textinput:{
    width: '100%',
    height:'6%',
    borderRadius: 10,
    backgroundColor: 'white',
    opacity: 0.9,
    marginTop: '20%',
    paddingHorizontal: '2%'
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