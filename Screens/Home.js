import React from 'react';
import {FlatList, View} from 'react-native';
import 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import CardComponent from '../Card/CardComponent';
import FloatingActionButton from '../FloatingActionButton';
import GlobalColors from '../src/assets/GlobalColors';
import Icons from '../src/assets/icon';

export default Home = props => {
  const {navigation} = props;
  const quotations = useSelector(state => state);

  const render = (quote, index) => {
    return <CardComponent itemData={quote} itemIndex={index} />;
  };

  return (
    <View style={{flex: 1, backgroundColor: GlobalColors.background}}>
      <FlatList
        data={quotations}
        renderItem={({item, index}) => render(item, index)}
        keyExtractor={(_, index) => index}
      />
      <FloatingActionButton
        onPress={() => navigation.navigate('New Quote')}
        icon={Icons.add}
      />
    </View>
  );
};
