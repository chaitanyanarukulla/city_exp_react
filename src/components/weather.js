import React from 'react';
import superagent from 'superagent';

class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      weatherResult: [],
      renderResults: null,
    };
  }

  weatherData = async e => {
    let url = `https://aqueous-springs-46846.herokuapp.com/weather`;
    let weather = await superagent.get(url).query({data: this.props.query});
    // console.log('weatherResult',weather.body);
    this.setState({weatherResult:weather.body});
    let renderResults = this.state.weatherResult.map( (ele,idx) => <li key={idx}> {ele.forecast + ' ' + ele.time }</li> );
    this.setState({renderResults});
  }

  componentDidUpdate(prevProps){
    if(this.props.query !== prevProps.query){

      this.weatherData();
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

export default Weather