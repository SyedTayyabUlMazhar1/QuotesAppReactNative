import React, {Component, useState} from 'react';
import IconComponent from './IconComponent';
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

import Icons from '../src/assets/icon/index';

const colors = {
  background: '#DF9A9A',
  icon: {
    active: '#3f91db',
    inactive: '#9D9D9D',
  },
};
const styles = StyleSheet.create({
  
  iconsRow: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  iconActive: {
    tintColor: colors.icon.active,
  },
  vote: {
    color: colors.icon.inactive,
    fontFamily: 'Arial',
    fontSize: 12,
    width: 24,
    textAlign: 'center',
  },
});

const IconsRowComponent = props => {
  const {upvoted, downvoted, votes, favorited} = props.itemData;

  toggleUpvote = () => {
    if (!upvoted && !downvoted) {
      props.itemData.upvoted = true;
      props.itemData.votes = votes + 1;
    } else if (upvoted) {
      props.itemData.upvoted = false;
      props.itemData.votes = votes - 1;
    } else if (downvoted) {
      props.itemData.upvoted = true;
      props.itemData.downvoted = false;
      props.itemData.votes = votes + 2;
    }

    props.setState();
  };

  toggleDownvote = () => {
    if (!upvoted && !downvoted) {
      props.itemData.downvoted = true;
      props.itemData.votes = votes - 1;
    } else if (downvoted) {
      props.itemData.downvoted = false;
      props.itemData.votes = votes + 1;
    } else if (upvoted) {
      props.itemData.upvoted = false;
      props.itemData.downvoted = true;
      props.itemData.votes = votes - 2;
    }

    props.setState();
  };

  toggleFavorite = () => {
    console.log('TOOGLE FAV');
    props.itemData.favorited = !props.itemData.favorited;
    props.setState();
  };

  share = () => {
    try {
      const result = Share.share({
        message: props.itemData.quotation + ' -' + props.itemData.author,
        title: 'Share Quote',
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.iconsRow}>
      <IconComponent
        onPress={toggleUpvote}
        style={upvoted && styles.iconActive}
        source={Icons.upvote}
      />

      <Text style={styles.vote}>{votes}</Text>

      <IconComponent
        onPress={toggleDownvote}
        style={downvoted && styles.iconActive}
        source={Icons.downvote}
      />

      <IconComponent
        onPress={toggleFavorite}
        style={[favorited && styles.iconActive, {marginHorizontal: 16}]}
        source={Icons.favorite}
      />

      <IconComponent source={Icons.share} onPress={share} />
    </View>
  );
};

export default IconsRowComponent;
