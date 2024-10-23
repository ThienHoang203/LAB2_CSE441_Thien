/* eslint-disable no-undef */
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  outputText: {
    fontSize: 30,
    fontWeight: '700',
    padding: 20,
    color: '#000',
  },
  btn: {
    borderRadius: 100,
    elevation: 8,
    backgroundColor: 'white',
    width: '19%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    paddingTop: 8,
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },
  operator: {
    paddingTop: 8,
    fontSize: 24,
    fontWeight: '700',
    color: '#FF9501',
  },
  btnOperator: {
    borderRadius: 100,
    elevation: 8,
    backgroundColor: '#F0F0F0',
    width: '19%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnClear: {
    borderRadius: 100,
    elevation: 8,
    backgroundColor: '#F0F0F0',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clear: {
    paddingTop: 8,
    fontSize: 20,
    fontWeight: '650',
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
  },
  view1: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  view2: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '60%',
  },
});
