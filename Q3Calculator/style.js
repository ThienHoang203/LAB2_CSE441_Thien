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
  btn: {
    borderRadius: 100,
    elevation: 5,
    backgroundColor: 'white',
    width: '18%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  btnOperator: {
    borderRadius: 100,
    elevation: 5,
    backgroundColor: '#F0F0F0',
    width: '18%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  btnClear: {
    borderRadius: 100,
    elevation: 5,
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
    height: '16%',
    marginBottom: 10,
  },
  view1: {
    width: '100%',
    height: '55%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  view2: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    height: '45%',
  },
});
