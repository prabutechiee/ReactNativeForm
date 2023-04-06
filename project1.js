import { View,StyleSheet,TextInput,Button,Text,Image } from "react-native";
import { useState } from "react";
import {db} from '../config1';
import { ref,set } from "firebase/database";
import App from "../random";

const AddData =({navigation})=>{
  const[name,setName]=useState("");
  const[collegename,setCollegename]=useState("");
  const[fathername,setFathername]=useState("");
  const[schoolname,setschoolname]=useState("");
  const[dob,setDob]=useState("");
 
const dataAddon =()=>{
  set (ref(db , 'application/' +name),
  {
  name:name,
  collegename:collegename, 
  fathername:fathername,
  schoolname:schoolname,
  dob:dob,
  
  });
  setName('');
  setCollegename('');
  setFathername('');
  setschoolname('');
  setDob('');
  
}
  return(

    <View style={styles.container}>
      <Text style={styles.header}>APPLICATION DATA FORM</Text>
      <App></App>
      <Image
      source={{uri:'https://lh3.googleusercontent.com/p/AF1QipNrEw3GCLWmH54h60VwAdYUgXE0MLqLaHDduD-v=s1360-w1360-h1020'}}
      style={{width:150,height:150,marginLeft:500}}
      />
     
      <TextInput
      placeholder="Student name"
      value={name}
      onChangeText={(text)=>setName(text)}
      style={styles.input}
      />
       <TextInput
      placeholder="College name"
      value={collegename}
      onChangeText={(text)=>setCollegename(text)}
      secureTextEntry
      style={styles.input}
      />
       <TextInput
      placeholder="Father name"
      value={fathername}
      onChangeText={(text)=>setFathername(text)}
      style={styles.input}
      />
       <TextInput
      placeholder="School name"
      value={schoolname}
      onChangeText={(text)=>setschoolname(text)}
      style={styles.input}
      />
       <TextInput
      placeholder="Date of birth"
      value={dob}
      onChangeText={(text)=>setDob(text)}
      style={styles.input}
      />
      <Button 
      title="sumbit"
      color='red'
      onPress={dataAddon}
      />
       <Button 
       title ='Review'
       onPress ={()=>navigation.navigate("RECHECKING")}
       color='green'
      />
    </View>
  ) 
}
  const styles=StyleSheet.create({
   
  header: {
    fontSize: 36,
    padding: 1,
    marginTop: 20,
    fontWeight:'Bold',
    textAlign: "center",
    color:'green'
    },
    input: {
      borderwidth :1,
      height: 50,
      borderColor: "#000000",
      borderBottomWidth: 1,
      paddingRight: 30,
      margin :10,
      padding:10, 
      borderRadius:10,
      backgroundColor:'skyblue',
      fontWeight:'bold'
    },
    
})
export default AddData;