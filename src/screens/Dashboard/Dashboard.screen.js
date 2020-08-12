import React, {Component, useState, createRef} from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import styles from './Dashboard.styles';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../../Redux/Actions/Auth';
import color from '../../utills/Colors';
import {width, height} from 'react-native-dimension';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
export default function Login() {
  const flatList = createRef(null);
  const [data, setData] = useState(true);
  const dispatch = useDispatch([{image: require('../../assets/truck.png')}]);
  const onRightPress = () => {};
  const onLeftPress = () => {};
  const Item = ({item}) => {
    return (
      <TouchableOpacity>
        <Image source={item.image} />
      </TouchableOpacity>
    );
  };
  return (
    <React.Fragment>
      <SafeAreaView backgroundColor={color.background} />
      <StatusBar barStyle={'dark-content'} backgroundColor={color.background} />
      <SafeAreaView style={{flex: 1}}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
        <View style={{position: 'absolute'}}>
          <View
            style={{
              paddingHorizontal: width(2),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: height(4),
            }}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/arrow-left.png')}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
            <View style={{width: width(70)}}>
              {/* <FlatList
                ref={flatList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={Item}
              /> */}
            </View>
            <TouchableOpacity>
              <Image
                source={require('../../assets/arrow-right.png')}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <SafeAreaView backgroundColor={color.background} />
    </React.Fragment>
  );
}
