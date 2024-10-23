import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style';

const BtnClear = ({value, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.btnClear}
      onPress={onPress}>
      <Text style={styles.clear}>{value}</Text>
    </TouchableOpacity>
  );
};
export default BtnClear;
