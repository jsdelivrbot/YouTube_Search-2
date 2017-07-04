import React from 'react';
import ReactDOM from 'react-dom';
import VideoListItem from './video_list_item.js';

class VideoList extends React.Component {
  render() {
  	const videoItems = this.props.videos.map( (video) => <VideoListItem onVideoSelect={this.props.onVideoSelect} key={video.etag} video={video} />);
  	return (
  	  <ul className="col-md-4 list-group">
  	    {videoItems}
  	  </ul>
  	);
  }
}

export default VideoList;