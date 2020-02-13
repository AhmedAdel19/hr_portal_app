import React , {Component} from 'react'
import { 
    View ,
    Text,
    Button,
    Image,
    TouchableOpacity,
    ImageBackground

} from 'react-native'

import styles from "./styles"
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-navigation'
// import MenuIcons from '../../../MenuIcons';
import HeaderOfDrawer from '../../../navigation/HeaderOfDrawer';
import { Card, CardItem } from 'native-base';
import MyHeader from '../MyHeader';

class HrNotes extends Component
{
    // static navigationOptions =
    // {
    //     title: 'HrNotes Activity',
    //     header : null,
    //     drawerLabel: 'Notifications',
    //     drawerIcon: ({ tintColor }) => (
    //       <Icon
    //       onPress={() => this.props.navigation.openDrawer()}
    //       name="md-notifications"
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

                const user =  responseJson;
                this.setState({data: user[2]});

        
              }).catch((error) => {
                console.error(error.message);
              });
            })
      }
      _renderNotes(item){
        if(item.user_notes == "Notnull"){
          return (

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
              <Image
              style = {{width:162 , height :200}}
              resizeMode="stretch"
              source = {{uri : 'http://'+this.state.currentIp+':8060/hr_buckup/HR_Portal/public/storage/EmployeeNotificationImages/'+item.note_image2}}
              />
           }
              {item.note_image1 == 'NoImage.png'? <Text></Text>:
                <Image
                resizeMode = "stretch"
                style = {{width:162 , height :200   }}
                source = {{uri : 'http://'+this.state.currentIp+':8060/hr_buckup/HR_Portal/public/storage/EmployeeNotificationImages/'+item.note_image1}}
                />
                }
              </CardItem> 
            </Card>
            </View>
          );
        }
          return (
            
            <View style={styles.note_style_empty}>
            
            <Text style={{textAlign : 'center' , fontSize : 20, color : '#8E44AD' ,borderWidth: 1 ,borderRadius: 4 , borderColor : '#000'}} >HR notifications</Text>

            <Text style={styles.hr_content_style} >no any notification yet</Text> 
  
            </View>
          );
      }
    render()
    {
 
      // const {goBack} = this.props.navigation;
 
       return(
    <React.Fragment>
        {/* <HeaderOfDrawer navigation={this.props.navigation} /> */}
        <SafeAreaView style = { styles.MainContainer }>
          <View style = { styles.MainContainer }>
          {/* <MyHeader  title="HR Notifications" background="#ddd"/> */}
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
         style= {styles.flat_style}
          data={this.state.data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) =>
              this._renderNotes(item)
          }
        />
  
          </View>

          
          </SafeAreaView>
          </React.Fragment>
       );
    }
}

export default HrNotes