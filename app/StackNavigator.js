import React from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import Login from './Login';
import Home from './Home';
import Movies from './Movies';
import DetailsScreen from './Details'
import Customers from './Customers'

const AppNavigator = createStackNavigator({
    Home: Home,
    Login:Login,
   	Movies:Movies,
    Details: DetailsScreen,
    Customers: Customers
  },
  {
    initialRouteName: 'Login',
  });

export default createAppContainer(AppNavigator);