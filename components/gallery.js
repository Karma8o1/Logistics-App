import React,{useState,useEffect,useRef} from 'react'
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
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';


import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ENTRIES1 = [
  {
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];

const App = ({navigation}) => {
      const [entries, setEntries] = useState([]);
      const carouselRef = useRef(null);

      const goForward = () => {
            carouselRef.current.snapToNext();
            };

      useEffect(() => {
            setEntries(ENTRIES1);
            }, []);
      
      //Data to show in flatList
      const [data, setData] = useState([
            {image:require('./images/Clip.png'),width:190,height:190, id:1},
            {image:require('./images/ship.png'),width:190,height:190, id:2},
            {image:require('./images/train.png'),width:190,height:190, id:3},
            {image:require('./images/ship.png'),width:190,height:190, id:4},
            {image:require('./images/Clip.png'),width:190,height:190, id:5},
            {image:require('./images/Clip.png'),width:190,height:190, id:6},
            {image:require('./images/ship.png'),width:190,height:190, id:7},
            {image:require('./images/train.png'),width:190,height:190, id:8},
            {image:require('./images/ship.png'),width:190,height:190, id:9},
            {image:require('./images/train.png'),width:190,height:190, id:10},
            
      ])

      const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        
            
            <ParallaxImage
                  source={{uri: item.illustration}}
                  containerStyle={styles.imageContainer}
                  style={styles.image}
                  parallaxFactor={0.5}
                  {...parallaxProps}/>
        
            
      </View>
    );
  };
  return(
    <View style={styles.container}>
      
      <FlatList
      data={data}
      ListHeaderComponent={<>
      <View style={{backgroundColor:'#4267B2'}}>
            <Header containerStyle={{backgroundColor:'transparent',alignItems:'center',justifyContent:'center',borderBottomWidth:0}}
            leftComponent={<TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Icon name='back' size={30} style={{color:'white',marginTop:hp('1')}}/>
            </TouchableOpacity>
            }
            centerComponent={<Text style={{color:'white',fontWeight:'bold',fontSize:20,
            marginTop:hp('1')}}>Gallery</Text>
            
            }
            rightComponent={<View style={{backgroundColor:'white',alignItems:'center',justifyContent:'center',elevation:5,height:40,width:40,borderRadius:50}}>
            <Icon name='plus' size={20} style={{color:'black'}}/>
            </View>
            }
            />
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
             <Carousel
                  
                  ref={carouselRef}
                  sliderWidth={wp('100')}
                  sliderHeight={wp('100')}
                  itemWidth={wp('100')-60}
                  data={entries}
                  renderItem={renderItem}
                  hasParallaxImages={true}
      />
      </View></>}
      numColumns={2}
      renderItem={({item})=>(
            <View style={{marginTop:hp('3'),paddingHorizontal:wp('2')}}>
                  <Image source={item.image} style={{height:item.height,width:item.width,borderRadius:10}}/>
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
    alignItems:'center',
    justifyContent:'center'
  },
  item: {
    width: wp('100') - 60,
    height: wp('60') ,
    
  },
  imageContainer: {
    flex: 1,
    marginTop:hp('2'),
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
})
export default App