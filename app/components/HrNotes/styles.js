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
        cardstyle:{
          borderWidth:3,
          borderColor:'#F86263',
          margin:3,
          padding:0,
          borderRadius:8
        },
        note_style_empty:{
          backgroundColor:"#ddd",
          justifyContent:"center",

        },
        hr_content_style:{
          backgroundColor:"#fff",
          justifyContent:"center",
          alignItems:"center",
          alignSelf:"center",
          fontSize:30,
          borderColor:'#F86263',
          borderRadius:20,
          borderWidth:2,
          marginTop:150,
          padding:10,
        }


})