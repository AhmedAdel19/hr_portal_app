import React , {Component} from 'react'
import { Button , ThemeProvider , Input  } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation'

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


export default class Complain extends Component
{
   lsSet(key, val)
    {
      this.setState({[key]: val});
    }

    constructor(props) {
 
        super(props)
     
        this.state = {
     
            complain: '',
            progressState : false,
            currentIp:''
        }

        var ls = require('react-native-local-storage');
        ls.getSet(['ip'], this.lsSet.bind(this))
        .then(()=>{
          this.setState({currentIp :this.state.ip})
        })

      }


    
    UserComplainFunction = () =>{
    
      this.setState({progressState: true});
      const { complain }  = this.state ;

        fetch('http://'+this.state.currentIp+':8060/hr_buckup/HR_Portal/public/api/user_complain', {
          method: 'POST',
          credentials: 'include',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        
        },
        body: JSON.stringify({
      
          'complain': complain,
          
        })
      
      }).then((response) => response.json())
      .then((responseJson) => {
        if(responseJson['message'] === 'success')
        {
          this.setState({progressState: false});
          this.setState({complain:""});
          Alert.alert('your complain sent successfully!');
          this.props.navigation.navigate("TabNavigation");

        }else{
          Alert.alert('your complain not sent!');
          this.setState({progressState: false});
        }

      }).catch((error) => {
        console.error(error.message);
      });
    }

    render() {
        return (
    <SafeAreaView style = { styles.MainContainer }>
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
        
          placeholder='Enter Your Complain'
          onChangeText={complain => this.setState({complain})}
          leftIcon={{      
            type: 'font-awesome',
              name:'mail-forward',
              size: 24,
              color :'black'
            }}
        />

        <TouchableOpacity
              style={styles.loginScreenButton}
              onPress={this.UserComplainFunction
               
              }
              underlayColor='#fff'>
              <Text style={styles.loginText}>Send</Text>
       </TouchableOpacity>
    </View>
    </SafeAreaView>
        );

        
      }



}


// export default Complain