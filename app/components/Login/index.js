import React , {Component} from 'react'
import { Button , ThemeProvider , Input  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';
import TabNavigation from '../../../navigation/TabNavigation';

import { 
    View ,
    Text,
    TextInput,
    Alert,
    Image,
    TouchableOpacity,
    ProgressBarAndroid
} from 'react-native'

import styles from "./styles"
import {  Header, Body ,Container, Content, InputGroup} from 'native-base';


class Login extends Component
{
    lsSet(key, val)
    {
      this.setState({[key]: val});
    }

    constructor(props) {
 
        super(props)
     
        this.state = {
     
            username: '',
            password: '',
            dataAccess: '',
            progressState : false,
            currentIp:''
        }

        var ls = require('react-native-local-storage');
        ls.getSet(['ip'], this.lsSet.bind(this))
        .then(()=>{
          this.setState({currentIp :this.state.ip})
        })

      }

      // userNavigation(access)
      // {
      // if(access === 'ADMIN')
      //  {
      //   this.props.navigation.navigate("TabNavigationAdmin");
      //  }else
      //  {
      //   this.props.navigation.navigate("DrawerNavigator");
      //  }
      // }
      

    UserLoginFunction = () =>{
    
      this.setState({progressState: true});
      const { username }  = this.state ;
      const { password }  = this.state ;
      const { dataAccess }  = this.state.dataAccess ;

//        fetch('http://'+this.state.currentIp+':8060/hr_buckup/HR_Portal/public/api/my_first_api', {

    
        fetch('http://'+this.state.currentIp+':8060/hr_buckup/HR_Portal/public/api/user_login', {
          method: 'POST',
          credentials: 'include',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        
        },
        body: JSON.stringify({
      
          'username': username,
      
          'pass': password
      
        })
      
      }).then((response) => response.json())
            .then((responseJson) => {
              
            if(responseJson['message'] === 'You have been sucessfully login')
              {

              // console.warn(responseJson);

            fetch('http://'+this.state.currentIp+':8060/hr_buckup/HR_Portal/public/api/user_data', {
              method: 'POST',
              credentials: 'include',
              headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            
            },
            body: JSON.stringify({
          
              'username': username,

              'pass': password
          
            })
          
          }).then((response2) => response2.json())
                .then((responseJson2) => {

                  const user =  responseJson2;
                  this.setState({dataAccess:user[0].Djv_Access});
 
                  // this.userNavigation(this.state.dataAccess.toUpperCase())
                  this.props.navigation.navigate("DrawerNavigator");
                }).catch((error) => {
                  console.error(error.message);
                });
            //-----------------------

                  var ls = require('react-native-local-storage');
                   ls.save('username', username);
                   ls.save('password', password);
                   this.setState({progressState: false});

              }
              else{
                Alert.alert(JSON.stringify(responseJson['message']));
                this.setState({progressState: false});

              }
            }).catch((error) => {
              console.error(error.message);
              this.setState({progressState: false});
            });
    }

    render() {
        return (
     

    <View style={styles.MainContainer}>
          

             <Image
              resizeMode = "contain"
              style = {styles.image_style}
              source = {require('./assets/logo_small.png')}
              />     

          {this.state.progressState == false? <Text></Text>:
          <ProgressBarAndroid  color="#F86263" />
               }
            

        <Input
        
          placeholder='Enter Your Username'
          onChangeText={username => this.setState({username})}
          leftIcon={{      
            type: 'font-awesome',
              name:'mail-forward',
              size: 24,
              color :'black'
            }}
        />


           <Input
                inputStyle ={{marginTop :20}}
                placeholder='Enter Your password'
                onChangeText={password => this.setState({password})}
                secureTextEntry={true}
                leftIcon={{
                  type: 'font-awesome',
                    name:'key',
                    size: 24,
                    marginTop :20,
                    color :'black'
                  }}
              />
        {/* <ProgressBarAndroid styleAttr="Horizontal"  />
        <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        /> */}

        <TouchableOpacity
              style={styles.loginScreenButton}
              onPress={this.UserLoginFunction
               
              }
              underlayColor='#fff'>
              <Text style={styles.loginText}>Sign in</Text>
       </TouchableOpacity>
    </View>
       
        );

        
      }



}


export default Login