import React from 'react';

const VideoDetail  = ({props}) =>{
  //children je obcas rychlejsi s fetchem nez parent preda
  if(!props){
    return <div>Loading..</div>;
  }
 const videoId = props.id.videoId;
 const url = `https://www.youtube.com/embed/${videoId}`;//string soucet stejny jako 'text\' + videoId;

  return (
    <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-19by9">
           <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
        <div>{props.snippet.title}</div>
        <div>{props.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
