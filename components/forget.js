import React, {useState} from 'react'
import { Hoshi } from 'react-native-textinput-effects';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const App = ({navigation}) => {
      const [email,setEmail] = useState('')
      const [checked, setChecked] = useState(true)
      const check = () => {
            if (checked == true){
                  setChecked(false)
            }
            else{
                  setChecked(true)
            }
      }
      return (
            
            <SafeAreaView style={styles.container} onPress={()=>{Keyboard.dismiss()}}>
            <View style={{position:'absolute',top:0}}>
            <Image source={require('./images/background.jpg')} style={{height:hp('100'),width:wp('100')}}/>
            </View>
            <View style={{position:'absolute',flex:1,top:hp('4'),width:wp('92'),backgroundColor:'white',borderRadius:hp('1.5')}}>
                  <View style={styles.logo}> 
                        <Image source={require('./images/logo.png')} style={{height:hp('22'),width:wp('50')}} resizeMode={'contain'} />
                  </View>
                  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                  <ScrollView style={{paddingHorizontal:wp('3'),width:wp('92'),height:hp('69')}}>
                        <View>
                              <View style={{justifyContent:'flex-start',alignItems:'flex-start'}}>
                              <Image source={require('./images/truck.png')} style={{height:hp('7'),width:wp('15')}}
                              resizeMode={'contain'}/>
                              
                              </View>
                        <View style={styles.inputs}>
                        <View style={{width:wp('70')}}>
                              <Text style={{fontSize:20,fontWeight:'bold'}}>Forget Your Password</Text>
                              <Text>Please Enter Your Email AddressLorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Below.</Text>
                        </View>
                              <View style={{marginVertical:hp('2')}}>
                                    <View style={{marginTop:hp('1'),borderRadius:wp('2'),alignItems:'center',justifyContent:'center'}}>
                                          <Hoshi
                                    style={styles.textinput}
                                    label={'Email Address'}
                                    autoFocus={true}
                                    borderColor={'#2F4191'}
                                    borderHeight={3}
                                    inputPadding={16}
                                    backgroundColor={'#fff'}
                                    secureTextEntry={true}
                                    />
                              </View>
                              
                              
                              
                        <View style={{flex:1,justifyContent:'center',marginHorizontal:wp('2'),marginVertical:hp('3')}}>
                              <TouchableOpacity style={{marginVertical:hp('1.5'),height:hp('5'),borderRadius:wp('5'),
                              backgroundColor:'#2F4191',elevation:5,
                              alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{color:'white',fontWeight:'bold'}}>Login Now</Text>
                              </TouchableOpacity>
                        </View>
                        
                  </View>

            </View>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <View style={{alignItems:'center',justifyContent:'center',alignSelf:'center',
                  height:50,width:50,borderRadius:50,backgroundColor:'#2F4191'}}>
                  
                <Icon name='doubleleft' size={30} color='white' />
                 
            </View>
            </TouchableOpacity>            
      </View>
                  
    </ScrollView>
   </ KeyboardAvoidingView>
 </View>
</SafeAreaView>
      )
}
const styles = StyleSheet.create({
container :{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
},
logo: {
      alignItems:'center'
},
textinput: {
      color:'#000',
      paddingHorizontal:wp('3'),
      width:wp('80'),
      borderRadius:wp('2')
}
})
export default App;