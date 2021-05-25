import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';

import Icons from './src/assets/icon/index';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const loremShort =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const profilePic =
  'https://i.pinimg.com/474x/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg';
const name = 'John Doe';
// const quotation =
//   'The greatest glory in living lies not in never falling, but in rising every time we fall.';
// const author = 'Nelson Mandela';

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
  headerText: {
    fontSize: 12,
    color: '#7B7B7B',
    marginLeft: 8,
  },
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
  profilePic: {
    width: 32,
    height: 32,
    borderRadius: 50,
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
  iconsRow: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: colors.icon.inactive,
  },
  iconActive: {
    tintColor: colors.icon.active,
  },
  vote: {
    color: colors.icon.inactive,
    fontFamily:"Arial",
    fontSize:12,
  },
});

const iconsDir = './src/assets/icon/';

const data = [
  {
    profilePic: profilePic,
    name: name,
    quotation:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
  },
  {
    profilePic: profilePic,
    name: name,
    quotation: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    profilePic: profilePic,
    name: name,
    quotation:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: 'Steve Jobs',
  },
  {
    profilePic: profilePic,
    name: name,
    quotation:
      'If life were predictable it would cease to be life, and be without flavor.',
    author: 'Eleanor Roosevelt',
  },
  {
    profilePic: profilePic,
    name: name,
    quotation:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: 'Oprah Winfrey',
  },
  {
    profilePic: profilePic,
    name: name,
    quotation:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: 'James Cameron',
  },
  {
    profilePic: profilePic,
    name: name,
    quotation: "Life is what happens when you're busy making other plans",
    author: 'John Lennon',
  },
];

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
        <View style={{flex: 1}}>
          <FlatList
            data={data}
            renderItem={({item}) => <CardComponent itemData={item} />}
            keyExtractor={(_, index) => index}
          />
        </View>
      </SafeAreaView>
    );
  }
}

class CardComponent extends Component {
  render() {
    const {profilePic, name, quotation, author} = this.props.itemData;

    return (
      <View style={styles.container}>
        <View style={[styles.card, {}]}>
          <HeaderComponent profilePic={profilePic} name={name} />

          <Text style={styles.quotation}>{quotation}</Text>

          <Text style={styles.author}>-{author}</Text>

          <IconsComponent />
        </View>
      </View>
    );
  }
}

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

class IconsComponent extends Component {
  render() {
    return (
      <View style={styles.iconsRow}>
        <Image source={Icons.upvote1} style={styles.icon} />
        <Text style={[styles.vote, {marginRight:12}]}>1.1K</Text>
        <Image source={Icons.downvote1} style={styles.icon} />
        <Text style={[styles.vote, {marginRight:12}]}>2.1K</Text>
        <Image source={Icons.favorite1} style={[styles.icon, {marginRight:12}]} />
        <Image source={Icons.share1} style={styles.icon} />
      </View>
    );
  }
}
