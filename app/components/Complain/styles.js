import { StyleSheet } from "react-native";
import { red } from "ansi-colors";
export default StyleSheet.create({
    MainContainer :{
 
        justifyContent: 'center',
        flex:1,
        backgroundColor : '#ddd'
        
        },
         
        TextInputStyleClass: {
        marginBottom: 10,
        height: 50,
        margin : 10,

        },
        
         TextComponentStyle: {
           fontSize: 20,
          color: "#000",
          textAlign: 'center', 
          marginBottom: 15
         },
        image_style : {
                
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf : 'center',
          marginBottom : 20
        },
        loginScreenButton:{
          marginRight:40,
          marginLeft:40,
         marginTop:30,
          paddingTop:10,
          paddingBottom:10,
          backgroundColor:'#F86263',
          borderRadius:20,
          borderWidth: 1,
          borderColor: '#fff'
        },
        loginText:{
            color:'#fff',
            fontFamily : 'casual',
            textAlign:'center',
            paddingLeft : 10,
            paddingRight : 10,
            fontSize : 20,
            fontWeight : 'bold'
            
        },
        circles: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        progress: {
          margin: 10,
        },

})