import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Dashboard.styles';
import Button from '../../components/Button/Button.component';
import { useSelector,useDispatch } from 'react-redux';
import { login, logout } from '../../Redux/Actions/Auth';
export default function Dashboard() {
    const user = useSelector(state=>state.Auth.user)
    const dispatch = useDispatch()
        return (
            <View style={styles.container}>
                <Text>Dashboard</Text>
                <Text>{user.userName}</Text>
                <Button title="Logout" onPress={() => dispatch(logout())} />
            </View>
        )
}