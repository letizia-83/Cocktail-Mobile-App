import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class Splashscreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('app');
    }, 2000);
  }

  render() {
    return (
      <View>
        <Image
          style={{height: 100, width: 100, marginTop: 300, marginLeft: 125}}
          source={require('../../img/logo.jpg')}
        />
      </View>
    );
  }
}

export default Splashscreen;
