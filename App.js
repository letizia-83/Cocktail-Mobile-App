import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Home from './components/app/Home';
import Splashscreen from './components/loading/Splashscreen';
import RechercheNom from './components/app2/RechercheNom';
import Contact from './components/auth/Contact';

const appDrawer = createDrawerNavigator(
  {
    home: Home,
    nom: RechercheNom,
    formulaire: Contact,
  },
  {
    initialRouteName: 'home',
  },
);

const App = createAppContainer(
  createSwitchNavigator(
    {
      app: appDrawer,
      app2: RechercheNom,
      loading: Splashscreen,
      auth: Contact,
    },
    {
      initialRouteName: 'loading',
    },
  ),
);

export default App;
