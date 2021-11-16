import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';



const App = ({ navigation }) => {

  return(

    <View style={styles.container}>
            

        <Image style={styles.logo} source={require('./imagenes/logotriminance.png')} />

        <Text style={styles.text}>El dinero</Text> 
        
        <Text style={styles.text1}> de tus sueños,</Text> 
        
        <Text style={styles.text1}> al precio justo.</Text>

        <Text style={styles.text2}>Bienvenidos a Triminance /</Text> 
        
        <TouchableHighlight style={styles.inputext2}>
              <Text style={styles.inputinside} >ACCEDER</Text>
        </TouchableHighlight>

      <View style={styles.con}>
          <View>
          
            <TextInput 
              style={styles.inputext}
              name='user' 
              type="text" 
              placeholder="username" 
              required
            />

            <TextInput
              style={styles.inputext}
              name='password' 
              type="password" 
              placeholder="password" 
              required
            />

            <TouchableHighlight style={styles.inputext2}>
              <Text style={styles.inputinside} >ACCEDER</Text>
            </TouchableHighlight>

            <Text style={styles.center} >He olvidado mi contraseña</Text>

          </View>

      </View>

    </View>     

  );
}

export default App;

const styles = StyleSheet.create({
  logo:{
    height:70,
    width:70,
    marginTop:'15%',
    marginBottom:'13%',
    marginLeft:'9%',
  },

  container:{
    flex:1,
    backgroundColor:'white'
    
  },
  con:{
    marginLeft:'9%',
    marginRight:'15%',
  },

  text:{
    padding:0,
    marginLeft:'11%',
    fontSize:40,
  },
  
  text1:{
    padding:0,
    marginLeft:'9%',
    fontSize:40,
  },

  text2:{
    padding:0,
    marginLeft:'8%',
    marginTop:'9%',
    fontSize:20,
  },


  inputext:{
    borderStyle:'solid',
    borderColor:'#D5D5D5',
    borderWidth:1,
    borderRadius:50,
    textAlign:'left',
    marginTop:23,
    padding:6,
    paddingLeft:10

  },

  
  inputext2:{
    borderStyle:'solid',
    backgroundColor:'#EA0451',
    borderRadius:50,
    marginTop:20
    
  },
  
  inputinside:{
    textAlign:'center',
    padding:9
  },

  center:{
    textAlign:'center',
    marginTop:'7%',
    fontSize:20
  },

})
