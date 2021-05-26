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
  header: {
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: '#EEE',
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
 
  profilePic: {
    width: 32,
    height: 32,
    borderRadius: 50,
  },
  headerText: {
    fontSize: 12,
    color: '#7B7B7B',
    marginLeft: 8,
  },
});

class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          style={styles.profilePic}
          source={{uri: this.props.profilePic}}
        />
        <Text style={styles.headerText}>{this.props.name}</Text>
      </View>
    );
  }
}


export default HeaderComponent;