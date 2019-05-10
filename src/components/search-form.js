import React from 'react';
import superagent from 'superagent';

class SearchForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      queryData: '',
    };
  }

  handleChange = e => {
    let queryData = e.target.value;
    this.setState({queryData});
  }

  handleSubmit = async e =>{
    e.preventDefault();
    let url = `https://aqueous-springs-46846.herokuapp.com/location`;
    let location = await superagent.get(url).query({data: this.state.queryData});
    this.props.setLocation(location.body);
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}></input>
          <button>Explorer</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;