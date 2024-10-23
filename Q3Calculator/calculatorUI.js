import React, {useState} from 'react';
import {
  Alert,
  Button,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import BtnNumber from './btnNumber';
import styles from './style';
import BtnOperator from './btnOperator';
import BtnClear from './BtnClear';
import BtnEqual from './btnEqual';

const UI = () => {
  const [outPutText, setOutputText] = useState('0');
  const [operator, setOperator] = useState('');
  const [firstValue, setFirstValue] = useState(0.0);

  const handleOnPressNumber = value => {
    if (outPutText === '0' || outPutText === 'Invalid Input') {
      setOutputText(value);
    } else {
      setOutputText(outPutText + value);
    }
  };

  const handleOnPressOperator = value => {
    setOperator(value);
    setFirstValue(parseFloat(outPutText));
    setOutputText('0');
  };

  const handleClearBtn = () => {
    setFirstValue(0.0);
    setOperator('');
    setOutputText('0');
  };

  const handleEqualOperator = () => {
    switch (operator) {
      case '÷':
        const secondValue = parseFloat(outPutText);
        if (secondValue === 0) {
          setOutputText('Invalid Input');
        } else setOutputText(String(firstValue / secondValue));
        break;
      case 'x':
        setOutputText(String(firstValue * secondValue));
        break;
      case '+':
        setOutputText(String(firstValue + secondValue));
        break;
      case '-':
        setOutputText(String(firstValue - secondValue));
        break;
      default:
        setOutputText('Invalid Input');
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.outputText}>{outPutText}</Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.row}>
          <BtnNumber value={'7'} onPress={() => handleOnPressNumber('7')} />
          <BtnNumber value={'8'} onPress={() => handleOnPressNumber('8')} />
          <BtnNumber value={'9'} onPress={() => handleOnPressNumber('9')} />
          <BtnOperator value={'÷'} onPress={() => handleOnPressOperator('÷')} />
        </View>
        <View style={styles.row}>
          <BtnNumber value={'4'} onPress={() => handleOnPressNumber('4')} />
          <BtnNumber value={'5'} onPress={() => handleOnPressNumber('5')} />
          <BtnNumber value={'6'} onPress={() => handleOnPressNumber('6')} />
          <BtnOperator value={'x'} onPress={() => handleOnPressOperator('x')} />
        </View>
        <View style={styles.row}>
          <BtnNumber value={'1'} onPress={() => handleOnPressNumber('1')} />
          <BtnNumber value={'2'} onPress={() => handleOnPressNumber('2')} />
          <BtnNumber value={'3'} onPress={() => handleOnPressNumber('3')} />
          <BtnOperator value={'-'} onPress={() => handleOnPressOperator('-')} />
        </View>
      </View>
    </View>
  );
};

export default UI;
