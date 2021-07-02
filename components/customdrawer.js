import React, {useState,useContext} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Switch,
  ImageBackground
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const App = (props) => {
      
      return (
    <View>
    <ImageBackground source={require('./images/grad.jpg')} style={styles.image}>    
    <SafeAreaView style={{flex: 1}}>
      <View style={{alignItems:'center'}}>
      <Image
        source={{uri:'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'} }
        style={styles.sideMenuProfileIcon}
      />
      <Text style={{color:'white',fontWeight:'bold'}}>Sample@gmail.com</Text>
      </View>
      <View style= {{flex:1,justifyContent:'center',marginTop:hp('15')}} >
      <DrawerContentScrollView {...props}
      showsVerticalScrollIndicator={false} >
        <DrawerItemList {...props} labelStyle={{color: '#ffffff'}}/>
        <View style={{paddingHorizontal:wp('2'),alignItems:'center',flexDirection:'row',marginTop:hp('26')}}>
        <Icon name='logout' size={30} color={'#999'}/>
        <Text style={{color:'white'}}>Log Out</Text>
        </View>
        <View style={styles.customItem}>
        </View>
        
      </DrawerContentScrollView>
      </View>
    </SafeAreaView>
</ImageBackground>
</ View>
  );
};

const styles = StyleSheet.create({
  
  sideMenuProfileIcon: {
      borderRadius:50,
      marginTop:hp('10'),
      alignSelf:'center',
      marginHorizontal:wp('10'),
      height:100,
      width:100,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  image: {
    justifyContent: "center",
    height:hp('100'),
//     marginTop:hp('-6.2'),
  },
});

export default App;