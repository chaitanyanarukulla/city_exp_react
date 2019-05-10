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
    let renderResults = this.state.yelpResult.map( (ele,idx) => <li key={idx}> {'Name: '+ele.name + ' Image: ' + ele.image_url + ' Price: ' + ele.price + ' Rating: ' + ele.rating + ' Link: '+ ele.url}</li> );
    this.setState({renderResults});
  }

  componentDidMount(){
    this.yelpData();
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