import "../App.css";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import { useState } from "react";

// compontent for displaying animation
// using 3 provided videos

function VideoAnimation() {
  const [src, setSrc] = useState(video1);
  console.log(src);

  //switching videos for animation
  function changeVid() {
    if (src == video1) {
      setSrc(video2);
    } else if (src == video2) {
      setSrc(video3);
    } else if (src == video3) {
      setSrc(video1);
    }
  }
  return (
    <video
      className="video-animation"
      src={src}
      autoPlay
      muted
      onEnded={changeVid}
    ></video>
  );
}

export default VideoAnimation;
