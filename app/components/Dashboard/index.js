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
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from "./styles"
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-navigation'
// import MenuIcons from '../../../MenuIcons';
import HeaderOfDrawer from '../../../navigation/HeaderOfDrawer';
import { Header, Body, Content } from 'native-base';
import MyHeader from '../MyHeader';
import {DeckSwiper, Card, CardItem } from 'native-base';


class Dashboard extends Component
{
    state=
    {
      data: [[]],
      currentIp:'',
      width:162,
      height:200,
      iconSize:28
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
                const user =  responseJson;
                this.setState({data: user[3]});
                
              }).catch((error) => {
                console.error(error.message);
              });
            })
     
      }
    
    render()
    {
      // const {goBack} = this.props.navigation;
      // console.log(this.state.data)
      
       return(
        // console.log(this.state.data[3])
    <React.Fragment>
        {/* <HeaderOfDrawer navigation={this.props.navigation} /> */}
        <SafeAreaView style = { styles.MainContainer }>
          <View style = { styles.MainContainer }>
          {/* <MyHeader  title="General Notifications" background="#ddd"/> */}
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
        <FlatList
          data={this.state.data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
            renderItem={({item})=>
            <View style={styles.cardstyle}>
              <Card>
                <CardItem  >
                  <Text style={{padding:3 ,fontSize:18 }}>
                  <Text style={{color:"#000" ,fontWeight:"bold"}}>notification 1:  </Text>{item.note_text1}
                  </Text>
                </CardItem>
                <CardItem style={{backgroundColor:'#ddd'}}>
                  <Text style={{padding:3 ,fontSize:18 }}>
                  <Text style={{color:"#000" ,fontWeight:"bold"}}>notification 2:  </Text>{item.note_text2}
                  </Text>
                </CardItem> 
                <CardItem >

                {item.note_image2 == 'NoImage.png'? <Text></Text>: 
                <ImageBackground
                onPressIn
                resizeMode = "stretch"
                style = {{width:this.state.width , height :this.state.height }}
                source = {{uri : 'http://'+this.state.currentIp+':8060/hr_buckup/HR_Portal/public/storage/GeneralNotificationImages/'+item.note_image2}}
                >
                <View>
                <TouchableOpacity style={{padding:20}} onPressIn={this.closeImage}>
                <Ionicons name="ios-close" color="#000" size={this.state.iconSize} style={{ position: 'absolute', top: 10, left: 10 }}  />
                </TouchableOpacity>
              </View>
              </ImageBackground>
             }
                {item.note_image1 == 'NoImage.png'? <Text></Text>:
                  <ImageBackground
                  resizeMode = "stretch"
                  style = {{width:162 , height :200}}
                  source = {{uri : 'http://'+this.state.currentIp+':8060/hr_buckup/HR_Portal/public/storage/GeneralNotificationImages/'+item.note_image1}} >
                   <View>
                    <TouchableOpacity style={{padding:20}} onPressIn={this.closeImage}>
                    <Ionicons name="ios-close" color="#000" size={this.state.iconSize} style={{ position: 'absolute', top: 10, left: 10 }}  />
                    </TouchableOpacity>
                  </View>
                  </ImageBackground>
                  }
                </CardItem> 
              </Card>
              </View>
            }
          />
          </View>
          </SafeAreaView>
          </React.Fragment>
       );
    }
}
export default Dashboard