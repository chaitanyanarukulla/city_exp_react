import React from 'react';
// import Search from './search-form.js'
// import superagent from 'superagent'


class Map extends React.Component{
  constructor (props){
    super(props);
    this.state={
      mapUrl:''
    }
  }
  componentDidUpdate=()=>{
    let newMapUrl =`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.data.body.latitude}%2c%20${this.props.data.body.longitude}&zoom=13&size=600x300&maptype=roadmap
    &key=AIzaSyDHn_Xd-DNpqT7JDAbLqJ9OwuvU5Una2Iw`;
    console.log(this.props.location)
    if(this.state.mapUrl !== newMapUrl){
      this.setState({mapUrl:newMapUrl})
    }
  }
  render(){
    return(
      <>
      <img  alt ='map' src={this.state.mapUrl} />
     
      </>
    )
  }
}

export default Map;