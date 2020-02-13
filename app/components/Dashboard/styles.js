import { StyleSheet } from "react-native";
import { red, bold } from "ansi-colors";

export default StyleSheet.create({
    MainContainer :{
 
        // justifyContent: 'center',
        flex:1,
        backgroundColor: "#ddd"
        // backgroundColor :'#87CEFA'
        },
        image_style : {
          alignSelf : 'center',
          marginTop:10,
          width:120,
          height:50
        },
        styles : {
          marginTop : 0   
        },
        cardstyle:{
          borderWidth:3,
          borderColor:'#F86263',
          margin:3,
          padding:0,
          borderRadius:8
    
        }
})