import React, {useState,useEffect} from 'react'
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

import GetLocation from 'react-native-get-location'
import MapViewDirections from 'react-native-maps-directions';
import MapView, { Polyline,Marker,PROVIDER_GOOGLE } from 'react-native-maps';
import {Header,SearchBar} from 'react-native-elements'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/AntDesign'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const App = ({navigation}) => {
      const [status,setStatus] = useState('Pending')
      const [details,setDetails] = useState({
            name:'Muhammad Umair',address:'52th Street 2st Ave Office NY, United States',
            pkg_code:'SW-95-21',date:'February 14',year: '2019',date_dispatch:'Feb 12',date_deliver:'Feb 14',
      })
      const [location,setLocation] = useState({
         latitude: null,
         longitude: null,
         latitudeDelta: 1.15,
         longitudeDelta: 1.21,
      })

      const currentLocation = async() => {
            
            GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 5000,
      })
            .then((location) => {

            setLocation({
                  latitude: location.latitude,
                  longitude: location.longitude,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0021,
            })
            return location.latitude;
      })
      .catch(error => {
            
            const { code, message } = error;
            console.warn(code, message);
})
      
      }
      const placemarker = async(location) => {
            setCoordinates({
                  latitude: location.latitude,
                  longitude: location.longitude,
                  visible:true,
            })
            setLocation({
                  latitude:location.latitude,
                  longitude:location.longitude,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                  
            })
            return location;
      }
      const [coordinates,setCoordinates] = useState({
            latitude: null,
            longitude: null,
            animating:false
      })
      useEffect(()=>{
           currentLocation()
      },[])

  return(
<>
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
          <View style={styles.container}>
      
            <View style={{backgroundColor:'#4267B2'}}>
            <Header containerStyle={{backgroundColor:'transparent',alignItems:'center',justifyContent:'center',borderBottomWidth:0,height:hp('12')}}
             leftComponent={
            <Icon name='menuunfold' size={35} style={{color:'white',marginTop:hp('0.5')}}
            onPress={()=>{navigation.toggleDrawer()}}
            />}
            centerComponent={<Text style={{color:'white',fontWeight:'bold',fontSize:18,
            marginTop:hp('1')}}>Track Your Order</Text>
            
            }
            rightComponent={<TouchableOpacity>
            <View style={{backgroundColor:'white',alignItems:'center',justifyContent:'center',elevation:5,height:40,width:40,borderRadius:50}}>
            <Icon name='plus' size={20} style={{color:'black'}}/>
            </View>
            </TouchableOpacity>
            }
            />
            </View>
            {location.latitude != null && <View style={{flex:1,width:wp('100'),height:hp('100'),elevation:0}}>
                  <MapView.Animated
                  provider={PROVIDER_GOOGLE}
                  style={styles.map}
                  followsUserLocation={true}
                  zoomEnabled={true}
                  minZoomLevel={5}
                  maxZoomLevel={20}
                  showsMyLocationButton={true}
                  showsUserLocation={true}
                  userLocationPriority={'high'}
                  userLocationUpdateInterval={5000}
                  rotateEnabled={true}
                  //onRegionChangeComplete={()=>currentLocation()}
                  region={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: location.latitudeDelta,
                        longitudeDelta: location.longitudeDelta,
                  }}
                  animateCamera={{region:coordinates},{duration:10000}}
                  onLongPress = {(e)=> {placemarker(e.nativeEvent.coordinate)}}>
                  {coordinates.latitude != null?
     <>
     <Marker coordinate={{ latitude:coordinates.latitude, longitude: coordinates.longitude }} />
  </>:null}
                        
                  </MapView.Animated>
            </View>
                  }
                  
            <View style={{position:'absolute',top:hp('12'),justifyContent:'flex-start',alignSelf:'flex-start'}}>
            
            <SearchBar round={true} resizeMode={'contain'}
            style={{fontSize:14,fontWeight:'bold'}}
            placeholder="Search here" 
            inputStyle={{ borderColor:'white'}}
            containerStyle={{
            backgroundColor:'transparent',
            borderTopWidth:0,borderBottomWidth:0,paddingTop:10,
            width:wp('85'),elevation:0}}
            lightTheme={true}
            placeholder='Track Your Shipment Here'
            placeholderTextColor={'#fff'}
            round={true}
            searchIcon={true}
            showLoading={true}
            />
                  </View>
            
                  <View style={{position:'absolute',bottom:10,
                        height:hp('27'),width:wp('95'),elevation:5,borderRadius:15,
                        backgroundColor:'white'}}>
                              <View style={{flexDirection:'row',
                               justifyContent:'space-between',
                               paddingHorizontal:wp('3'),paddingVertical:hp('1'),
                               borderBottomWidth:1,borderColor:'#e0e0e0'}}>
                                    <View style={{width:wp('70')}}>
                                    <Text style={{fontSize:14}}>{details.date}, {details.year}</Text>
                                    <Text style={{fontSize:20,color:'#2F4191',fontWeight:'bold'}}>{details.name}</Text>
                                    <Text style={{fontWeight:'bold'}}>{details.address}</Text>
                                    <Text >{details.pkg_code}</Text>
                                    
                                    </ View>
                                    <TouchableOpacity>
                                    <View style={{backgroundColor:'#76AB3C',padding:hp('1'),
                                    borderRadius:7,marginTop:wp('1')}}>
                                    <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>{status}</Text>
                                    </View>
                                    </TouchableOpacity>
                              </ View>
                              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',
                              marginBottom:hp('5')}}>
                              
                                    <View>
                                    <Text style={{fontSize:20}}>{details.date_dispatch}  </Text>
                                    <Text>Shipped From</Text>
                                    </View>
                                    <Text style={{fontSize:35,color:'#2F4191'}}> | </Text>
                                    <Image source={require('./icons/status.png')} resizeMode={'contain'}
                                    style={{height:hp('9'),width:wp('18'),marginHorizontal:wp('-3'),marginTop:5}} />
                                    <Text style={{fontSize:35,color:'#2F4191'}}> | </Text>
                                    <View>
                                    <Text style={{fontSize:20}}>  {details.date_deliver}</Text>
                                    <Text>  Delivered</Text>
                                    </View>
                              </ View>
                        </View>
    </View>
    </TouchableWithoutFeedback>
</>

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
      marginVertical:hp('0.5')
      
},
map: {
      ...StyleSheet.absoluteFillObject,
      },
})
export default App