import React from 'react';
import superagent from 'superagent';

class Moive extends React.Component{
  constructor(props){
    super(props);
    this.state ={};
  }

  movieData = async e => {
    let url = `https://aqueous-springs-46846.herokuapp.com/movies`;
    let movies = await superagent.get(url).query({data: this.props.query});
    this.setState({movieResult:movies.body});
    let renderResults = this.state.movieResult.map( (ele,idx) => <li key={idx}> {'Title: '+ele.title + '   Released On: ' + ele.released_on + ' Total Votes: ' + ele.total_votes + ' Avg Votes: ' + ele.average_votes + ' Popularity: '+ ele.popularity + ' Image: ' + ele.image_url + ' Overview: ' + ele.overview}</li> );
    this.setState({renderResults});
  }

  componentDidMount(){
    this.movieData();
  }
  render(){
    return(
      <div>
        <ul>{this.state.renderResults}</ul>
      </div>
    );
  }
}

export default Moive;