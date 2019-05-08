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
        <Result/>
        <Result/>
        <Result/>
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
        <p>Google Map HERE</p>
        <img src=""/>
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
   <section>
        <div><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p></div>
        
    </section>
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
