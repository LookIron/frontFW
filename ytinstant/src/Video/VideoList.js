import React, { Component } from 'react';
import VideoListItem from  './VideoListItem';



class VideoList extends Component {
  render() {
  	let videos = this.props.videos;
  	if (!videos){
  		return (
  			<div>
  					Loading...
  			</div>
  			);
  	}
  	let videolist = videos.map((video)=>{
  		return(
  			<VideoListItem key={video.id.videoId} video={video}
  				 onChangeVideo={this.props.onSelectVideo} />
  		);
  	});

    return (
	    	<div className="col-sm-4">
	    		{videolist}
		    </div>
    );
  }
}

export default VideoList;
