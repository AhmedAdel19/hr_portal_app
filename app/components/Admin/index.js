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


class Admin extends Component
{

  lsSet(key, val)
  {
    this.setState({[key]: val});
  }

    constructor(props) {
 
        super(props)
     
        this.state = {
     
            IP:'',
            oldIp:'',
            progressState : false,
        }

        var ls = require('react-native-local-storage');
        ls.getSet(['ip'], this.lsSet.bind(this))
        .then(()=>{
          if(this.state.ip == "")
          {
            this.setState({oldIp : 'Enter the new IP'})
          }
          else{
            this.setState({oldIp : this.state.ip})
          }
          
        })

      }

    SetIp =()=>{
      this.setState({progressState: true});
      var ls = require('react-native-local-storage');
      ls.save('ip', this.state.IP);
      this.setState({progressState: false});
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
          placeholder={this.state.oldIp}
          onChangeText={IP => this.setState({IP})}
          leftIcon={{      
            type: 'font-awesome',
              name:'mail-forward',
              size: 24,
              color :'black'
            }}/>

        <TouchableOpacity
              style={styles.loginScreenButton}
              onPress={this.SetIp}
              underlayColor='#fff'>
              <Text style={styles.loginText}>Save</Text>
       </TouchableOpacity>
    </View>
        );  
      }
}


export default Admin