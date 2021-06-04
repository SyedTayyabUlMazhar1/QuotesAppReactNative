import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import {useSelector} from 'react-redux';
import CardComponent from './Card/CardComponent';
import Icons from './src/assets/icon';
import {store} from './Store';

const colors = {
  background: '#DF9A9A',
};

export default RootApp = () => {
  return (
    <Provider store={store}>
      <RootComponent />
    </Provider>
  );
};

const RootComponent = () => {
  const quotations = useSelector(state => state);

  const render = (quote, index) => {
    return <CardComponent itemData={quote} itemIndex={index} />;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <FlatList
        data={quotations}
        renderItem={({item, index}) => render(item, index)}
        keyExtractor={(_, index) => index}
      />
      <FAB />
    </SafeAreaView>
  );
};

const styles = {
  fab: {
    elevation: 16,
    shadowOpacity: 0.5,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    padding: 16,
    borderRadius: 999,
    position: 'absolute',
    bottom: 25,
    right: 25,
    shadowOffset: {height: 1, width: 1},
  },
  fabIcon: {
    width: 24,
    height: 24,
    tintColor: colors.background,
  },
};
const FAB = () => {
  return (
    <TouchableOpacity style={styles.fab}>
      <Image style={styles.fabIcon} source={Icons.add} />
    </TouchableOpacity>
  );
};
