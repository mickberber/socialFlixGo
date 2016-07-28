export const SUBMIT_VIDEO = 'SUBMIT_VIDEO';
export const PLAY_VIDEO = 'PLAY_VIDEO';
export const PAUSE_VIDEO = 'PAUSE_VIDEO';
export const SEND_MESSAGE = 'SEND_MESSAGE';

export function submitVideo(url) {
  return {
    type: SUBMIT_VIDEO,
    url: url
  }
}

export function playVideo() {
  return {
    type: PLAY_VIDEO
  }
}

export function pauseVideo() {
  return {
    type: PAUSE_VIDEO
  }
}

export function sendMessage(msgTxt) {
  return {
    type: SEND_MESSAGE,
    msgTxt: msgTxt
  }
}
