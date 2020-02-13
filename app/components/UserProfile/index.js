import React , {Component} from 'react'
import { 
    View ,
    Text,
    Button,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView 

} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./styles"
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-navigation'
// import MenuIcons from '../../../MenuIcons';
import HeaderOfDrawer from '../../../navigation/HeaderOfDrawer';
import { Header, Body, Content } from 'native-base';
import MyHeader from '../MyHeader';
import {DeckSwiper, Card, CardItem ,Thumbnail } from 'native-base';


class UserProfile extends Component
{
    // static navigationOptions =
    // {
    //     title: 'Home',
    //     header : null,
    //     drawerLabel: 'dashboard',
    //     drawerIcon: ({ tintColor }) => (
    //       <Icon
    //       onPress={() => this.props.navigation.openDrawer()}
    //       name="dashboard"
    //       type= 'font-awesome'
    //       size= {26}
    //       style={styles.iconStyle}
    //       />
    //     ),
    // }

    state=
    {
      data: [[]],
      currentIp:''
    }
    
    lsSet(key, val)
    {
      this.setState({[key]: val});
    }


    constructor(props) {
 
        super(props)

      // this.fetchData();

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
                
              }).catch((error) => {
                console.error(error.message);
              });
            })
     
      }
    
    render()
    {
 
      // const {goBack} = this.props.navigation;
      //  console.log(this.state.data)
      
       return(

        // console.log(this.state.data[3])
    <React.Fragment>
        {/* <HeaderOfDrawer navigation={this.props.navigation} /> */}
        <SafeAreaView style = { styles.MainContainer }>
          <View style = { styles.MainContainer }>
          {/* <MyHeader  title="My Profile" background="#ddd"/> */}
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

            <Thumbnail style = {styles.image_style_pp} large source={{uri : 'http://'+this.state.currentIp+':8060/hr_buckup/HR_Portal/public/storage/EmployeeProfileImages/'+this.state.data.user_pp}} />
            <View>
              <Text style={styles.user_data}>
                {this.state.data.name}
              </Text>
              <Text style={styles.user_data}>
                {this.state.data.email}
              </Text>
              <Text style={styles.user_data}>
                {this.state.data.mobile}
              </Text>
              <Text style={styles.user_data}>
                {this.state.data.Djv_Group}
              </Text>

            </View>
          </View>
          </SafeAreaView>
          </React.Fragment>
       );
    }
}



export default UserProfile