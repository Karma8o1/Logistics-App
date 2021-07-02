import React from 'react'
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
  Keyboard,
  FlatList
} from 'react-native';
import {Header} from 'react-native-elements'
import { Hoshi } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const App = ({navigation}) => {
  return(
    <View style={styles.container}>
      <ScrollView>     
            <>
            <View style={{backgroundColor:'#4267B2'}}>
            <Header containerStyle={{backgroundColor:'transparent',alignItems:'center',justifyContent:'center',borderBottomWidth:0,height:hp('13')}}
             leftComponent={
            <Icon name='menuunfold' size={35} style={{color:'white',marginTop:hp('1')}}
            onPress={()=>{navigation.toggleDrawer()}}
            />}
            centerComponent={<Text style={{color:'white',fontWeight:'bold',fontSize:18,
            marginTop:hp('1')}}>Contact Us</Text>
            
            }
            rightComponent={<TouchableOpacity onPress={()=>{navigation.navigate('Quote')}}>
            <View style={{backgroundColor:'white',alignItems:'center',justifyContent:'center',elevation:5,height:40,width:40,borderRadius:50}}>
            <Icon name='plus' size={20} style={{color:'black'}}/>
            </View>
            </TouchableOpacity>
            }
            />
            </View>
      <KeyboardAvoidingView>
            <View style={styles.panel}>
                  
                        <View>
                              <Image source={require('./images/truck.png')} style={{height:50,width:50}} />
                              <Text style={{fontSize:20,fontWeight:'bold'}}>Get In Touch</Text>
                              <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</Text>
                        </View>
                  <View >
                  <Hoshi
                                    style={styles.textinput}
                                    username
                                    label={'Your Name'}
                                    autoCompleteType='off'
                                    borderColor={'#2F4191'}
                                    borderHeight={3}
                                    inputPaddingtop={14}
                                    backgroundColor={'#fff'}
                                    secureTextEntry={false}
                                    />
                  <Hoshi
                                    style={styles.textinput}
                                    username
                                    label={'Subject'}
                                    autoCompleteType='off'
                                    borderColor={'#2F4191'}
                                    borderHeight={3}
                                    inputPaddingtop={14}
                                    backgroundColor={'#fff'}
                                    secureTextEntry={false}
                                    />
                  <Hoshi
                                    style={styles.textinput}
                                    username
                                    label={'Email Address'}
                                    autoCompleteType='off'
                                    borderColor={'#2F4191'}
                                    borderHeight={3}
                                    inputPaddingtop={14}
                                    backgroundColor={'#fff'}
                                    secureTextEntry={false}
                                    />

                  <Hoshi
                                    style={styles.textinput}
                                    username
                                    label={'Select Location'}
                                    autoCompleteType='off'
                                    borderColor={'#2F4191'}
                                    borderHeight={3}
                                    inputPaddingtop={14}
                                    backgroundColor={'#fff'}
                                    secureTextEntry={false}
                                    />
                  <View style={{borderWidth:0,height:hp('15')}}>
                        <Hoshi
                                    style={styles.textinput}
                                    username
                                    label={'Your Message'}
                                    autoCompleteType='off'
                                    borderColor={'#2F4191'}
                                    borderHeight={3}
                                    inputPaddingtop={14}
                                    backgroundColor={'#fff'}
                                    secureTextEntry={false}
                                    maxHeight={60}
                                    numberOfLines={3}
                                    />
                                    </View>
            </View>
            
                  <TouchableOpacity>
                        <View style={{alignItems:'center',justifyContent:'center',marginBottom:hp('5'),
                              width:wp('80'),height:hp('5'),backgroundColor:'#2F4191',elevation:5,
                              borderRadius:50}}>
                        <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>Submit Request</Text>
                        </View>
                  </TouchableOpacity>
            
            </View>
      </KeyboardAvoidingView>
            </>
      </ ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#e0e0e0',
    alignItems:'center'
  },
  panel: {
        flex:1,
        width:wp('95'),
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'white',
        marginVertical:hp('3'),
        padding:hp('2'),
        elevation:5,
        borderRadius:10
        
  },
  textinput: {
      width:wp('80'),
      alignItems:'center',
      marginVertical:hp('1.5')
      
}
})
export default App