import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import YouTube from "react-youtube";

function VideoContainer() {
  const [videoLink, setVideoLink] = useState("");
  const [videoTimestamp, setVideoTimestamp] = useState("");

  const onChange = (e) => {
    setVideoLink(e.target.value);
    console.log(e.target.value);
  };

  const getVideoId = () => {
    if (videoLink === "" || videoLink === undefined) return "";
    let splitVideoLink = videoLink.split("v=")[1];
    let ampLocation = splitVideoLink.indexOf("&");
    if (ampLocation !== -1) {
      return splitVideoLink.substring(0, ampLocation);
    }
    return splitVideoLink;
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs={12}>
        <TextField
          value={videoLink}
          name="videoLink"
          placeholder="Paste YouTube URL Here"
          variant="outlined"
          onChange={(e) => onChange(e)}
        />
      </Grid>
      <Grid item xs={12}>
        <YouTube 
        videoId={getVideoId()}
        opts={{
            width="100",
            playerVars:{
                start: parseInt(videoTimestamp)
            }
        }}

        />
      </Grid>
    </Grid>
  );
}

export default VideoContainer
