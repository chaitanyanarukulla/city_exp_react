import React from 'react'; 
import superagent from 'superagent';


class Search extends React.Component{
  constructor (props){
    super(props);
    this.state = {

    };
    }

    handleChange = event => {
      let location = event.target.value;
      this.setState({location});
      console.log(location)
    };


    handleSubmit = async (event) => {
      event.preventDefault();
      let url = `https://city-explorer-backend.herokuapp.com/location?data=${this.state.location}`;
      let data = await superagent.get(url);
      // console.log(data);
      this.setState({ databody: data.body});
      // console.log(this.state);
    };

  render(){
    return(
        <form onSubmit={this.handleSubmit}>
        <input type="text" value ={this.state.value} onChange = {this.handleChange}/>
        <input type="submit" value="Submit"/>
        </form>
     );
  }
}

export default Search;