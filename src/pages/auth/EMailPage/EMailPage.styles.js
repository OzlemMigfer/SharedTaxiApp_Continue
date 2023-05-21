import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  body_container: {
    marginTop: 100,
  },
  header: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 25,
  },
  input: {
    backgroundColor: 'black',
    width: 280,
    height: 50,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: '#f3c12c',
    marginBottom: 10,
    paddingLeft: 15,
    color: '#d6d6cd',
  },
  footer_container: {
    marginTop: 380,
    alignSelf: 'flex-end',
    marginRight: 25,
    flexDirection:'row'
  },
  button_next: {
    backgroundColor: '#3e2ab8',
    alignItems: 'center',
    padding: 10,
    width: 100,
    marginTop: 20,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  button_next_text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 22,
    borderLeftWidth: 35,
    borderBottomWidth: 22,
    borderTopColor: 'transparent',
    borderRightColor:'transparent',
    borderBottomColor:'transparent',
    borderColor:'#3e2ab8',
    marginTop:20
  },
});
