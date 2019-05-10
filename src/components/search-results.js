
import React from 'react';
import Weather from './weather'
import Movie from './movies'
import Event from './events'
import Yelp from './yelp'


class SearchResult extends React.Component{
  render(){
    return(
      <div>
        <h3>Weather</h3><Weather query={this.props.query}/>
        <h3>Movies</h3><Movie query={this.props.query}/>
        <h3>Events</h3><Event query={this.props.query} />
        <h3>Yelp</h3><Yelp query={this.props.query} />
      </div>
    );
  }
}
  

export default SearchResult;