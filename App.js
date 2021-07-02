import React from 'react';
import type {Node} from 'react';
import Splash from './components/splash'
import Sign from './components/sign_in_up'
import Signup from './components/signup'
import Login from './components/login'
import Drawer from './components/drawer'
import ForgetPassword from './components/forget'
import Details from './components/blogdetails'
import Gallery from './components/gallery'
import Quote from './components/quote'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const App: () => Node = () => {
  const Stack = createStackNavigator();
  return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen  name = 'Splash' component={Splash} options={{headerShown:false}}/>
          <Stack.Screen  name = 'Sign' component={Sign} options={{headerShown:false}}/>
          <Stack.Screen  name = 'Signup' component={Signup} options={{headerShown:false}}/>
          <Stack.Screen  name = 'Login' component={Login} options={{headerShown:false}}/>
          <Stack.Screen  name = 'ForgetPassword' component={ForgetPassword} options={{headerShown:false}}/>
          <Stack.Screen  name = 'Drawer' component={Drawer} options={{headerShown:false}}/>
          <Stack.Screen  name = 'Details' component={Details} options={{headerShown:false}}/>
          <Stack.Screen  name = 'Gallery' component={Gallery} options={{headerShown:false}}/>
          <Stack.Screen  name = 'Quote' component={Quote} options={{headerShown:false}}/>
          </Stack.Navigator>
        </NavigationContainer>
  );
};
export default App;
