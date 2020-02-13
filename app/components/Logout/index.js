import React , {Component} from 'react'
import { Button , ThemeProvider , Input  } from 'react-native-elements';


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


class Logout extends Component
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

        



      }

      async componentDidMount() {
        this.setState({progressState: true});
        var ls = require('react-native-local-storage');
        ls.save('username', "out");
        ls.save('password', "out");

        this.props.navigation.navigate("login");
        this.setState({progressState: false});
      }

    render() {
        return (
    <View style={styles.MainContainer}>
          {this.state.progressState == false? <Text></Text>:
          <ProgressBarAndroid  color="#F86263" />
               }
    </View>
        );  
      }
}


export default Logout