//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Thumbnail} from 'native-base'; 
export default class CustomSidebarMenu extends Component {

    state=
    {
      data: [[]],
      currentIp:'',
      dataAccess: '',
      items :[]
    }
    
    lsSet(key, val)
    {
      this.setState({[key]: val});
    }

  constructor() {
    super();
    //Setting up the Main Top Large Image of the Custom Sidebar
    var ls = require('react-native-local-storage');

    ls.getSet(['ip'], this.lsSet.bind(this))
    .then(()=>{
      this.setState({currentIp : this.state.ip})
    })

    ls.getSet(['username', 'password'], this.lsSet.bind(this))
    .then(()=>{

    fetch('http://'+this.state.currentIp+':8060/hr_buckup/HR_Portal/public/api/user_data', {
          method: 'POST',
          credentials: 'include',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        
        },
        body: JSON.stringify({
      
          'username': this.state.username,
      
          'pass':  this.state.password
      
        })
      
      }).then((response) => response.json())
            .then((responseJson) => {

            //  console.warn(this.props.navigation.state.params.email);
              const user =  responseJson;
              this.setState({data: user[0]});
            // console.warn(user[0].Djv_Access.toUpperCase());

              this.setState({dataAccess : user[0].Djv_Access.toUpperCase()});
              // console.warn(this.state.dataAccess);

              if(this.state.dataAccess === 'ADMIN')
              {
                const adminNav =[
                  {
                    navOptionThumb: 'md-home',
                    navOptionName: 'Home',
                    screenToNavigate: 'Home',
                  },
                  {
                    navOptionThumb: 'md-calculator',
                    navOptionName: 'Balance',
                    screenToNavigate: 'Balance',
                  },
                  {
                    navOptionThumb: 'md-notifications',
                    navOptionName: 'Notifications',
                    screenToNavigate: 'Notifications',
                  },
                  {
                    navOptionThumb: 'md-person',
                    navOptionName: 'Profile',
                    screenToNavigate: 'Profile',
                  },
                  {
                    navOptionThumb: 'md-settings',
                    navOptionName: 'Settings',
                    screenToNavigate: 'Settings',
                  },
                  {
                    navOptionThumb: 'md-log-out',
                    navOptionName: 'Logout',
                    screenToNavigate: 'Logout',
                  },
                ];

                this.setState({items:adminNav});
                
              }
              else{

                const userNav =[
                  {
                    navOptionThumb: 'md-home',
                    navOptionName: 'Home',
                    screenToNavigate: 'Home',
                  },
                  {
                    navOptionThumb: 'md-calculator',
                    navOptionName: 'Balance',
                    screenToNavigate: 'Balance',
                  },
                  {
                    navOptionThumb: 'md-notifications',
                    navOptionName: 'Notifications',
                    screenToNavigate: 'Notifications',
                  },
                  {
                    navOptionThumb: 'md-person',
                    navOptionName: 'Profile',
                    screenToNavigate: 'Profile',
                  },
                  {
                    navOptionThumb: 'md-sad',
                    navOptionName: 'Complain',
                    screenToNavigate: 'Complain',
                  },
                  {
                    navOptionThumb: 'md-log-out',
                    navOptionName: 'Logout',
                    screenToNavigate: 'Logout',
                  },
                ];
                this.setState({items:userNav});
              }
              
            }).catch((error) => {
              console.error(error.message);
            });
          })
    //---------------------------------
    this.proileImage =
      'https://aboutreact.com/wp-content/uploads/2018/07/sample_img.png';



  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        {/*Top Large Image */}
        {/* <Image
          source={require('../assets/logo_small.png')}
          style={styles.sideMenuProfileIcon}
        /> */}
    <View style={{width:'100%', backgroundColor:'#F86263',paddingBottom:15}}>
       <Thumbnail style = {styles.image_style_pp} large source={{uri : 'http://'+this.state.currentIp+':8060/hr_buckup/HR_Portal/public/storage/EmployeeProfileImages/'+this.state.data.user_pp}} />

             <Text
                style={{
                
                  fontSize: 18,
                  alignItems:'center',
                  color:'#fff',
                  marginTop:8,
                  textAlign:'center',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {this.state.data.name}
              </Text>
        </View>


        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {this.state.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}
              key={key}>
              <View style={{height:'100%', marginRight: 10, marginLeft: 20 }}>
                <Ionicons type='font-awesome' name={item.navOptionThumb} size={25} color="#808080" />
              </View>
              <Text
                style={{

                  fontSize: 18,
                  alignItems:'center',
                  color: global.currentScreenIndex === key ? 'red' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
  },
  image_style_pp : {
    alignSelf : 'center',
    marginTop:10,
    width:120,
    height:120,
    borderRadius:150
  },
});