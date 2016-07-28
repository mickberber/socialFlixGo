import { connect } from 'react-redux';
import { playVideo, pauseVideo, sendMessage, submitVideo } from './../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    playVideo: function() {
      dispatch(playVideo())
    },
    pauseVideo: function() {
      dispatch(pauseVideo())
    },
    sendMessage: function(msgTxt) {
      dispatch(sendMessage(msgTxt))
    },
    submitVideo: function(url) {
      disptach(submitVideo(url))
    }
  }
}

function mapStateToProps(state) {
  return {
    videoUrl: state.videoUrl,
    isPlaying: state.isPlaying,
    messages: state.messages
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(app);

export default App;
