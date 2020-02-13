/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import Home from './app/components/Home';
// import Dashboard from './app/components/Dashboard';
import React from "react";
import DrawerNavigator from './navigation/DrawerNavigator';
import TabNavigation from './navigation/TabNavigation';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './app/components/Login';
import Dashboard from './app/components/Dashboard';

import SplashScreen from './app/SplashScreen';
import TabNavigationAdmin from './navigation/TabNavigationAdmin';



import { View, StyleSheet } from 'react-native';

const MainNavigator = createStackNavigator({
  splashScreen : {screen : SplashScreen},
  login: {screen: Login},
  DrawerNavigator: {screen: DrawerNavigator},
  TabNavigation: {screen: TabNavigation},
  TabNavigationAdmin :{screen: TabNavigationAdmin},
  Dashboard :{screen :Dashboard}
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });

const App = createAppContainer(MainNavigator , { headerMode: "none" });



const styles = StyleSheet.create({
  container : {
    flex :1,
    backgroundColor : '#fff'
  },
});

export default App;