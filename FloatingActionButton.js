import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import GlobalColors from './src/assets/GlobalColors';

const styles = {
  fabContainer: {
    elevation: 16,
    shadowOpacity: 0.5,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 999,
    position: 'absolute',
    bottom: 25,
    right: 25,
    shadowOffset: {height: 1, width: 1},
  },
  fabIcon: size => {
    const widthHeight = size ? size : 24;

    return {
      width: widthHeight,
      height: widthHeight,
      tintColor: GlobalColors.background,
    };
  },
};
export default FloatingActionButton = props => {
  const {onPress, icon, style, iconSize} = props;

  return (
    <TouchableOpacity style={[styles.fabContainer, style]} onPress={onPress}>
      <Image style={[styles.fabIcon(iconSize)]} source={icon} />
    </TouchableOpacity>
  );
};
