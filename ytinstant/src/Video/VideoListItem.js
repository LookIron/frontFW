import React, { Component } from 'react';
import VideoListItem from  './VideoListItem';



class VideoList extends Component {

  onClickVideo(){
    this.props.onChangeVideo(this.props.video);
  }

  render() {
  	let video = this.props.video;
    let img = video.snippet.thumbnails.default.url;
    return (
        <div className="media">
          <div className="media-left">
            <img src={img} className="media-object" 
              onClick={this.onClickVideo.bind(this)}
             />
            
          </div>
          <div className="media-body">
            <p>{video.snippet.title}</p>
          </div>
        </div>
    );
  }
}

export default VideoList;
