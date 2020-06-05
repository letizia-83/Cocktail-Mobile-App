import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';

// formulaire de contact

class Contact extends Component {
  static navigationOptions = {
    drawerLabel: 'Contactez nous',
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          style={{
            resizeMode: 'cover',
            justifyContent: 'center',
            flex: 1,
          }}
          source={require('../../img/cover1.jpg')}>
          <TextInput
            style={{
              borderWidth: 2,
              margin: 10,
            }}
            placeholder="Nom"
          />
          <TextInput
            style={{borderWidth: 2, margin: 10}}
            placeholder="Prénom"
          />
          <TextInput style={{borderWidth: 2, margin: 10}} placeholder="Email" />
          <TextInput
            style={{borderWidth: 2, margin: 10}}
            placeholder="Message"
            multiline={true}
            numberOfLines={4}
          />
          <TouchableOpacity>
            <Text
              style={{textAlign: 'center', marginTop: 20, fontWeight: 'bold'}}>
              ENVOYER
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

export default Contact;
