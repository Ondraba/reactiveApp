import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyB8lAeSFXBraFjw2kHtPsTsBMB_zBPG8Ww';


class App extends Component {
  constructor(props){
    super(props);

    this.state = ({
       videos : [],
       selectedVideo : null
     });

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
     this.setState({
       videos : videos,
       selectedVideo: videos[0]
     })
     //pokud je key stejny s value  this.setState({ videos : videos })
    });
  }

  render(){
  return (
    <div>
      <SearchBar />
      <VideoDetail props={this.state.selectedVideo} />
      <VideoList
         onVideoSelect={selectedVideo => this.setState({selectedVideo})}
         videos={this.state.videos} />
    </div>);
};
}

ReactDOM.render(<App />, document.querySelector('.container'));
