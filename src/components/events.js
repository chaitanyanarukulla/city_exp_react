import React from 'react';
import superagent from 'superagent';

class Events extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      eventResult: [],
      renderResults: null,
    };
  }
    eventData = async e => {
    let url = `https://aqueous-springs-46846.herokuapp.com/events`;
    let event = await superagent.get(url).query({data: this.props.query});
    this.setState({eventResult:event.body});
    let renderResults = this.state.eventResult.map( (e,i) => <li key={i}> <a href={e.link}>{e.name}</a> <p>{e.event_date}</p> <p>{e.summary}</p></li> );
    this.setState({renderResults});
  }


  componentDidUpdate(prevProps){
    if(this.props.query !== prevProps.query){

      this.eventData();
    }
  }
  render(){
    return(
      <div>
        <p>{this.props.query}</p>
        <ul>{this.state.renderResults}</ul>
      </div>
    );
  }
}
export default Events;