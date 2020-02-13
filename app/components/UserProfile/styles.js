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
    
        },
        image_style_pp : {
          alignSelf : 'center',
          marginTop:10,
          width:180,
          height:180,
          borderRadius:150
        },
        user_data :{
          fontSize:25,
          textAlign:"center",
          marginTop:10,
          backgroundColor:"#F86263",
          color : "#ddd",
          borderRadius : 50,
          width:300,
          alignSelf:"center",
          fontFamily:"casual",
          fontWeight:"bold"
        }
})