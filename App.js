import React, {Component, useState} from 'react';
import CardComponent from './Card/CardComponent';
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

import Icons from './src/assets/icon/index';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const loremShort =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const profilePic =
  'https://i.pinimg.com/474x/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg';
const name = 'John Doe';

const colors = {
  background: '#DF9A9A',
  icon: {
    active: '#3f91db',
    inactive: '#9D9D9D',
  },
};

export default App = () => {
  const [dataState, setDataState] = useState([
    {
      profilePic: profilePic,
      name: name,
      quotation:
        'The greatest glory in living lies not in never falling, but in rising every time we fall.',
      author: 'Nelson Mandela',
      favorited: true,
      upvoted: true,
      downvoted: false,
      votes: 23,
    },
    {
      profilePic: profilePic,
      name: name,
      quotation: 'The way to get started is to quit talking and begin doing.',
      author: 'Walt Disney',
      favorited: false,
      upvoted: true,
      downvoted: false,
      votes: -10,
    },
    {
      profilePic: profilePic,
      name: name,
      quotation:
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
      author: 'Steve Jobs',
      favorited: false,
      upvoted: false,
      downvoted: false,
      votes: 3,
    },
    {
      profilePic: profilePic,
      name: name,
      quotation:
        'If life were predictable it would cease to be life, and be without flavor.',
      author: 'Eleanor Roosevelt',
      favorited: false,
      upvoted: false,
      downvoted: true,
      votes: 8,
    },
    {
      profilePic: profilePic,
      name: name,
      quotation:
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      author: 'Oprah Winfrey',
      favorited: false,
      upvoted: false,
      downvoted: false,
      votes: 0,
    },
    {
      profilePic: profilePic,
      name: name,
      quotation:
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      author: 'James Cameron',
      favorited: true,
      upvoted: true,
      downvoted: false,
      votes: 80,
    },
    {
      profilePic: profilePic,
      name: name,
      quotation: "Life is what happens when you're busy making other plans",
      author: 'John Lennon',
      favorited: true,
      upvoted: false,
      downvoted: true,
      votes: 99,
    },
  ]);

  const toggleUpvote = index => {
    const oldItem = dataState[index];
    const modified = {...oldItem};

    if (!oldItem.upvoted && !oldItem.downvoted) {
      modified.upvoted = true;
      modified.votes = oldItem.votes + 1;
    } else if (oldItem.upvoted) {
      modified.upvoted = false;
      modified.votes = oldItem.votes - 1;
    } else if (oldItem.downvoted) {
      modified.upvoted = true;
      modified.downvoted = false;
      modified.votes = oldItem.votes + 2;
    }

    const newState = Array.from(dataState);
    newState[index] = modified;
    setDataState(newState)
  };

  const toggleDownvote = index => {
    const oldItem = dataState[index];
    const modified = {...oldItem};

    if (!oldItem.upvoted && !oldItem.downvoted) {
      modified.downvoted = true;
      modified.votes = oldItem.votes - 1;
    } else if (oldItem.downvoted) {
      modified.downvoted = false;
      modified.votes = oldItem.votes + 1;
    } else if (oldItem.upvoted) {
      modified.upvoted = false;
      modified.downvoted = true;
      modified.votes = oldItem.votes - 2;
    }

    const newState = Array.from(dataState);
    newState[index] = modified;
    setDataState(newState)
  };


  const toggleFavorite = index => {
    const toModify = dataState[index];
    const modified = {...toModify, favorited: !toModify.favorited};

    const newState = Array.from(dataState);
    newState[index] = modified;

    setDataState(newState)
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <FlatList
        data={dataState}
        renderItem={({item, index}) => (
          <CardComponent
            // setState={() => {
            //   setDataState(Array.from(dataState));
            // }}
            itemData={item}
            itemIndex={index}

            onPressFav = {toggleFavorite}
            onPressUpvote= {toggleUpvote}
            onPressDownvote= {toggleDownvote}
          />
        )}
        keyExtractor={(_, index) => index}
      />
    </SafeAreaView>
  );
};
