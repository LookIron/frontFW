import React, { Component } from 'react';
import './Video.css';

class Video extends Component {
  render() {
  	let video = this.props.video;
  	if (!video){
  		return (
  			<div>
  					Loading...
  			</div>
  			);
  	}
  	console.log(video);
  	let videoId = video.id.videoId;
  	let url= "https://www.youtube.com/embed/"+videoId+"?autoplay=1&rel=0";

    return (
	    	<div className="col-sm-8">
		      <div className="embed-responsive embed-responsive-16by9">
		      	<iframe title="video" className="embed-responsive-item" 
		      		src={url} frameBorder="0"  allowFullScreen></iframe>
		      </div>

		      <div className="title">{video.snippet.title}</div>
		      <div>{video.snippet.description}</div>
		    </div>
    );
  }
}

export default Video;
