import React, {useState} from 'react'
//Elements import
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,  
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { CheckBox } from 'react-native-elements'
//Social Logins
import {GoogleSignin,GoogleSigninButton,statusCodes,} 
from '@react-native-google-signin/google-signin';
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';
//Effects and Icon import
import { Hoshi } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/MaterialIcons'

//Form validation imports
import * as yup from 'yup';
import { Formik } from 'formik';
//Responsive screen imports
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const App = ({navigation}) => {
      const [checked, setChecked] = useState(false)
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
                              <Text style={{fontSize:20,fontWeight:'bold'}}>Login Your Account</Text>
                              <Text>Sample Text should be replaced before publishing the application.</Text>
                        </View>
                              <View style={{marginVertical:hp('2')}}>
                                    <View style={{marginTop:hp('0.5'),borderRadius:wp('2'),alignItems:'center',justifyContent:'center'}}>
                                          <Hoshi
                                    style={styles.textinput}
                                    username
                                    label={'Full Name'}
                                    autoFocus={true}
                                    autoCompleteType='off'
                                    borderColor={'#2F4191'}
                                    borderHeight={3}
                                    inputPaddingtop={14}
                                    backgroundColor={'#fff'}
                                    secureTextEntry={false}
                                    />
                              </View>
                              
                              <View style={{alignItems:'center',justifyContent:'center',marginVertical:hp('1'),borderRadius:wp('2')}}>
                              <Hoshi
                                    style={styles.textinput}
                                    email
                                    label={'Email'}
                                    autoCompleteType='off'
                                    borderColor={'#2F4191'}
                                    borderHeight={3}
                                    inputPadding={14}
                                    backgroundColor={'#fff'}
                                    secureTextEntry={false}
                                    />
                              </View>
                              <View style={{alignItems:'center',justifyContent:'center',marginVertical:hp('1'),borderRadius:wp('2')}}>
                              <Hoshi
                                    style={styles.textinput}
                                    label={'Password'}
                                    autoCompleteType='off'
                                    borderColor={'#2F4191'}
                                    borderHeight={3}
                                    inputPadding={14}
                                    backgroundColor={'#fff'}
                                    secureTextEntry={true}
                                    />
                              </View>
                              <View style={{alignItems:'center',justifyContent:'center',marginTop:hp('1'),marginBottom:hp('2'),borderRadius:wp('2')}}>
                              <Hoshi
                                    style={styles.textinput}
                                    label={'Confirm Password'}
                                    autoCompleteType='off'
                                    borderColor={'#2F4191'}
                                    borderHeight={3}
                                    inputPadding={14}
                                    backgroundColor={'#fff'}
                                    secureTextEntry={true}
                                    />
                              </View>
                              <View style={{flex:1, flexDirection:'row', justifyContent:'space-between',alignItems:'center',marginRight:wp('2')}}>
                              
                              <CheckBox
                              title='I Read Terms & Conditions'
                              checked={checked}
                              onPress={()=>{check()}}
                              uncheckedColor='purple'
                              checkedColor='white'
                              checkedIcon={<Icon name='check-box' size={15} />}
                              uncheckedIcon={<Icon name='check-box-outline-blank' size={15} />}
                              />
                              
                              </View>
                              <View style={styles.rest}>
                        <View style={{flex:1}}>
                              <TouchableOpacity style={{marginVertical:hp('1.5'),height:hp('5'),borderRadius:wp('5'),
                              backgroundColor:'#2F4191',elevation:5,
                              alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{color:'white',fontWeight:'bold'}}>Login Now</Text>
                              </TouchableOpacity>
                              <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',marginVertical:hp('1')}}>
                              <View style={{height:wp('1'), width:wp('25'),
                              borderRadius:wp('5'),backgroundColor:'#ededed',}}></View>
                              <Text style={{fontWeight:'bold',marginHorizontal:wp('3')}} >OR</Text>
                              <View style={{height:wp('1'),width:wp('25'),
                              borderRadius:wp('5'),backgroundColor:'#ededed',}}></View>
                              </View>
                              
                              <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                              <GoogleSigninButton
                                    style={{ width: wp('40'), height: 40 }}
                                    size={GoogleSigninButton.Size.Standard}
                                    color={GoogleSigninButton.Color.Dark}
                                    onPress={()=>console.log('Pressed')}
                                    disabled={false} />
                              
                              <LoginButton 
                              style={{width: wp('40'), height: 35, alignItems:'center',elevation:3}}
                                    onLoginFinished={
                                    (error, result) => {
                                            if (error) {
                                              console.log("login has error: " + result.error);
                                                } else if (result.isCancelled) {
                                                    console.log("login is cancelled.");
                                                } else {
                                                    AccessToken.getCurrentAccessToken().then(
                                                      (data) => {
                                                        console.log(data.accessToken.toString())
                                                            })
                                                      }
                                                }
                                          }
                                    onLogoutFinished={() => console.log("logout.")}/>
                                    </View>
                              </View>
                              
                        </View>
                        
                  </View>
                  
            </View>
                        <View style={{flex:1,flexDirection:'row',marginVertical:hp('2'),
                              alignItems:'center',justifyContent:'center'}}>
                              <Text>Already Signed Up?</Text>
                              <TouchableOpacity>
                              <Text style={{color:'blue',fontWeight:'bold'}}> Click Login</Text>
                              </TouchableOpacity>
                              </View>
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
      width:wp('80'),
}
})
export default App;