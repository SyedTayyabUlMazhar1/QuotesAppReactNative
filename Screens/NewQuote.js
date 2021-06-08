import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import FloatingActionButton from '../FloatingActionButton';
import GlobalColors from '../src/assets/GlobalColors';
import Icons from '../src/assets/icon';
import {ActionTypes} from '../Store';

const quotationPlaceholder =
  'The greatest glory in living lies not in never falling, but in rising every time we fall.';
const authorPlaceholder = 'Nelson Mandela';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: GlobalColors.background,
  },
  card: {
    width: 320,
    borderRadius: 16,
    backgroundColor: '#FEFEFE',
    elevation: 16,
    shadowOffset: {height: 5},
    shadowOpacity: 0.3,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  heading: {
    color: '#CECECE',
    fontSize: 25,
  },
  quotation: {
    color: '#333',
    fontFamily: 'DancingScript-Bold',
    fontSize: 20,
    letterSpacing: 0.5,
    lineHeight: 24,
    fontWeight: '500',
    marginBottom: 16,
  },

  author: {
    marginTop: 4,
    fontFamily: 'DancingScript-Regular',
    fontSize: 17,
    color: '#7D7D7D',
  },
});
export default NewQuote = ({navigation}) => {
  const dispatch = useDispatch();

  const [quotation, setQuotation] = useState('');
  const [author, setAuthor] = useState('');

  const quotationValidationMessage =
    'Quotation must be between 60 and 200 characters in length';
  const authorValidationMessage =
    'Author name must be between 7 and 25 characters in length';

  function authorNameValidation() {
    return author.length >= 7 && author.length <= 25;
  }

  function quotationValidation() {
    return quotation.length >= 60 && quotation.length <= 200;
  }

  function performValidation() {
    if (!quotationValidation()) {
      notifyMessage(quotationValidationMessage);
      return false;
    } else if (!authorNameValidation()) {
      notifyMessage(authorValidationMessage);
      return false;
    } else return true;
  }

  function onPressCancel() {
    navigation.goBack();
  }

  function onPressOk() {
    if (!performValidation()) return;

    dispatch({
      type: ActionTypes.ADD_QUOTE,
      quotation: quotation,
      author: author,
    });
    navigation.goBack();
  }

  function notifyMessage(msg) {
    Alert.alert('Error', msg, {cancelable: true});
  }
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Quote</Text>
        <TextInput
          multiline={true}
          style={styles.quotation}
          placeholder={quotationPlaceholder}
          onChangeText={setQuotation}
        />
        <Text style={styles.heading}>Author</Text>
        <TextInput
          style={styles.author}
          placeholder={authorPlaceholder}
          onChangeText={setAuthor}
        />
        <FloatingActionButton
          iconSize={20}
          icon={Icons.ok}
          onPress={onPressOk}
          style={{bottom: -20, right: -20}}
        />
        <FloatingActionButton
          iconSize={20}
          icon={Icons.cancel}
          onPress={onPressCancel}
          style={{bottom: -20, right: 50}}
        />
      </View>
    </View>
  );
};
