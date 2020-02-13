import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class HeaderOfDrawer extends Component {

  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
        {/*Donute Button Image */}
        <Ionicons style={{ width: 25, height: 25, marginLeft: 20 }} type='font-awesome' name='md-menu' size={28} color="#000" />
      </TouchableOpacity>
    </View>

    );
  }
}

const styles = {
  headerStyle: {
    backgroundColor: '#87CEFA',
    height: 55
  },
  viewStyle: {
    
    flexDirection: 'row',
    alignItems: 'center',
    
  },
    iconStyle: { color: 'black', paddingLeft: 10 },

};

export default HeaderOfDrawer;

