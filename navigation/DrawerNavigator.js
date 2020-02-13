//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
import 'react-native-gesture-handler';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Dashboard from '../app/components/Dashboard';
import UserBalance from '../app/components/UserBalance';
import HrNotes from '../app/components/HrNotes';
import UserProfile from '../app/components/UserProfile';
import UserComplain from '../app/components/Complain';
import Logout from '../app/components/Logout';
import HeaderOfDrawer from './HeaderOfDrawer';
import CustomSidebarMenu from './CustomSidebarMenu';
import Settings from '../app/components/Admin';




const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      title: 'General Notifications',
      headerLeft: <HeaderOfDrawer navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ddd',
      },
      headerTintColor: '#000',
    }),
  },
});
 
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: UserBalance,
    navigationOptions: ({ navigation }) => ({
      title: 'Balance',
      headerLeft: <HeaderOfDrawer navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ddd',
      },
      headerTintColor: '#000',
      
    }),
  },
});
 
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: HrNotes,
    navigationOptions: ({ navigation }) => ({
      title: 'Notifications',
      headerLeft: <HeaderOfDrawer navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ddd',
      },
      headerTintColor: '#000',
    }),
  },
});

const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Fourth: {
    screen: UserProfile,
    navigationOptions: ({ navigation }) => ({
      title: 'My Profile',
      headerLeft: <HeaderOfDrawer navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ddd',
      },
      headerTintColor: '#000',
    }),
  },
});

const Screen5_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Fifth: {
    screen: UserComplain,
    navigationOptions: ({ navigation }) => ({
      title: 'Complain',
      headerLeft: <HeaderOfDrawer navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ddd',
      },
      headerTintColor: '#000',
    }),
  },
});

const Screen6_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Sixth: {
    screen: Logout,
    navigationOptions: ({ navigation }) => ({
      title: 'Logout',
      headerLeft: <HeaderOfDrawer navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ddd',
      },
      headerTintColor: '#000',
    }),
  },
});


const Screen7_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Sixth: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      headerLeft: <HeaderOfDrawer navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ddd',
      },
      headerTintColor: '#000',
    }),
  },
});


 
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Home: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  Balance: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Balance',
    },
  },
  Notifications: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Notifications',
    },
  },
  Profile: {
    //Title
    screen: Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Profile',
    },
  },

  Complain: {
    //Title
    screen: Screen5_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Complain',
    },
  },

  Logout: {
    //Title
    screen: Screen6_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Logout',
    },
  },
  Settings: {
    //Title
    screen: Screen7_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Settings',
    },
  },
},
{
  //For the Custom sidebar menu we have to provide our CustomSidebarMenu
  contentComponent: CustomSidebarMenu,
  //Sidebar width
  // drawerWidth: Dimensions.get('window').width - 130,
});

 
export default createAppContainer(DrawerNavigatorExample);