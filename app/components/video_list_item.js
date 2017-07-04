import React from 'react';
import ReactDOM from 'react-dom';

class VideoListItem extends React.Component {
  render() {
  	const video = this.props.video;
  	const onVideoSelect = this.props.onVideoSelect;
  	const imageUrl = video.snippet.thumbnails.default.url;
  	return (
  	  <li onClick={() => onVideoSelect(video)} className="list-group-item">
  	    <div className="video-list media">
  	      <div className="media-left">
  	        <img className="media-object" src={imageUrl} />
  	      </div>
  	      <div className="media-body">
  	        <div className="media-heading">{video.snippet.title}</div>
  	      </div>
  	    </div>
  	  </li>
  	);
  }
}

export default VideoListItem;