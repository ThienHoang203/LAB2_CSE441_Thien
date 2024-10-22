import React, {useState} from 'react';
import {
  Alert,
  Button,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';

const UI = () => {
  const operatorSet = new Set(['÷', '-', '+', 'x']);

  const [outputText, setOutputText] = useState('0');
  const [operator, setOperator] = useState('');
  const [firstValue, setFirstValue] = useState(0);

  const handleInputText = value => {
    if (outputText === '0') {
      setOutputText(value);
    } else if (!operatorSet.has(value)) {
      setOutputText(outputText + value);
    } else {
      setOutputText(outputText + ' ' + value + ' ');
    }
  };

  const handleDeleteButton = () => {
    setOutputText('0');
  };

  const handleEqual = value => {
    const arr = value.split(' ');
    var valueArray = [];
    var operatorArray = [];
    for (const element of arr) {
      if (operator.has(element)) {
        valueArr.splice(valueArray.length - 1, 0, element);
      } else {
        operatorArray.splice(operatorArray.length - 1, 0, parseFloat(element));
      }
    }
  };

  return (
    <View style={styles.container}>
      <View id="outputText">
        <Text>{outputText}</Text>
      </View>
      <View id="keyboard">
        <View id="row1" style={styles.row}>
          <TouchableOpacity style={styles.numberContainer}>
            <Text
              style={styles.number}
              onPress={() => {
                handleInputText('7');
              }}>
              7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberContainer}>
            <Text
              style={styles.number}
              onPress={() => {
                handleInputText('8');
              }}>
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberContainer}>
            <Text
              style={styles.number}
              onPress={() => {
                handleInputText('9');
              }}>
              9
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberContainer}>
            <Text
              style={styles.sign}
              onPress={() => {
                handleInputText('÷');
              }}>
              ÷
            </Text>
          </TouchableOpacity>
        </View>
        <View id="row2" style={styles.row}>
          <TouchableOpacity style={styles.numberContainer}>
            <Text
              style={styles.number}
              onPress={() => {
                handleInputText('4');
              }}>
              4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberContainer}>
            <Text
              style={styles.number}
              onPress={() => {
                handleInputText('5');
              }}>
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberContainer}>
            <Text
              style={styles.number}
              onPress={() => {
                handleInputText('6');
              }}>
              6
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberContainer}>
            <Text
              style={styles.sign}
              onPress={() => {
                handleInputText('x');
              }}>
              x
            </Text>
          </TouchableOpacity>
        </View>
        <View id="row3" style={styles.row}>
          <TouchableOpacity style={styles.numberContainer}>
            <Text
              style={styles.number}
              onPress={() => {
                handleInputText('1');
              }}>
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberContainer}>
            <Text
              style={styles.number}
              onPress={() => {
                handleInputText('2');
              }}>
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberContainer}>
            <Text
              style={styles.number}
              onPress={() => {
                handleInputText('3');
              }}>
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberContainer}>
            <Text
              style={styles.sign}
              onPress={() => {
                handleInputText('-');
              }}>
              -
            </Text>
          </TouchableOpacity>
        </View>
        <View id="row4" style={styles.row}>
          <TouchableOpacity style={styles.numberContainer}>
            <Text
              style={styles.number}
              onPress={() => {
                handleInputText('0');
              }}>
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberContainer}>
            <Text
              style={styles.number}
              onPress={() => {
                handleInputText('+');
              }}>
              +
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberContainer}>
            <Text
              style={styles.sign}
              onPress={() => {
                handleEqual(outputText);
              }}>
              =
            </Text>
          </TouchableOpacity>
        </View>
        <View id="row5" style={styles.row}>
          <TouchableOpacity on>
            <Text
              onPress={() => {
                handleDeleteButton();
              }}>
              C
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UI;
