import styles from './style';
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const BtnEqual = ({value, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.btnOperator}
      onPress={onPress}>
      <Text style={styles.operator}>{value}</Text>
    </TouchableOpacity>
  );
};
export default BtnEqual;
