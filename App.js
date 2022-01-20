import React from 'react';
import { TextInput,StyleSheet, Text, View, TouchableOpacity,Button} from 'react-native';

export default function App() {
  return (
    <>
    <View style={styles.container}>
    <Text style={{ fontSize: 40, color: 'black', textDecorationStyle: "solid", fontWeight: "500" }}> .......</Text>
    <Text style={{ fontSize: 50, color: '#FF4500', marginTop: 12, fontStyle: "italic", fontWeight: "bold"}}> Zayreads </Text>
    <Text style={{ fontSize: 40, color: 'black', textDecorationStyle: "solid", fontWeight: "500"}}> .......</Text>

    <View style={styles.login}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          
        />
      </View>

      <View style={styles.login}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
         
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.Forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.login_button}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent: "center",
    backgroundColor: "#FFF0F5",
  },

  login: {
    color:'#000000',
    width: "70%",
    height: 45,
    borderColor: '#FF6B2F',
    borderRadius: 30,
    marginBottom: 30,
    backgroundColor: '#008B8B',

    alignItems:"center",
},
  TextInput: {
    height:50,
    flex:1,
    padding:10,
    marginLeft:20,
  },

  Forgot: {
    height: 30,
    marginBottom: 30,
  },

  login_button: {
  width: "80%",
  borderRadius: 25,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 40,
  backgroundColor: "#FF1493",
},
  })

