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

import styles from '../Styles/Styles'

export default class A extends Component {
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
  
          <TouchableOpacity style= {styles.loginWithAppleStyle} onPress={() => {this.props.navigation.navigate('Youtube')}}>
            <Image style={styles.imageB} source={{uri: 'data:image/png;base64,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'}}></Image>
            <Text style={styles.loginWithAppleText}>Search with Youtube</Text>
          </TouchableOpacity>
  
        </ImageBackground>
      )
    }
  }