import React from 'react'
import { Grid,Paper,Typography } from '@material-ui/core'
const VideoDetails = ({video}) => {
    if(!video) return <Grid justifyContent="center" container spacing={2}>Loading..please wait ,or Api calls limit exceeded(Try after some time)</Grid>
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <React.Fragment>
        <Paper elevation={3} style={{height:'30%',padding:'10px'}}>
        <iframe  height="100%" width="100%" title="Video Player" src={videoSrc}></iframe>
        </Paper>
        <Paper elevation={3} style={{padding:'10px'}}>
            <Typography variant='h6'>{video.snippet.title}- {video.snippet.channelTitle}</Typography>
            <Typography variant='subtitle1'> {video.snippet.channelTitle}</Typography>
            <Typography variant='subtitle2'> {video.snippet.description}</Typography>            
        </Paper>
    </React.Fragment>
  )
}

export default VideoDetails