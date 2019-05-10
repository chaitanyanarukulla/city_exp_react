import React from 'react';
import Header from './header';
import SearchFrom from './search-form';
import Map from './map';
import SearchResult from './search-results';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  
  setLocation = (location) =>{
    this.setState({
      lat: location.latitude,
      lng: location.longitude,
      search_query: location.search_query,
      formatted_query: location.formatted_query,
    })
  }
  render(){
    return(
      <React.Fragment>
        <Header/>
        <SearchFrom setLocation={this.setLocation}/>
        <Map lat={this.state.lat} lng = {this.state.lng} />
        <SearchResult query={this.state.search_query}/>
      </React.Fragment>
    );
  }
}

export default App;
