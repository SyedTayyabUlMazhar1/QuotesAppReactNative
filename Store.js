import {createStore} from 'redux';

export const ActionTypes = {
  TOGGLE_UPVOTE: 'TOGGLE_UPVOTE',
  TOGGLE_DOWNVOTE: 'TOGGLE_DOWNVOTE',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
};

const initialState = [
  {
    profilePic:
      'https://i.pinimg.com/474x/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg',
    name: "John Doe",
    quotation:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
    favorited: true,
    upvoted: true,
    downvoted: false,
    votes: 23,
  },
  {
    profilePic: 'https://wallpapercave.com/wp/wp5756323.jpg',
    name: "Jane Doe",
    quotation: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
    favorited: false,
    upvoted: true,
    downvoted: false,
    votes: -10,
  },
  {
    profilePic:
      'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=32',
    name: "Johnnathan",
    quotation:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: 'Steve Jobs',
    favorited: false,
    upvoted: false,
    downvoted: false,
    votes: 3,
  },
  {
    profilePic:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=32',
    name: "Alexa",
    quotation:
      'If life were predictable it would cease to be life, and be without flavor.',
    author: 'Eleanor Roosevelt',
    favorited: false,
    upvoted: false,
    downvoted: true,
    votes: 8,
  },
  {
    profilePic:
      'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=32',
    name: "Emily",
    quotation:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: 'Oprah Winfrey',
    favorited: false,
    upvoted: false,
    downvoted: false,
    votes: 0,
  },
  {
    profilePic:
      'https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&dpr=1&w=32',
    name: "Smith Von",
    quotation:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: 'James Cameron',
    favorited: true,
    upvoted: true,
    downvoted: false,
    votes: 80,
  },
  {
    profilePic:
      'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=32',
    name: "Sergey",
    quotation: "Life is what happens when you're busy making other plans",
    author: 'John Lennon',
    favorited: true,
    upvoted: false,
    downvoted: true,
    votes: 99,
  },
];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_UPVOTE: {
      const index = action.index;

      const oldItem = state[index];
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

      const newState = [...state];
      newState[index] = modified;
      return newState;
    }

    case ActionTypes.TOGGLE_DOWNVOTE: {
      const index = action.index;

      const oldItem = state[index];
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

      const newState = [...state];
      newState[index] = modified;
      return newState;
    }

    case ActionTypes.TOGGLE_FAVORITE: {
      const index = action.index;

      const oldItem = state[index];
      const modified = {...oldItem, favorited: !oldItem.favorited};

      const newState = [...state];
      newState[index] = modified;

      return newState;
    }

    default:
      return state;
  }
};

export const store = createStore(reducer);
