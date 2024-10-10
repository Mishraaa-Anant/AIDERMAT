import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from './../constants/Colors';

export default function Login() {

    const router=useRouter();
  return (
    <View>
     <Image source={require('./../assets/images/axiom.jpg')}
     style={{
        width:'100%',
        height:520
     }}
     />
     <View style={styles.container}>
        <Text style={{
            fontSize:30,
            fontFamily:'outfit-bold',
            textAlign:'center',
            marginTop:10
        }}>YANTRAGUIDE</Text>

        <Text style={{
            fontFamily:'outfit',
            fontSize:17,
            textAlign:'center',
            color:Colors.GRAY,
            marginTop:20
        }}>YantraGuide is designed to transform your railway travel experience with precise navigation and real-time updates.</Text>

        <TouchableOpacity style={styles.button}
           onPress={()=>router.push('auth/sign-in')}
        >
            <Text style={{
                color:Colors.WHITE,
                textAlign:'center',
                fontFamily:'outfit',
                fontSize:17,
            }}>Sign In With Yantraguide</Text>
        </TouchableOpacity>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
     container:{
        backgroundColor:Colors.WHITE,
        marginTop:-20,
        height:'100%',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        padding:25

     },
     button:{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        marginTop:'20%'
     }

})