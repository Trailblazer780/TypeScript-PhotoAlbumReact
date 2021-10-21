import React from 'react';
import './App.scss';
import LoadingOverlay from './LoadingOverlay/LoadingOverlay';
import { PhotoData, Photo, Comment } from './tools/PhotoAlbum.model';
import { getJSONData } from "./tools/Toolkit";

// URL to Web API
const RETRIEVE_SCRIPT:string = "http://localhost/retrieveAlbum.php?count=11"; 



const App = () => {


  const onResponse = (result:PhotoData) => {
    console.table(result);
  

  };

  const onError = (message:string) => console.log("*** Error has occured during AJAX data transmission: " + message);
  

  // ---------------------------------------------- State Variables
  const [loading, setLoading] = React.useState<boolean>(false);
  const [photos, setPhotos] = React.useState<Photo[]>([]);

  // ---------------------------------------------- Lifecycle Hooks
  React.useEffect(() => {getJSONData(RETRIEVE_SCRIPT, onResponse, onError);}, []);

  return (
    <div className="main">
      <LoadingOverlay bgColor="#808080" spinnerColor="#FF4433" enabled={loading} />

      <h1 className="header-text" >Ethan's Photo Album Full Stack Web Application V2.0</h1>
      <div className="btn-group" style={{"width" : "100%"}} >
        <button style={{"width" : "25%"}}>Previous</button>
        <button style={{"width" : "25%"}}>Next</button>
        <button style={{"width" : "25%"}}>Jump</button>
        <button style={{"width" : "25%"}}>Comment</button>
      </div>
    </div>
  );
}

export default App;
