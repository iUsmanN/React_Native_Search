import React, {Component} from 'react';
import {
    Image,
    ImageBackground,
    View,
    TextInput,
  } from 'react-native';

  import styles from '../Styles/Styles'

  export default class YOUTUBE extends Component {

    constructor() {
      super()
      this.state={}
      this.state.text=null
    }
    render(){
      return(
        
        <ImageBackground style={styles.imageA} source={{uri: 'https://images.unsplash.com/photo-1527826507412-72e447368aa1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80https://images.unsplash.com/photo-1529333241880-9558d5e5e064?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}}>
          <View style={{width: '80%', height: '60%', justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{width: 100, height: 100}} source={{uri: 'https://icon-library.net/images/youtube-icon-white-transparent/youtube-icon-white-transparent-16.jpg'}}></Image>
          <TextInput style={styles.textinput} placeholder='Search' autoCapitalize='none' onChangeText={(event) => {this.setState({text: event.valueOf()})}} onSubmitEditing={(it) => {this.props.navigation.navigate('web', {something: "http://www.youtube.com/results?search_query=" + this.state.text})}}></TextInput>
          </View>
        </ImageBackground>
      )
    }
  }