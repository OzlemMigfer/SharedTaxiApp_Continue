import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  },
  body_container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:90,
  },
  point_container:{
    flexDirection:'row',
    width:70,
    alignSelf:'center',
    marginRight:25
  },
  ratingText: {
    fontSize: 20,
    color:'white',
    marginRight:7,
    marginTop:2,
    fontWeight:'bold'
  },
  info_container:{
    marginLeft:35,
  },
  name_text:{
    color:'white',
    fontSize:25,
    fontWeight:'bold',
  },
  number_text:{
    color:'#6f85ab',
    fontSize:17,
    marginTop:10
  },
  footer_container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    backgroundColor:'#2D3748',
    width:300,
    height:200,
    borderRadius:20,
    borderWidth:2,
    borderColor:'#ffd241',
    marginTop:140
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white'
  },
  starsContainer: {
    flexDirection: 'row',
  },
  stars:{
    marginRight:5
  },
  button:{
    backgroundColor:'#3e2ab8',
    borderRadius:10,
    width:100,
    marginTop:20
  },
  button_text:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
    padding:10,
    alignSelf:'center'
  },
});
