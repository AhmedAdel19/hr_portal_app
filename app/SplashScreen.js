import React from 'react';
import {StyleSheet , Text , View , Image}  from 'react-native';
import Login from '../app/components/Login'

class SplashScreen extends React.Component {

  lsSet(key, val)
  {
    this.setState({[key]: val});
  }
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
          setTimeout(
            () => { resolve('result') },
            2000
          )
        );
      }
    
      constructor(props) {
        super(props);
      
        this.state = { 
          isLoading: true ,
          username_backup:'',
          password_backup:'',
    
        }

        var ls = require('react-native-local-storage');
        ls.getSet(['username', 'password'], this.lsSet.bind(this))
        .then(()=>{
          this.setState({username_backup : this.state.username});
          this.setState({password_backup : this.state.password});

        })
      }
    
      async componentDidMount() {
        const data = await this.performTimeConsumingTask();
      
        if (data !== null) {
          this.setState({ isLoading: false });
        }
      }

    render() {
      const viewStyles = [
        styles.container,
        { backgroundColor: '#fff' }
      ];
      const textStyles = {
        color: '#000',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily:'casual'
      };

      if (!this.state.isLoading) {

       if(this.state.username_backup === "out" || this.state.password_backup === "out")
       {
        this.props.navigation.navigate("login");
       }
       else
       {
        this.props.navigation.navigate("DrawerNavigator");
       }

      }
  
      return (
        <View style={viewStyles}>
          {/* <Text style={textStyles}>
            HR App
          </Text> */}
          <Image
              resizeMode = "contain"
              style = {styles.image_style}
              source = {require('../assets/logo_small.png')}
              />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container : {
      flex :1,
      alignItems : 'center',
      justifyContent : 'center',
    },
    image_style : {  
        width :200,
        height:200,      
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf : 'center'
      }
  })

  export default SplashScreen;