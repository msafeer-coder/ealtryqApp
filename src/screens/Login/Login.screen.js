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
               style={styles.headerImage}
               source={{uri:'https://images.unsplash.com/photo-1559416548-2b5131d481fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}} />
            <View style={styles.heading}/>
            <Text style={styles.headingText}>تسجيل الدخول</Text>
           <View style={styles.textInputContainer}>
            <TextInput placeholder='رقم الهاتف' />
            <TextInput placeholder='كلمة المرور' />
            </View>
            <Text style={styles.forgot}>هل نسيت كلمة المرور</Text>
            <Button onPress={()=>dispatch(login({username:'das'}))} title='تسجيل دخول'/>
            <View style={styles.authButton}>
                <Button title='Google' containerStyles={styles.google}/>
                <Button title='Facebook' containerStyles={styles.ffacebook}/>
            </View>
            <Button labelStyles={{color:color.yellow}} title='انشاء حساب جديد' containerStyles={{backgroundColor:color.white}}/>
            </SafeAreaView>
            <SafeAreaView backgroundColor={color.background} />
            </React.Fragment>
        )
}