import React, {useState} from 'react'
import * as yup from 'yup';
import { Formik } from 'formik';
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

import { CheckBox } from 'react-native-elements'
import {GoogleSignin,GoogleSigninButton,statusCodes,} 
from '@react-native-google-signin/google-signin';
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';
import Icon from 'react-native-vector-icons/MaterialIcons'
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

      //For validation of form

      const loginValidationSchema = yup.object().shape({
      email:yup
      .string()
      .email('Email Format Incorrect')
      .required('Please enter email'),
      pass:yup
      .string()
      .min(8,({min})=>'Password too short')
      .required('Password is required')
});
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
                        <Formik
                              //validationSchema={loginValidationSchema}
                              initialValues={{
                              email:'',
                              pass:'',
                              }}
                              onSubmit={(values)=>{
                              navigation.replace('Drawer');
                              }}>

                              {(props)=>(
                              <>
        
                  <View style={styles.inputs}>
                        <View style={{width:wp('70')}}>
                              <Text style={{fontSize:20,fontWeight:'bold'}}>Login Your Account</Text>
                              <Text>Sample Text should be replaced before publishing the application.</Text>
                        </View>
                              <View style={{marginVertical:hp('2')}}>
                                    <View style={{marginTop:hp('1'),borderRadius:wp('2'),alignItems:'center',justifyContent:'center'}}>
                                          <Hoshi
                                    style={styles.textinput}
                                    email
                                    label={'Email'}
                                    autoFocus={true}
                                    borderColor={'#2F4191'}
                                    borderHeight={3}
                                    inputPadding={16}
                                    backgroundColor={'#fff'}
                                    secureTextEntry={false}
                                    onChangeText={props.handleChange('email')}
                                    onBlur={props.handleBlur('email')}
                                    value={props.values.email.trim()}
                                    />
                                    {(props.errors.email && props.touched.email) &&
                                          <Text style={styles.error}>{props.errors.email}</Text>}
                              </View>
                              
                              <View style={{alignItems:'center',justifyContent:'center',marginVertical:hp('1'),borderRadius:wp('2')}}>
                              <Hoshi
                                    style={styles.textinput}
                                    label={'Password'}
                                    autoCompleteType='off'
                                    borderColor={'#2F4191'}
                                    borderHeight={3}
                                    inputPadding={16}
                                    backgroundColor={'#fff'}
                                    secureTextEntry={true}
                                    onChangeText={props.handleChange('pass')}
                                    onBlur={props.handleBlur('pass')}
                                    value={props.values.pass}
                                    />
                                    {(props.errors.pass && props.touched.pass) &&
                                    <Text style={styles.error}>{props.errors.pass}</Text>}
                              </View>
                              <View style={{flex:1, flexDirection:'row', justifyContent:'space-between',alignItems:'center',marginHorizontal:wp('0')}}>
                              <View>
                              <CheckBox
                              title='Remember Me'
                              checked={checked}
                              onPress={()=>{check()}}
                              uncheckedColor='white'
                              checkedIcon={<Icon name='check-box' size={15} />}
                              uncheckedIcon={<Icon name='check-box-outline-blank' size={15} />}
                              />
                              </View>
                              <TouchableWithoutFeedback onPress={()=>{navigation.navigate('ForgetPassword')}}>
                              <Text style={{color:'#555',fontWeight:'bold'}}>Forget Password ?</Text>
                              </TouchableWithoutFeedback>
                              </View>
                              <View style={styles.rest}>
                        <View style={{flex:1}}>
                              <TouchableOpacity onPress={props.handleSubmit}
                              style={{marginVertical:hp('1.5'),height:hp('5'),borderRadius:wp('5'),
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
             </>)}
          </Formik>
                        <View style={{flex:1,flexDirection:'row',marginVertical:hp('1'),
                              alignItems:'center',justifyContent:'center'}}>
                              <Text>Already Signed Up?</Text>
                              <TouchableOpacity>
                              <Text style={{color:'blue',fontWeight:'bold'}}>Click Login</Text>
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
      color:'#000',
      paddingHorizontal:wp('3'),
      width:wp('80'),
      borderRadius:wp('2')
},
error: {
      color:'red',
      fontWeight:'bold',
      fontSize:12
}
})
export default App;