import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style';

const BtnNumber = ({value, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.btn} onPress={onPress}>
      <Text style={styles.number}>{value}</Text>
    </TouchableOpacity>
  );
};
export default BtnNumber;
