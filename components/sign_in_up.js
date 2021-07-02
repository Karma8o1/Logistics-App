import React from 'react'
import { Button } from 'react-native-elements';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const App = ({navigation}) => {
      return (
            <View style={{alignItems:'center'}}>
            <View style={{position:'absolute'}}>
            <Image source={require('./images/background.jpg')} style={{height:hp('100'),width:wp('100')}} />
            </View>

            <View style={{position:'absolute',bottom:hp('-95')}}>
                  <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                  <View style={styles.btn}>
                        <Text style={{color:'white',fontSize:17}}>Sign In</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}}>
                  <View style={styles.btn}>
                        <Text style={{color:'white',fontSize:16}}>Sign Up</Text>
                  </View>
                  </TouchableOpacity>
            </View>
            </View>
      )
}
const styles = StyleSheet.create({
      btn:{
            width:wp('85'),
            height:hp('5'),
            borderRadius:wp('10'),
            marginVertical:hp('2'),
            borderWidth:1,
            borderColor:'#401043',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)'

      }
})
export default App