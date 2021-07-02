import React, {useState} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {Header} from 'react-native-elements'

import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const App = ({navigation}) => {
      const [data, setData] = useState([
            {title:'Worldwide Transport World',desc:'adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis',
            image:require('./images/Clip.png'),category:'Categories',date:'Dec 12, 2018', id:1},
            {title:'Worldwide Transport World',desc:'adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis',
            image:require('./images/ship.png'),category:'Categories',date:'Dec 12, 2018', id:2},
            {title:'Worldwide Transport World',desc:'adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis',
            image:require('./images/train.png'),category:'Categories',date:'Dec 12, 2018', id:3},
            {title:'Worldwide Transport World',desc:'adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis',
            image:require('./images/Clip.png'),category:'Categories',date:'Dec 12, 2018', id:4},
            {title:'Worldwide Transport World',desc:'adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis',
            image:require('./images/train.png'),category:'Categories',date:'Dec 12, 2018', id:5},
            {title:'Worldwide Transport World',desc:'adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis',
            image:require('./images/ship.png'),category:'Categories',date:'Dec 12, 2018', id:6},
            
      ])
      return (
            <SafeAreaView style= {styles.container}>
                  <View>
                        <Header containerStyle={{backgroundColor:'#4267B2',borderBottomWidth:0}}
            leftComponent={
            <Icon name='menuunfold' size={30} style={{color:'white',marginTop:5}}
            onPress={()=>{navigation.toggleDrawer()}}
            />}
            centerComponent={<Text style={{color:'white',fontWeight:'bold',fontSize:18,marginTop:5}}>Blog Grid</Text>
            
            }
            rightComponent={<View style={{backgroundColor:'white',alignItems:'center',justifyContent:'center',
            elevation:5,height:40,width:40,borderRadius:50}}>
            <Icon name='plus' size={20} style={{color:'black'}}/>
            </View>
            }
                        />
                  </View>
                  <View style={{flex:1,paddingTop:hp('2'),alignItems:'center',justifyContent:'center'}}>
                        <FlatList
                        data = {data}
                        showsVerticalScrollIndicator = {false}
                        keyExtractor={(item)=>item.id}
                        numColumns={2}
                        initialNumToRender={4}
                        renderItem={({item})=>(
                              <TouchableOpacity onPress={()=>{navigation.navigate('Details')}}>
                              <View style={{width:wp('47.5'),borderRadius:10,marginRight:wp('2'),marginTop:hp('1'),
                              borderRadius:10,paddingHorizontal:2,
                              shadowColor: "#000",borderWidth:3,borderColor:'#ededed',
                              shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,}}>
                                    <View >
                                          <View>
                                                <Image source={item.image} style={{height:hp('17'),width:wp('44.5'),borderTopRightRadius:10,borderTopLeftRadius:10}} resizeMode={'cover'} />
                                          </View>
                                          <View style={{flexDirection:'row',marginTop:hp('-3'),justifyContent:'space-between',paddingHorizontal:2}}>
                                                <View style={{flexDirection:'row'}}>
                                                      <Icons name='database' size={15} stlye={{color:'white'}} />
                                                      <Text style={{fontSize:12,color:'white'}}>{item.category}</Text>
                                                </View >
                                                       
                                                <View style={{flexDirection:'row'}}>
                                                      <Icon name='calendar' size={15} stlye={{color:'white'}}/>
                                                      <Text style={{fontSize:12,color:'white'}}>{item.date}</Text>     
                                                </View>
                                                
                                          </ View>
                                    </View>
                                    <View style={{width:wp('45'),elevation:1,paddingHorizontal:7,paddingVertical:10}}>
                                    <Text style={{fontSize:18}}>{item.title}</Text>
                                    <Text>{item.desc.substring(20)}</Text>

                                    </View>
                                    <View style={{position:'absolute',bottom:5,right:10}}>
                                          <Text style={{fontSize:50,color:'#e0e0e0'}}>0{item.id}</Text>
                                    </View>
                              </View>
                              </TouchableOpacity>
                        )}
                        />
                  </View>
            </SafeAreaView>
      )
}
const styles = StyleSheet.create({
      container: {
            flex:1,
            flexDirection:'column',
      }
})

export default App;