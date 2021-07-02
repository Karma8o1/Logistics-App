import React, {useState} from 'react'
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
import {Header,SearchBar} from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const App = ({navigation}) => {
      return (
<View style= {styles.container}>
      <ScrollView style={{flex:1}}>
            
            <View style={{position:'absolute'}}>
            <Image source={require('./images/mbg.jpg')} style={{height:hp('35'),width:wp('100')}} />
            </View>
            <View>
            <Header containerStyle={{backgroundColor:'transparent',alignItems:'center',justifyContent:'center',borderBottomWidth:0}}
            leftComponent={
            <Icon name='menuunfold' size={30} style={{color:'white'}}
            onPress={()=>{navigation.toggleDrawer()}}
            />}
            centerComponent={<Text style={{color:'white',fontWeight:'bold'}}>Home Page</Text>
            
            }
            rightComponent={<View style={{backgroundColor:'white',alignItems:'center',justifyContent:'center',elevation:5,height:40,width:40,borderRadius:50}}>
            <Icon name='plus' size={20} style={{color:'black'}}/>
            </View>
            }
            />

            <View style={{height:hp('18'),width:wp('100'),paddingHorizontal: wp('5')}}>
                  <Text style={{color:'white',fontSize:20, fontWeight:'bold'}}>Track Your Shipment</Text>
                  <Text style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing et. Aenean ligula eget dolor.Lorem ipsum dolor sit amet,</Text>
            </View>

         <View style={{alignItems:'center',marginTop:hp('1'),elevation:1}}>
            <SearchBar round={true} resizeMode={'contain'}
            style={{fontSize:12}}
            placeholder="Search here" 
            iconStyle={{backgroundColor:'#000'}}
            inputStyle={{ borderColor:'transparent'}}
            containerStyle={{
            backgroundColor:'transparent',
            borderTopWidth:0,borderBottomWidth:0,
            height:hp('2'),width:wp('100'),elevation:0}}
            lightTheme={true}
            placeholder='Your Tracking Number eg (Sz-1170)'
            placeholderTextColor={'#000'}
            round={true}
            searchIcon={false}
               
            />
        </View> 
            <View style={{alignItems:'center',top:hp('-22'),elevation:-1}}>
            <Image source={require('./images/banner.jpg')} 
            style={{
            height:hp('70'),
            width:wp('70')
            }}
            resizeMode={'contain'} />
            </ View> 
            <View style={{marginTop:hp('-48'),paddingHorizontal:wp('2')}}>
            <View style={{marginBottom:hp('2')}}>
                  <Text style={{fontSize:20}}>How It Works!</Text>
                  <Text>odo ligula eget dolor. Aenean mssa. Cum sociis natoq penatibus penatibus et nis disodo ligula eget dolor. Aenean mssa.</Text>
                  </ View>
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}>
                  <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                  <View style={{alignItems:'center',justifyContent:'center'
                  ,paddingVertical:hp('3'),paddingHorizontal:hp('1'),marginHorizontal:wp('1')
                  ,borderWidth:1,borderRadius:hp('2')}}>
                  <Icon name = 'user' size={50} style={{color:'#FF9900',marginBottom:hp('1')}}/>
                  <Text style={{fontWeight:'bold'}}>Create Account</Text>
                  </View>

                  <View style={{alignItems:'center',justifyContent:'center'
                  ,paddingVertical:hp('3'),paddingHorizontal:hp('3'),marginHorizontal:wp('1')
                  ,borderWidth:1,borderRadius:hp('2')}}>
                  <Icons name = 'cart' size={50} style={{color:'#89C541',marginBottom:hp('1')}}/>
                  <Text style={{fontWeight:'bold'}}>Place Order</Text>
                  </View>

                  <View style={{alignItems:'center',justifyContent:'center'
                  ,paddingVertical:hp('3'),paddingHorizontal:hp('3'),marginHorizontal:wp('1')
                  ,borderWidth:1,borderRadius:hp('2')}}>
                  <Icons name = 'truck-fast' size={50} style={{color:'#3E4EB8',marginBottom:hp('1')}}/>
                  <Text style={{fontWeight:'bold'}}>We Collect It</Text>
                  </View>

                  <View style={{alignItems:'center',justifyContent:'center'
                  ,paddingVertical:hp('3'),paddingHorizontal:hp('4'),marginHorizontal:wp('1')
                  ,borderWidth:1,borderRadius:hp('2')}}>
                  <Icons name = 'truck-check-outline' size={50} style={{color:'#F50B94',marginBottom:hp('1')}}/>
                  <Text style={{fontWeight:'bold'}}>Delivered</Text>
                  </View>
                  </ View>
            </ScrollView>
            <View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',
            marginTop:hp('2')}}>
            <View style={{flexDirection:'row'}}>
            <View>
            <Image source={require('./images/photo.png')} style={{height:50,width:50,marginHorizontal:wp('2')}} />
            </View>
            <View>
            <Text style={{fontSize:20}}>Best Gallery</Text>
            <Text>Sample Text</Text>
            </View>
            </View>
            <TouchableOpacity onPress={()=>{navigation.navigate('Gallery')}}>
            <View style={{borderWidth:1,borderColor:'#FF9900',paddingHorizontal:wp('5'),paddingVertical:5}} >
                  <Text >See All</Text>
            </View>
            </TouchableOpacity>
            </View>
            </View>
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginVertical:hp('3')}}>
                  <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                  <View style={{alignItems:'center',justifyContent:'center'
                  ,paddingVertical:hp('0'),paddingHorizontal:hp('0'),marginHorizontal:wp('1')}}>
                  <Image source={require('./images/train.png')}  style={{height:150,width:150,borderRadius:10}} />
                  
                  </View>

                  <View style={{alignItems:'center',justifyContent:'center',
                  paddingVertical:hp('0'),paddingHorizontal:hp('0'),marginHorizontal:wp('1')}}>
                  <Image source={require('./images/ship.png')}  style={{height:150,width:150,borderRadius:10}} />
                  
                  </View>
                  <View style={{alignItems:'center',justifyContent:'center'
                  ,paddingVertical:hp('0'),paddingHorizontal:hp('0'),marginHorizontal:wp('1')}}>
                  <Image source={require('./images/Clip.png')}  style={{height:150,width:150,borderRadius:10}} />
                  
                  </View>

                  
                  </ View>
            </ScrollView>
        </View>
        </View>
    </ ScrollView>
</View>
      )
}
const styles = StyleSheet.create({
      container: {

            flex:1,
            flexDirection:'column',
            backgroundColor:'white',
      }
})

export default App;