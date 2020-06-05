import React, {Component} from 'react';
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: '',
      mesure1: '',
      mesure2: '',
      mesure3: '',
      mesure4: '',
      mesure5: '',
      mesure6: '',
      mesure7: '',
      mesure8: '',
      mesure9: '',
      mesure10: '',
      ingredient1: '',
      ingredient2: '',
      ingredient3: '',
      ingredient4: '',
      ingredient5: '',
      ingredient6: '',
      ingredient7: '',
      ingredient8: '',
      ingredient9: '',
      ingredient10: '',
      instruction: '',
      photo: '',
    };
  }

  componentDidMount() {
    this.getRandomCocktail();
  }

  getRandomCocktail = () => {
    console.log('bonjour');
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(
        data => {
          this.setState({
            titre: data.drinks[0].strDrink,
            mesure1: data.drinks[0].strMeasure1,
            mesure2: data.drinks[0].strMeasure2,
            mesure3: data.drinks[0].strMeasure3,
            mesure4: data.drinks[0].strMeasure4,
            mesure5: data.drinks[0].strMeasure5,
            mesure6: data.drinks[0].strMeasure6,
            mesure7: data.drinks[0].strMeasure7,
            mesure8: data.drinks[0].strMeasure8,
            mesure9: data.drinks[0].strMeasure9,
            mesure10: data.drinks[0].strMeasure10,
            ingredient1: data.drinks[0].strIngredient1,
            ingredient2: data.drinks[0].strIngredient2,
            ingredient3: data.drinks[0].strIngredient3,
            ingredient4: data.drinks[0].strIngredient4,
            ingredient5: data.drinks[0].strIngredient5,
            ingredient6: data.drinks[0].strIngredient6,
            ingredient7: data.drinks[0].strIngredient7,
            ingredient8: data.drinks[0].strIngredient8,
            ingredient9: data.drinks[0].strIngredient9,
            ingredient10: data.drinks[0].strIngredient10,
            instruction: data.drinks[0].strInstructions,
            photo: data.drinks[0].strDrinkThumb,
          });
        },
        error => {
          console.log(error);
        },
      );
  };

  // drawer tactile sans bouton
  static navigationOptions = {
    drawerLabel: 'Cocktail aléatoire',
    drawerIcon: () => (
      <Image
        source={require('../../img/tél.png')}
        style={{height: 30, width: 30}}
      />
    ),
  };

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{backgroundColor: '#333333', paddingBottom: 10}}>
          <Text
            style={{
              color: '#E6702C',
              fontSize: 23,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Cocktail aléatoire : {'\n'}
            {'\n'}
            {this.state.titre}
          </Text>
        </View>
        <ImageBackground
          style={{
            resizeMode: 'cover',
            justifyContent: 'center',
            flex: 1,
            marginBottom: 10,
          }}
          source={{uri: this.state.photo}}>
          <View style={style.middle}>
            <Text style={style.texteMiddle}>
              {' '}
              Quantités {'\n'}
              {'\n'}
              {this.state.mesure1} {this.state.mesure2} {this.state.mesure3}{' '}
              {this.state.mesure4} {this.state.mesure5} {this.state.mesure6}{' '}
              {this.state.mesure7} {this.state.mesure8} {this.state.mesure9}{' '}
              {this.state.mesure10}
              {'\n'}
            </Text>
          </View>
          <View style={style.middle}>
            <Text style={style.texteMiddle}>
              {' '}
              Ingrédients {'\n'}
              {'\n'}
              {this.state.ingredient1} {this.state.ingredient2}{' '}
              {this.state.ingredient3} {this.state.ingredient4}{' '}
              {this.state.ingredient5} {this.state.ingredient6}{' '}
              {this.state.ingredient7} {this.state.ingredient8}{' '}
              {this.state.ingredient9} {this.state.ingredient10} {'\n'}
            </Text>
          </View>
          <View style={style.middle}>
            <Text style={style.texteMiddle}>
              {' '}
              Préparation{'\n'}
              {'\n'}
              {this.state.instruction}
              {'\n'}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Home;

const style = StyleSheet.create({
  middle: {
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(51, 51, 51, 0.5)',
  },
  texteMiddle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});
