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
  FlatList
} from 'react-native';
import {Header} from 'react-native-elements'

import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const App = () => {
  return(
    <View style={styles.container}>

    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})
export default App