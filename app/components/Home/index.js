import React , {Component} from 'react'
import { Button , ThemeProvider , Input  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';
import DrawerNavigator from '../../../navigation/DrawerNavigator';

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


class Home extends Component
{

    // static navigationOptions =
    // {
    //     // title: 'LoginActivity',
    //     // header : null,
    //     drawerLabel: 'Home',
    //     drawerIcon: ({ tintColor }) => (
    //       <Icon
    //       onPress={() => this.props.navigation.openDrawer()}
    //       name="home"
    //       type= 'font-awesome'
    //       size= {26}
    //       style={styles.iconStyle}
    //       />
    //     ),
    // }

    constructor(props) {
 
        super(props)
     
        this.state = {
     
            email: '',
            password: '',
            progressState : false
     
        }


      }

      

    UserLoginFunction = () =>{
    
      this.setState({progressState: true});
      const { email }  = this.state ;
      const { password }  = this.state ;

    
        fetch('http://192.168.1.159:8060/hr_buckup/HR_Portal/public/api/my_first_api', {
          method: 'POST',
          credentials: 'include',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        
        },
        body: JSON.stringify({
      
          'email': email,
      
          'pass': password
      
        })
      
      }).then((response) => response.json())
            .then((responseJson) => {

            if(responseJson['message'] === 'You have been sucessfully login')
              {
      
                  
                  //Then open Profile activity and send user email to profile activity.
                  this.props.navigation.navigate('dashboard');

                  var ls = require('react-native-local-storage');
                   ls.save('email', email);
                   ls.save('password', password);
                   this.setState({progressState: false});

              }
              else{
                //console.error(JSON.stringify(responseJson));
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
          <ProgressBarAndroid  color="['#F44336', '#2196F3', '#009688']" />
               }
            

        <Input
        
          placeholder='Enter Your E-mail'
          onChangeText={email => this.setState({email})}
          leftIcon={{      
            type: 'font-awesome',
              name:'inbox',
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
              onPress={this.UserLoginFunction}
              underlayColor='#fff'>
              <Text style={styles.loginText}>Sign in</Text>
       </TouchableOpacity>
    


    </View>
       
        );

        
      }



}


export default Home