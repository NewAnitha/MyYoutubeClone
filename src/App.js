import {Grid} from "@material-ui/core";
import {SearchBar,VideoDetail,VideoList} from './components';
import youtube from './api/youtube';
import React, { Component } from 'react'

export default class App extends Component {
  state={
    videos:[],
    selectedVideo:null
  }
  componentDidMount(){
    this.handleSubmit("React js courses")
  }

  onVideoSelect=(video)=>{
    this.setState({selectedVideo:video});
  }
  handleSubmit= async (searchTerm)=>{
    const response= await youtube.get('search',{
      params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyDpPODBUmiwQnkNvBdf_S3b0rIGOJ7Q3eg',
        q:searchTerm,
      }
    })
    this.setState({videos:response.data.items,selectedVideo:response.data.items[0]})
  }
  render() {
    const {selectedVideo,videos}= this.state
    return (
      <>
     <Grid justifyContent="center" container spacing={2}>
      {/* <Grid item xs={12} md={12} lg={12}> */}
        {/* <Grid conatiner spacing={10}> */}
          <Grid item xs={12} md={12} lg={12}>
            <SearchBar onFormSubmit={this.handleSubmit}/>
          </Grid>
          {/* </Grid> */}
          <Grid container spacing={2}>
          <Grid item xs={8} sm={8} md={8}>
            <VideoDetail video={selectedVideo}/>
          </Grid>
          <Grid item xs={2}sm={2} md={2}>
            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
          </Grid>
          </Grid>

        
      {/* </Grid> */}
     </Grid>
     </>
    )
  }
}
