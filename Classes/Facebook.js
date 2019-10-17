import React, {Component} from 'react';
import {
    Image,
    ImageBackground,
    View,
    TextInput,
  } from 'react-native';

  import styles from '../Styles/Styles'
  
  export default class FB extends Component {

    constructor() {
      super()
      this.state={}
      this.state.text=null
    }
  
    render(){
      return(
        <ImageBackground style={styles.imageA} source={{uri: 'https://images.unsplash.com/photo-1522072629756-c9274e34ef5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'}}>
          <View style={{width: '80%', height: '60%', justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{width: 100, height: 100}} source={{uri: 'https://icon-library.net/images/facebook-black-and-white-icon/facebook-black-and-white-icon-11.jpg'}}></Image>
          <TextInput style={styles.textinput} placeholder='Search' autoCapitalize='none' onChangeText={(event) => {this.setState({text: event.valueOf()})}} onSubmitEditing={(it) => {this.props.navigation.navigate('web', {something: "www.facebook.com/search/top/?q=" + this.state.text})}}></TextInput>
          </View>
        </ImageBackground>
      )
    }
  }