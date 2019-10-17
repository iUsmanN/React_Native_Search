import React, {Component} from 'react';
import {
    Image,
    ImageBackground,
    View,
    TextInput,
  } from 'react-native';

  import styles from '../Styles/Styles'

export default class APPLE extends Component {

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