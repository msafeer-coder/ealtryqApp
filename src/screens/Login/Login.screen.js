import React, { Component, useState } from 'react';
import { View, Text, ImageBackground,TouchableOpacity,SafeAreaView, StatusBar, Image } from 'react-native';
import styles from './Login.styles';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';
import { useDispatch,useSelector } from 'react-redux';
import { login, logout } from '../../Redux/Actions/Auth';
import color from '../../utills/Colors';
import { width,height } from 'react-native-dimension';
export default function Login() {
    const [isLogin,setIsLogin] = useState(true)
    const dispatch = useDispatch()
        return (
            <React.Fragment>
            <SafeAreaView backgroundColor={color.background} />
            <StatusBar barStyle={'dark-content'} backgroundColor={color.background} />
            <SafeAreaView style={{flex:1}}>
               <Image
               style={{width:width(100),height:height(20)}}
               source={{uri:'https://images.unsplash.com/photo-1559416548-2b5131d481fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}} />
            <View style={{width:width(30),height:height(16),alignSelf:'center',marginTop:-height(8),backgroundColor:color.gray,borderRadius:20}}/>
            <Text style={{width:width(30),alignSelf:'center',color:color.textBlack,textAlign:'center',marginTop:height(2),fontSize:width(4),marginBottom:height(8)}}>تسجيل الدخول</Text>
           <View style={{height:height(19),justifyContent:'space-between'}}>
            <TextInput placeholder='رقم الهاتف' />
            <TextInput placeholder='كلمة المرور' />
            </View>
            <Text style={{color:color.textBlack,marginTop:height(1),fontSize:width(4),paddingRight:height(8)}}>هل نسيت كلمة المرور</Text>
            <Button onPress={()=>dispatch(login({username:'das'}))} title='تسجيل دخول'/>
            <View style={{flexDirection:'row',width:width(85),alignSelf:'center'}}>
                <Button title='Google' containerStyles={{backgroundColor:color.red,width:'45%',borderColor:'transparent'}}/>
                <Button title='Facebook' containerStyles={{backgroundColor:color.blue,width:'45%',borderColor:'transparent'}}/>
            </View>
            <Button labelStyles={{color:color.yellow}} title='انشاء حساب جديد' containerStyles={{backgroundColor:color.white}}/>
            </SafeAreaView>
            <SafeAreaView backgroundColor={color.background} />
            </React.Fragment>
        )
}