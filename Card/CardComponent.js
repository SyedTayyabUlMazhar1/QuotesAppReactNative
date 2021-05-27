import React, {Component, useState} from 'react';

import HeaderComponent from './HeaderComponent'
import IconsRowComponent from './IconsRowComponent'

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

  quotation: {
    // backgroundColor:"#CECECE",
    paddingHorizontal: 16,
    marginTop: 8,
    color: '#333',
    fontFamily: 'DancingScript-Bold',
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 0.5,
    lineHeight: 24,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  card: {
    width: 320,
    borderRadius: 16,
    backgroundColor: '#FEFEFE',
    elevation: 16,
    shadowOffset: {height: 8},
    shadowOpacity: 0.5,
    marginBottom: 16,
    paddingBottom: 16,
  },
  author: {
    // backgroundColor:"#CECECE",
    textAlign: 'center',
    fontFamily: 'DancingScript-Regular',
    fontSize: 17,
    color: '#7D7D7D',
    marginTop: 8,
  },
  
});


class CardComponent extends Component {
  render() {
    const {
      profilePic,
      name,
      quotation,
      author,
      upvoted,
      votes,
      downvoted,
      favorited,
    } = this.props.itemData;

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <HeaderComponent profilePic={profilePic} name={name} />

          <Text style={styles.quotation}>{quotation}</Text>

          <Text style={styles.author}>-{author}</Text>

          <IconsRowComponent
            itemData={this.props.itemData}
            itemIndex={this.props.itemIndex}

            onPressFav = {this.props.onPressFav}
            onPressUpvote = {this.props.onPressUpvote}
            onPressDownvote = {this.props.onPressDownvote}
          />
        </View>
      </View>
    );
  }
}

export default CardComponent;