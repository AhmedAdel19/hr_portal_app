import { StyleSheet } from "react-native";
import { red, bold } from "ansi-colors";

export default StyleSheet.create({
    MainContainer :{
 
        // justifyContent: 'center',
        flex:1,
        
        backgroundColor :'#ddd',
        
        },
         
        TextInputStyleClass: {
         
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        // Set border Hex Color Code Here.
         borderColor: '#2196F3',
         
         // Set border Radius.
         borderRadius: 5 ,
        
        },
        
         TextComponentStyle: {
           fontSize: 35,
           fontFamily: 'casual',
          fontWeight : 'bold',
          color: "#000",
          textAlign: 'center', 
          marginBottom: 15
         },
         flatview: {
          
          borderRadius: 3,
          color :'#000',
          borderWidth: 2,
          margin : 2,
          padding :3,
          borderColor : '#F86263',
          backgroundColor : '#FBFCFC',
          justifyContent:'center',
          marginTop:20
        
          
        },
        balance_style: {
          borderRadius: 4,
          color :'#000',
          borderWidth: 1,
          margin : 2,
          padding :5,
          marginLeft: 2
        },
        balance_content_style :
        {
          fontSize : 20,
          fontFamily : 'casual',
          justifyContent : 'center',
          textAlign : 'center',
          color : '#34495E',
          fontWeight : 'bold',
        },
        image_style : {
          alignSelf : 'center',
          marginTop:10,
          width:120,
          height:50
        }



})