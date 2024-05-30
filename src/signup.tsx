import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface SignupProps {
    navigation: any; // Change the type according to your navigation type
  }
  
  const Signup: FC<SignupProps> = ({ navigation }) => {
    const handleclick = () => {
      navigation.navigate("Login");
    };
    return(
        <View style={styles.pcontainer} >
            <Text style={styles.container}>Sign up</Text>
            <Text style={styles.cred}>Create your account</Text>
            <View style={styles.username} >
            <TextInput 
            placeholder="Username"
            />
            </View>
            <View style={styles.username} >
            <TextInput 
            placeholder="Email"
            />
            </View>
            <View style={styles.pssd} >
            <TextInput 
            placeholder="Password"
            />
            </View>
            <View style={styles.pssd} >
            <TextInput 
            placeholder="Confirm Password"
            />
            </View>
            <View  style={styles.logincontainer}>
                <Text style={styles.logintxt}>Sign up</Text>
            </View>
            <Text style={styles.ortxt}>or</Text>
            <View  style={styles.signwithgooglecontainer}>
                <Text style={[styles.logintxt,{color:'#AA4EB8'}]}>Sign In with Google</Text>
            </View>
            <View style={styles.signuptxtcontainer} >
            <Text style={styles.accttxt} >Already have an account?</Text>
            <Text onPress={handleclick} style={[styles.accttxt,{color:'#9B29B1',fontWeight:'bold',marginStart:'3%'}]} >Login</Text>
            </View>
        </View>
    )

}

export default Signup

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
        fontSize:18,
        fontWeight:'bold',
        color:'#898989',
        marginTop:'2%'
    },
    username:{
        width:'80%',
        backgroundColor:'#F0E4F2',    
        borderRadius:10,
        alignSelf:'center',
        marginTop:'3%',
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
    ortxt:{
        alignSelf:'center',
        marginTop:'3%',
        fontSize:18,
        fontWeight:'bold',
        color:'#7A7A7A'
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
        color:'#666666',
        fontWeight:'500'
    },
    signwithgooglecontainer:{
        width:'75%',
        borderColor:'#9B29B1',
        borderRadius:20,
        marginTop:'5%',
        alignSelf:"center",
        height:50,
        borderWidth:2
    },
    
    
});