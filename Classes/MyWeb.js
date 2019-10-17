import React, {Component} from 'react';
import { WebView } from 'react-native-webview'

export default class MyWeb extends Component {
  
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