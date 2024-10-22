import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    width: 300,
    marginBottom: 10,
  },

  number: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 60,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    elevation: 3,
    backgroundColor: 'white',
  },
  numberContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sign: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 60,
    backgroundColor: '#F0F0F0',
    color: '#F39E40',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
});
