import React, {useState} from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import CustomDesign from './customdrawer'
import HomeScreen from './home'
import Profile from './profile'
import About from './about'
import Blog from './blog'
import Contact from './contact'
import Tracking from './track'
import {backgroundImage, LogBox} from 'react-native'

import Icon from 'react-native-vector-icons/Fontisto'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const App = () => {
      const Drawer = createDrawerNavigator();
      LogBox.ignoreLogs(['Reanimated 2']);
      return (
            <Drawer.Navigator initialRouteName='HomeScreen' 
            drawerStyle={{
            width:wp('80'),
            justifyContent:'flex-end',

                  }}
            drawerContentOptions={
                  {itemStyle: {flex:1,marginVertical: 5, borderBottomWidth:2,borderColor:'#999'},
                  }}
            drawerContent={(props)=> <CustomDesign {...props}/>}>
                  <Drawer.Screen name='HomeScreen' component={HomeScreen} options={{
           title: 'Home',
           drawerIcon: ({focused, size}) => (
              <Icon
                 name="home"
                 size={20}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}/>
                  <Drawer.Screen name='Profile' component={Profile}
                  options={{
           title: 'Profile',
           drawerIcon: ({focused, size}) => (
              <Icon
                 name="male"
                 size={20}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}/>
                  <Drawer.Screen name='About' component={About}
                  options={{
           title: 'About Us',
           drawerIcon: ({focused, size}) => (
              <Icon
                 name="podcast"
                 size={20}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}/>
                  <Drawer.Screen name='Blog' component={Blog} options={{
           title: 'Blog',
           drawerIcon: ({focused, size}) => (
              <Icon
                 name="blogger"
                 size={20}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}/>
        <Drawer.Screen name='Contact Us' component={Contact} options={{
           title: 'Contact Us',
           drawerIcon: ({focused, size}) => (
              <Icon
                 name="phone"
                 size={20}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}/>

        <Drawer.Screen name='Tracking' component={Tracking} options={{
           title: 'Track Your Order',
           drawerIcon: ({focused, size}) => (
              <Icon
                 name="map"
                 size={20}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}/>

            </Drawer.Navigator>
      )
}


export default App;