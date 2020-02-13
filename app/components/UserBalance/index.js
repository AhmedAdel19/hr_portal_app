import React , {Component} from 'react'
import { 
    View ,
    Text,
    Button,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./styles"
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-navigation'
// import MenuIcons from '../../../MenuIcons';
import HeaderOfDrawer from '../../../navigation/HeaderOfDrawer';
import { Header, Body } from 'native-base';
import MyHeader from '../MyHeader';

class UserBalance extends Component
{
  
    // static navigationOptions =
    // {
    //     title: 'UserBalance Activity',
    //     header : null,
    //     drawerLabel: 'Balance',
    //     drawerIcon: ({ tintColor }) => (
    //       <Icon
    //       onPress={() => this.props.navigation.openDrawer()}
    //       name="balance-scale"
    //       type= 'font-awesome'
    //       size= {26}
    //       style={styles.iconStyle}
    //       />
    //     ),
    // }



    state=
    {
      data:[[]],
      currentIp:''
      
    }
    
    
    lsSet(key, val)
    {
      this.setState({[key]: val});
    }


    constructor(props) {
      
 
        super(props)
        

        var ls = require('react-native-local-storage');
        ls.getSet(['ip'], this.lsSet.bind(this))
        .then(()=>{
          this.setState({currentIp : this.state.ip})
        })
        ls.getSet(['username', 'password'], this.lsSet.bind(this))
        .then(()=>{

          //---start

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



                const user_balance =  responseJson;
                this.setState({data: user_balance[1]});

        
              }).catch((error) => {
                console.error(error.message);
              });
          //---end


        })



     
      }
    
    render()
    {
 
      // const {goBack} = this.props.navigation;
 
       return(
    <React.Fragment>
        {/* <HeaderOfDrawer navigation={this.props.navigation} /> */}
        <SafeAreaView style = { styles.MainContainer }>
        {/* <MyHeader  title="Balance" background="#ddd"/> */}

          <View style = { styles.MainContainer }>

              {/* <Image
              resizeMode = "contain"
              style = {styles.image_style}
              source = {require('./assets/logo_small.png')}
              /> */}

            <ImageBackground   
                style={{
                height: 65,
                bottom:5,
                width: '100%',
                position: 'relative', 
                top: 0,
                left: 0}} 
                resizeMode='stretch' 
                source={require('../../../assets/mycurve.png')}>
                  <Image
                  resizeMode = "contain"
                  style = {styles.image_style}
                  source = {require('./assets/logo_small.png')}
                  />
            </ImageBackground>

         <View style={styles.flatview}>
             
             <Text style={{textAlign : 'center' , fontSize : 20, color : '#F86263'}} >Annual Leave</Text>
             <View style={styles.balance_style}>
             


             {this.state.data[0]['annual_leave'] == 'null'? <Text style={styles.balance_content_style} >no annual leave yet</Text>: 
             <Text style={styles.balance_content_style} >{this.state.data[0]['annual_leave']}</Text>
   
            }

             </View>
 
         </View>

             {/* <Button title="Click here to Logout" onPress={ () => goBack(null) } /> */}
  

             <View style={styles.flatview}>
             
             <Text style={{textAlign : 'center' , fontSize : 20, color : '#F86263'}} >Sick Leave</Text>
             <View style={styles.balance_style}>
             

            {this.state.data[0]['sick_leave'] == 'null'? <Text style={styles.balance_content_style} >no Sick leave yet</Text>: 
             <Text style={styles.balance_content_style} >{this.state.data[0]['sick_leave']}</Text>
   
            }
             </View>
 
         </View>
          </View>

          
          </SafeAreaView>
          </React.Fragment>
       );
    }
}



export default UserBalance