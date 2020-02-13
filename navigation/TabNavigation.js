import React from 'react';
import {StyleSheet , Text , View , ScrollView }  from 'react-native';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from '../app/components/Login';
import Dashboard from '../app/components/Dashboard';
import UserBalance from '../app/components/UserBalance';
import HrNotes from '../app/components/HrNotes';
import UserProfile from '../app/components/UserProfile';
import UserComplain from '../app/components/Complain';
import Logout from '../app/components/Logout';
import Ionicons from 'react-native-vector-icons/Ionicons';



const TabNavigator = createBottomTabNavigator(
  {
  "Home": Dashboard,
  "Balance": UserBalance,
  "Notifications": HrNotes,
  "Profile": UserProfile,
  "Complain":UserComplain,
  "Logout":Logout,

  
},
//  {
//     initialRouteName : 'Home'
//   },
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Notifications') {
        iconName = `md-notifications`;
      } else if (routeName === 'Balance') {
        iconName = `md-calculator`;
      } else if(routeName === 'Home') {
        iconName = `md-home`;
      }else if(routeName === 'Profile') {
        iconName = `md-person`;
      }else if(routeName === 'Complain') {
        iconName = `md-sad`;
      }else if(routeName === 'Logout') {
        iconName = `md-log-out`;
      }
      
      // else if(routeName === 'Logout') {
      //   iconName = `md-exit`;
      // }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
    
  }),
  tabBarOptions: {

    activeTintColor: 'white',
    inactiveTintColor: 'gray',
    activeBackgroundColor : '#F86263',
    inactiveBackgroundColor :'#ddd',

  },
}
);

export default createAppContainer(TabNavigator);
