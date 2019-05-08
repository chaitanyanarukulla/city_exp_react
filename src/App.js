import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>City-Explorer</h1>
      <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
    </header>
  );
};

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
   
    };
    
  }
  render() {
    return (
      <React.Fragment>
        <Search />
        <Map/>
        <Result/>
      </React.Fragment>
    );
  }
  
}

class Search extends React.Component{
  constructor (props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <div>
        <input onChange={this.handel}></input>
        <button onClick={this.handelSearch}>Search Location</button>
      </div>
    )
  }
}
class Map extends React.Component{
  constructor (props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <div>
       <p>Google Map</p>
      </div>
    )
  }
}

class Result extends React.Component{
  constructor (props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <div>
        <div><p>Dark Sky Weather</p></div>
        <div><p> Event Brite</p></div>
        <div><p> Movie DB</p></div>
        <div><p> Yelp</p></div>
        <div><p>Hiking</p></div>
      </div>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
