import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    image_logo:{
        alignSelf:'center',
        marginTop:30
    },
    country_input:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        marginTop:50
    },
    country_picker__container:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:2.5,
        borderColor:'#febd59',
        borderRadius:10,
        padding:5,
        paddingRight:10,
        backgroundColor:'black',
        marginRight:1
    },
    country_code_text:{
        color:'gray'
    },
    phone_input:{
        borderWidth:2.5,
        borderColor:'#febd59',
        borderRadius:10,
        padding:5,
        width:200,
        paddingLeft:15,
        backgroundColor:'black',
        color:'gray'
    },
    button_phone:{
        backgroundColor:'#3e2ab8',
        alignItems:'center',
        padding:10,
        borderRadius:50,
        width:280,
        marginTop:20,
        alignSelf:'center'
    },
    button_continue:{
        color:'white',
        fontWeight:'700',
        fontSize:16
    },
    container_line:{
        
    },
    line_view:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        marginTop:50
    },
    line:{
        position:'absolute',
        borderBottomWidth:1,
        borderBottomColor:'gray',
        width:'80%'
    },
    text_container_line:{
        position: 'absolute',
        top: '50%',
        left: '57%',
        transform: [{ translateX: -50 }, { translateY: -10 }],
        backgroundColor: 'black',
        padding: 0,
        borderRadius: 10,
    },
    text_line:{
        textAlign: 'center',
        color:'#a39ea3',
        paddingLeft:10,
        paddingRight:10
    },
    footer_container:{
        backgroundColor:'black',
        flexDirection:'row',
        borderWidth:5,
        borderRadius:50,
        borderLeftColor:'#e5473e',
        borderRightColor:'#4484ec',
        borderBottomColor:'#f3c12c',
        borderTopColor:'#44a454',
        width:250,
        alignItems:'center',
        alignSelf:'center',
        padding:8,
        marginTop:50
    },
    google_button:{
        flexDirection:'row',
        alignSelf:'center'
    },
    google_image:{
        flexDirection:'row',
        width:25,
        height:25,
        alignSelf:'center',
        marginLeft:12
    },
    google_text:{
        color:'white',
        alignSelf:'center',
        marginLeft:12,
        fontWeight:'800',
        fontSize:16
    }
});