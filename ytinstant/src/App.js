import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import Video from  './Video/Video';
import SearchBar from './Video/SearchBar';
import VideoList from  './Video/VideoList';

class App extends Component {



  constructor(){
    super();
    this.state = {
      selectedVideo: null,
      videos: []
    };
    this.searchVideo('System');
  }

  searchVideo(term){
    const API_KEY = "AIzaSyCtfU-GoUfkXI7t2JzJ46od95vBXbbMKos";

   YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  onSelectVideo(video){
    this.setState({
      selectedVideo: video
    });
  }

  render() {
    return (
      <div className="container">
        <SearchBar onChange={this.searchVideo.bind(this)} />
        <div className="row">
          <Video video={this.state.selectedVideo}/>
          <VideoList videos={this.state.videos}
           onSelectVideo={this.onSelectVideo.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
