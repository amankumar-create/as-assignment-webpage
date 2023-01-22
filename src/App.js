import "./App.css";
import NavBar from "./components/NavBar";
import VideoAnimation from "./components/VideoAnimation";
import Jumbotron from "./components/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";
import FeatureText from "./components/FeatureText";
import { useState, useEffect } from "react";

//this component is the main componenet of our webpage
//it fetches all the texts through the api
//it contains all other components of the ui
//like navigation bar, jumbotron, video animation and the text

function App() {
  //featureTexts is the array of texts(features) which are shown on the left hand section
  const [featureTexts, setFeatureTexts] = useState([]);

  useEffect(() => {
    //fetching the text from the api
    const url = "https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1";
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.texts);
          setFeatureTexts(result.texts);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  //console.log(featureTexts);
  //populating text elements using the text we received through api
  var featureTextElements = featureTexts.map((text) => {
    return <FeatureText text={text} />;
  });

  return (
    <>
      <NavBar></NavBar>
      <div className="root-container">
        <Jumbotron></Jumbotron>
        <div className="container-1">
          <div style={{ display: "flex", flexDirection: "column" }}>
            {featureTextElements} 
          </div>
          <VideoAnimation />
        </div>
      </div>
    </>
  );
}

export default App;
