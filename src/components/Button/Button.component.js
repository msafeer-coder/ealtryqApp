import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Button.Styles';

const Component = ({ title,containerStyles,labelStyles, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.container,containerStyles]}>
      <Text style={[styles.text,labelStyles]}>{title}</Text>
    </TouchableOpacity>);
};

export default Component;
