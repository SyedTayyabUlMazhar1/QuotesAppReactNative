import React from 'react';
import { Share, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Icons from '../src/assets/icon/index';
import { ActionTypes } from '../Store';
import IconComponent from './IconComponent';

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
  const dispatch = useDispatch();

  const {upvoted, downvoted, votes, favorited} = props.itemData;
  const {itemIndex} = props;

  const share = () => {
    try {
      Share.share({
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
        onPress={() =>
          dispatch({type: ActionTypes.TOGGLE_UPVOTE, index: itemIndex})
        }
        style={upvoted && styles.iconActive}
        source={Icons.upvote}
      />

      <Text style={styles.vote}>{votes}</Text>

      <IconComponent
        onPress={() =>
          dispatch({type: ActionTypes.TOGGLE_DOWNVOTE, index: itemIndex})
        }
        style={downvoted && styles.iconActive}
        source={Icons.downvote}
      />

      <IconComponent
        onPress={() =>
          dispatch({type: ActionTypes.TOGGLE_FAVORITE, index: itemIndex})
        }
        style={[favorited && styles.iconActive, {marginHorizontal: 16}]}
        source={Icons.favorite}
      />

      <IconComponent source={Icons.share} onPress={share} />
    </View>
  );
};

export default IconsRowComponent;
