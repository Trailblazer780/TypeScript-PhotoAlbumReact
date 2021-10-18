import React from 'react';
import './App.scss';
import LoadingOverlay from './LoadingOverlay/LoadingOverlay';


const App = () => {

  // ---------------------------------------------- state variables
  const [loading, setLoading] = React.useState<boolean>(false);


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
