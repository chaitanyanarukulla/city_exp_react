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
    let renderResults = this.state.movieResult.map( (ele,idx) => <li key={idx}> <p><span>{ele.title}</span>{ `was released on ${ele.released_on}. Out of ${ele.total_votes}, ${ele.title} has an average vote of ${ele.average_votes}  and a popularity of ${ele.popularity}`}</p> <img src={ele.image_url} alt="pic"></img> <p>{ele.overview}</p></li> );
    this.setState({renderResults});
  }

  componentDidUpdate(prevProps){
    if(this.props.query !== prevProps.query){

      this.movieData();
    }
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