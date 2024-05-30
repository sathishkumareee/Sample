import React ,{FC, useContext,useState}from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LoginContext } from "./context/logincontext";

interface LoginProps {
    navigation: any; // Change the type according to your navigation type
  }
  
  const Login: FC<LoginProps> = ({ navigation }) => {
    const {user,setuser}=useContext(LoginContext)
    const [text,setText]= useState('')
    const handleclick = () => {
      navigation.navigate("Signup");

    };

    const handleLogin=()=>{
        navigation.navigate('Drawer')
        setuser(text.toString())
        setText('')
    }
    return(
        <View style={styles.pcontainer} >
            <Text style={styles.container}>Welcome Back</Text>
            <Text style={styles.cred}>Enter Your Credential to login</Text>
            <View style={styles.username} >
            <TextInput 
            placeholder="Enter Username"
            value={text}
            onChangeText={setText}
            />
            </View>
            <View style={styles.pssd} >
            <TextInput 
            placeholder="Enter Password"
            />
            </View>
            <TouchableOpacity onPress={handleLogin} style={styles.logincontainer}>
                <Text style={styles.logintxt}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.frgttxt}>Forgot Password?</Text>
            <View style={styles.signuptxtcontainer} >
            <Text style={styles.accttxt} >Dont have an account?</Text>
            <Text onPress={handleclick} style={[styles.accttxt,{color:'#9B29B1',fontWeight:'bold',marginStart:'3%'}]} >Sign Up</Text>
            </View>
            <Text style={[styles.accttxt,{color:'#9B29B1',fontWeight:'bold',marginStart:'3%'}]} > {user}</Text>
        </View>
    )
}



export default Login

const styles = StyleSheet.create({
    pcontainer:{
        alignContent:'center',
        marginTop:'10%'
    },
    container: {
        textAlign:'center',
        fontSize:40,
        fontWeight:'bold',
        color:'black',
    },
    cred: {
        textAlign:'center',
        fontSize:14,
        fontWeight:'bold',
        color:'#898989',
        marginTop:'2%'
    },
    username:{
        width:'80%',
        backgroundColor:'#F0E4F2',    
        borderRadius:10,
        alignSelf:'center',
        marginTop:'10%',
        height:50,
        justifyContent:'center'
    },
    pssd:{
        width:'80%',
        backgroundColor:'#F0E4F2',    
        borderRadius:10,
        alignSelf:'center',
        marginTop:'3%',
        height:50,
        justifyContent:'center'
    },
    logincontainer:{
        width:'75%',
        backgroundColor:'#9B29B1',
        borderRadius:20,
        marginTop:'5%',
        alignSelf:"center",
        height:50
    },
    logintxt:{
        textAlign:'center',
        margin:10,color:'white',
        fontSize:20,fontWeight:'bold'
    },
    frgttxt:{
        alignSelf:'center',
        marginTop:'10%',
        fontSize:18,
        fontWeight:'bold',
        color:'#983DA7'
    },
    signuptxtcontainer:{
        width:'70%',
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:'8%'
    },
    accttxt:{
        fontSize:18,
        color:'#767676',
        fontWeight:'500'
    }
    
    
});