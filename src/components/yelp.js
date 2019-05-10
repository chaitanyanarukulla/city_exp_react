import React from 'react';
import superagent from 'superagent';

class Yelp extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      yelpResult: [],
      renderResults: null,
    };
  }

  yelpData = async e => {
    let url = `https://aqueous-springs-46846.herokuapp.com/yelp`;
    let yelp = await superagent.get(url).query({data: this.props.query});
    this.setState({yelpResult:yelp.body});
    let renderResults = this.state.yelpResult.map( (ele,idx) => <li key={idx}> <a href={ele.url}>{'Name: '+ele.name }</a> <p>{ `The average rating is ${ele.rating} out of 5 and the average cost is ${ele.price} out of 4.`  }</p><img alt="pic" src={ele.image_url}></img></li>);
    this.setState({renderResults});
  }
  componentDidUpdate(prevProps){
    if(this.props.query !== prevProps.query){

      this.yelpData();
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

export default Yelp;