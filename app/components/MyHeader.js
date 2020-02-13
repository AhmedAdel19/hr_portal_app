import React from 'react';
import { Appbar } from 'react-native-paper';
import {Text , View , StyleSheet} from 'react-native';

const MyHeader = (props)=>{
    return(
        <Appbar.Header style={{backgroundColor:props.background}}>
        <Appbar.Content
          title="HR Portal"
          subtitle={props.title}
          style ={{alignItems : 'center'}}
        />
      </Appbar.Header>
    );
}

export default MyHeader;