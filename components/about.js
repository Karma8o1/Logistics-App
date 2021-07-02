import React, {useState} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import {Header} from 'react-native-elements'

import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const App = ({navigation}) => {

      const [data, setData] = useState([
            {title:'Packaging & Storage',desc:'Sample Text',image:require('./icons/truck.png'),width:35,height:35, id:1},
            {title:'Worldwide Transport',desc:'Sample Text',image:require('./icons/plane.png'),width:35,height:35, id:2},
            {title:'Sea Freight',desc:'Sample Text',image:require('./icons/freight.png'),width:35,height:35, id:3},
            {title:'Ware Housing',desc:'Sample Text',image:require('./icons/box.png'),width:35,height:35, id:4},
            {title:'Cargo',desc:'Sample Text',image:require('./icons/cargo.png'),width:35,height:35, id:5},
            {title:'24/7 Services',desc:'Sample Text',image:require('./icons/247.png'),width:35,height:35, id:6},
            {title:'Packaging & Storage',desc:'Sample Text',image:require('./icons/truck.png'),width:35,height:35, id:7},
            {title:'Worldwide Transport',desc:'Sample Text',image:require('./icons/plane.png'),width:35,height:35, id:8},
            {title:'Sea Freight',desc:'Sample Text',image:require('./icons/freight.png'),width:35,height:35, id:9},
            {title:'Ware Housing',desc:'Sample Text',image:require('./icons/box.png'),width:35,height:35, id:10},
            {title:'Cargo',desc:'Sample Text',image:require('./icons/cargo.png'),width:35,height:35, id:11},
            {title:'24/7 Services',desc:'Sample Text',image:require('./icons/247.png'),width:35,height:35, id:12},
            
      ])
  return(
    <View style={styles.container}>
      
            <FlatList
            ListHeaderComponent={
            <>
            <View style={{backgroundColor:'#4267B2'}}>
            <Header containerStyle={{backgroundColor:'transparent',alignItems:'center',justifyContent:'center',borderBottomWidth:0}}
             leftComponent={
            <Icon name='menuunfold' size={35} style={{color:'white',marginTop:hp('1')}}
            onPress={()=>{navigation.toggleDrawer()}}
            />}
            centerComponent={<Text style={{color:'white',fontWeight:'bold',fontSize:18,
            marginTop:hp('1')}}>Explore Our Services</Text>
            
            }
            rightComponent={<View style={{backgroundColor:'white',alignItems:'center',justifyContent:'center',elevation:5,height:40,width:40,borderRadius:50}}>
            <Icon name='plus' size={20} style={{color:'black'}}/>
            </View>
            }
            />
            </View>
            </>
            }
            data = {data}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{justifyContent: 'space-between',alignItems:'center'}}
            renderItem={({item})=>(
                  
                  <View style={{alignItems:'center',paddingLeft:5}}>

                        <TouchableOpacity style={{flexDirection:'row',marginVertical:hp('2'),marginHorizontal:wp('1'),
                        height:hp('12'),width:wp('45'),alignItems:'center',justifyContent:'center',elevation:5,backgroundColor:'#e0eded',borderRadius:5
                        }}>
                              <View style={{paddingHorizontal:wp('2')}}>
                                    <Image source={item.image} style={{height:item.height,width:item.width,marginStart:wp('10')}}
                                    resizeMode={'contain'}
                                    />
                              </View>
                              <View style={{width:wp('40')}}>
                                    <Text style={{fontSize:14,fontWeight:'bold'}}>{item.title.substring(0,14)}...</Text>
                                    <Text>{item.desc}</Text>
                              </View>

                        </TouchableOpacity>
                  </View>
            
            )}
            keyExtractor={(item)=>item.id}
            />
    </View>

  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
export default App