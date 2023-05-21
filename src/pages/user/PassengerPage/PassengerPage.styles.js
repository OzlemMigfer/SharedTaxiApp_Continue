import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'black'
  },
  body_container: {
    backgroundColor:'#1A202C',
    borderRadius:28,
    marginTop:20,
    marginBottom:30,
    borderWidth:3,
    borderBottomColor:'#ffd017',
  },
  header_text: {
    color:'#ffd017',
    padding:50,
    fontSize:22,
    fontWeight:'bold',
    alignSelf:'center'
  },
  footer_container: {
    backgroundColor:'#2D3748',
    borderRadius:50,
    marginTop:20,
    justifyContent:'space-between',
    flexDirection:'row',
    borderWidth:1,
    borderColor:'#FEBF5E'
  },
  passenger_button: {
    flexDirection:'row',
  },
  passenger_text: {
    padding:25,
    color:'white',
    fontSize:18,
    fontWeight:'bold',
    width:280,
    marginLeft:5
  },
  phone_button:{
    marginRight:30,
    alignSelf:'center'
  },
  phone_logo:{
    width:40,
    height:40,
  },
});
