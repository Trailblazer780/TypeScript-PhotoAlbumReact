import React from 'react';
import './App.scss';
import Content from './Content/Content';
import Jump from './Jump/Jump';
import Comment from './Comment/Comment';
import LoadingOverlay from './LoadingOverlay/LoadingOverlay';
import { PhotoData, Photo, SubmitComment, ContentProps } from './tools/PhotoAlbum.model';
import { getJSONData } from "./tools/Toolkit";

// URL to Web API
const RETRIEVE_SCRIPT:string = "http://localhost/retrieveAlbum.php?count=11"; 



const App = () => {


  const onResponse = (result:PhotoData) => {
    // console.table(result);
    setPhotos(result.photos);
    setLoading(false);

  };

  const nextPhoto = () => {
    if(index < photos.length){
      setIndex(index + 1);
      console.log("Setting index next: " + index);
    }
  }

  const previousPhoto = () => {
    if(index > 0 ){
      setIndex(index - 1);
      console.log("Setting index previous: " + index);
    }
  }

  const showJump = () => {
    if(jump === true){
      setJump(false);
    }
    else {
      setJump(true);  
    }
  }

  const showComment = () => {
    if(commentMenu === true){
      setCommentMenu(false);
    }
    else {
      setCommentMenu(true);  
    }
  }

  const loadPhotos = () => {
    getJSONData(RETRIEVE_SCRIPT, onResponse, onError)
  }

  const onError = (message:string) => console.log("*** Error has occured during AJAX data transmission: " + message);

  React.useEffect(() => {loadPhotos()}, []);

  // ---------------------------------------------- State Variables
  const [loading, setLoading] = React.useState<boolean>(true);
  const [jump, setJump] = React.useState<boolean>(false);
  const [commentMenu, setCommentMenu] = React.useState<boolean>(false);
  const [photos, setPhotos] = React.useState<Photo[]>([]);
  const [index, setIndex] = React.useState<number>(0);

  // ---------------------------------------------- Lifecycle Hooks
  // React.useEffect(() => {loadPhotos()}, []);

  return (
    <div className="main">
      <LoadingOverlay bgColor="#808080" spinnerColor="#FF4433" enabled={loading} />

      <h1 className="header-text" >Ethan's Photo Album Full Stack Web Application V2.0</h1>
      <div className="btn-group" style={{"width" : "100%"}} >
        <button style={{"width" : "25%"}} onClick={previousPhoto} disabled={(index === 0) ? true : false}>Previous</button>
        <button style={{"width" : "25%"}} onClick={nextPhoto} disabled={(index < photos.length-1) ? false : true}>Next</button>
        <button style={{"width" : "25%"}} onClick={showJump}>Jump</button>
        <button style={{"width" : "25%"}} onClick={showComment}>Comment</button>
      </div>
      <Jump enabled={jump} photo={photos} setIndex={setIndex} currentIndex={index}></Jump>
      <Comment enabled={commentMenu} showComment={showComment}></Comment>
      <h3 className="header-text" > Photo {index + 1} of {photos.length}</h3>
      <Content photo={photos[index]}></Content>

    </div>
  );
}

export default App;
