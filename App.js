import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//CLASSES
import GOOGLE from './Classes/Google'
import APPLE from './Classes/Apple'
import FB from './Classes/Facebook'
import YOUTUBE from './Classes/Youtube'
import MyWeb from './Classes/MyWeb'
import A from './Classes/Homescreen'

const RootStack = createStackNavigator(
  {
    Home: A,
    Apple: APPLE,
    Google: GOOGLE,
    Facebook: FB,
    Youtube: YOUTUBE,
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