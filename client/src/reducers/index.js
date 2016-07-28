import { createStore } from 'redux';
import { SUBMIT_VIDEO, PLAY_VIDEO, PAUSE_VIDEO, SEND_MESSAGE } from './../actions/index';
import { togglePlaying } from './utils';

let initialState = {
  videoUrl: '',
  isPlaying: false,
  messages: []
}

function SocialFlix (state = initialState, action) {
  switch (action.type) {
    case SUBMIT_VIDEO:
      return Object.assign({}, state, {
        videoUrl: action.url
      })
    case PLAY_VIDEO:
      return Object.assign({}, state, {
        isPlaying: togglePlaying(state.isPlaying)
      })
    case PAUSE_VIDEO:
      return Object.assign({}, state, {
        isPlaying: togglePlaying(state.isPlaying)
      })
    case SEND_MESSAGE:
      return Object.assign({}, state, {
        messages: [
          action.msgTxt,
          ...state.messages
        ]
      })
    default:
      return state
  }
}

export default createStore(SocialFlix);
