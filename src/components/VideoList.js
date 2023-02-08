import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem"
import React from 'react'

const VideoList = ({videos,onVideoSelect}) => {
    const listOfvideos = videos.map((video,id)=><VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)
  return (
    <Grid container spacing={2}>
        {listOfvideos}
    </Grid>
  )
}

export default VideoList;