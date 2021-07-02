import React, {useState,useEffect} from 'react';

import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {LinearProgress} from 'react-native-elements';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const App = ({navigation}) => {
      const [load,setLoad] = useState(0)
      const loading = async() => {
            setTimeout(()=>{
                  navigation.navigate('Sign')
            },2000)
      }
      const bar = () => {
            for (let i=0;i<=1.1;i+=0.01){
                  setLoad(i)
            }
      }

      useEffect(()=>{
            loading()
            bar() 
      })
      
      return ( 
            <SafeAreaView style={styles.container}>
                  <View style={{flex:1,position:'absolute',top:0,left:0}}>
                        <Image source={require('./images/splash.jpg')} style={{height:hp('90'),width:wp('100')}} />
                  </View>
                  <View style={{position:'absolute',bottom:hp('2'),alignItems:'center'}}>
                  {/* <Text style={{marginVertical:hp('2'),fontWeight:'bold'}} >Loading....</Text> */}
                  <LinearProgress style={{elevation:3,borderRadius:wp('50'),width:wp('70'),height:hp('1')}} 
                  color='#0096FF' variant={'determinate'} value={load} />
                  </View>
            </SafeAreaView>
      )
}
const styles = StyleSheet.create({
      container: {
            flex:1,
            backgroundColor:'white',
            alignItems:'center',
            justifyContent:'center'
      }
})
export default App;