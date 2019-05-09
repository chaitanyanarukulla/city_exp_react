import React from 'react';
import Header from './header.js';
import Map from './map.js';
import Search from './search-form.js'
import Result from './result.js'


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    location:{}
   
    }
    
  }


  render() {
    return (
      <React.Fragment>
        <Search promt= ""/>
        <Map location ={this.state.location}/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
      </React.Fragment>
    );
  }
  
}


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    )
  }
}




export default App;
