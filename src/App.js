import './App.css';
import './Form.css'
import $ from 'jquery';
import { React, Component } from 'react';
import MovieRow from './MovieRow';
import Details from './Details.js';
import Actors from './Actors';
import ShowsDetailPage from './showsDetailPage/ShowsDetailPage'
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    console.log("initializer")

    this.state = {
      movieList: []
    }
  }

  searchButton = () => {
    // console.log("heloooooo")
    // var query = 'elite'
    var query = $('#searchBox').val()
    console.log(query)
    const url = "https://api.themoviedb.org/3/search/movie?api_key=21d7e7d170fcdc61c66d3c6d8d994196&query=" + query + "&page=1";
    $.ajax({
      url: url,
      success: (searchResults) => {
        console.log("Fetched data successfullu")
        console.log(searchResults['results'])
        const results = searchResults['results']

        var movies = []

        results.forEach((movie) => {
          // console.log(movie.name)
          movies.push(<MovieRow movie={movie}/>)
        });
        this.setState({movieList: movies})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
      
    })
  }
  searchButtonEnter = (e) => {
    // console.log("heloooooo")
    // var query = 'elite'
    e.preventDefault();
    var query = $('#searchBox').val()
    console.log(query)
    const url = "https://api.themoviedb.org/3/search/movie?api_key=21d7e7d170fcdc61c66d3c6d8d994196&query=" + query + "&page=1";
    $.ajax({
      url: url,
      success: (searchResults) => {
        console.log("Fetched data successfullu")
        console.log(searchResults['results'])
        const results = searchResults['results']

        var movies = []

        results.forEach((movie) => {
          // console.log(movie.name)
          movies.push(<MovieRow movie={movie}/>)
        });
        this.setState({movieList: movies})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
      
    })
  }
  render() {
    return (
        <div>
          <Route path='/Home'>
            <header>
            <form onSubmit={this.searchButtonEnter} >
            <input className='Search' id='searchBox' type="text" placeholder="Search.."/>
            </form>
            <button onClick={this.searchButton} type="submit">Submit</button>
            </header>
            {this.state.movieList}
          </Route>
          <Route path='/Details' component={Details}/>
          <Route path='/Actors' component={Actors}/>
          <Route path='/ShowsDetail' component={ShowsDetailPage}/>
        </div>
    );
  }
}

export default App;
