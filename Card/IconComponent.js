import React, {Component, useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Share,
} from 'react-native';

const colors = {
  background: '#DF9A9A',
  icon: {
    active: '#3f91db',
    inactive: '#9D9D9D',
  },
};
const styles = StyleSheet.create({

  icon: {
    width: 24,
    height: 24,
    tintColor: colors.icon.inactive,
  },
});

class IconComponent extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image
          source={this.props.source}
          style={[styles.icon, this.props.style]}
        />
      </TouchableOpacity>
    );
  }
}



export default IconComponent;