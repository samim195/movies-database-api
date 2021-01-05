import './App.css';
import './Form.css'
import $ from 'jquery';
import { React, Component } from 'react';
import MovieRow from './MovieRow';
import PeopleRow from './Home/PeopleRow'
import TvRow from './Home/TvRow'
import Details from './Details.js';
import Actors from './Actors';
import ShowsDetailPage from './showsDetailPage/ShowsDetailPage'
import { Route, Switch } from 'react-router-dom';
// import './dropdown.css'
var Select = require('react-select');


class App extends Component {
  constructor(props) {
    super(props);
    console.log("initializer")

    this.state = {
      movieList: [],
      options:{ value: 'one', label: 'One' }
    }
  }

  searchButton = () => {
    // console.log("heloooooo")
    // var query = 'elite'
    var query = $('#searchBox').val()
    console.log(query)
    // const url = "https://api.themoviedb.org/3/search/movie?api_key=21d7e7d170fcdc61c66d3c6d8d994196&query=" + query + "&page=1";
    const url = "https://api.themoviedb.org/3/search/multi?api_key=21d7e7d170fcdc61c66d3c6d8d994196&language=en-US&query=" + query + "&page=1&include_adult=false"

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
    // const url = "https://api.themoviedb.org/3/search/movie?api_key=21d7e7d170fcdc61c66d3c6d8d994196&query=" + query + "&page=1";
    const url = "https://api.themoviedb.org/3/search/multi?api_key=21d7e7d170fcdc61c66d3c6d8d994196&language=en-US&query=" + query + "&page=1&include_adult=false"
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

  searchButtonMovies = () => {
    // console.log("heloooooo")
    // var query = 'elite'
    var query = $('#searchBox').val()
    console.log(query)
    const url = "https://api.themoviedb.org/3/search/movie?api_key=21d7e7d170fcdc61c66d3c6d8d994196&query=" + query + "&page=1";
    // const url = "https://api.themoviedb.org/3/search/multi?api_key=21d7e7d170fcdc61c66d3c6d8d994196&language=en-US&query=" + query + "&page=1&include_adult=false"

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

  searchButtonTvShows = () => {
    // console.log("heloooooo")
    // var query = 'elite'
    var query = $('#searchBox').val()
    console.log(query)
    // const url = "https://api.themoviedb.org/3/search/movie?api_key=21d7e7d170fcdc61c66d3c6d8d994196&query=" + query + "&page=1";
    const url = 'https://api.themoviedb.org/3/search/tv?api_key=21d7e7d170fcdc61c66d3c6d8d994196&language=en-US&page=1&query='+query+'&include_adult=false';
    $.ajax({
      url: url,
      success: (searchResults) => {
        console.log("Fetched data successfullu")
        console.log(searchResults['results'])
        const results = searchResults['results']

        var movies = []

        results.forEach((movie) => {
          // console.log(movie.name)
          movies.push(<TvRow movie={movie}/>)
        });
        this.setState({movieList: movies})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
      
    })
  }

  searchButtonPeople = () => {
    // console.log("heloooooo")
    // var query = 'elite'
    var query = $('#searchBox').val()
    console.log(query)
    const url = 'https://api.themoviedb.org/3/search/person?api_key=21d7e7d170fcdc61c66d3c6d8d994196&language=en-US&query='+query+'&page=1&include_adult=false'
    // const url = "https://api.themoviedb.org/3/search/movie?api_key=21d7e7d170fcdc61c66d3c6d8d994196&query=" + query + "&page=1";
    $.ajax({
      url: url,
      success: (searchResults) => {
        console.log("Fetched data successfullu")
        console.log(searchResults['results'])
        const results = searchResults['results']

        var movies = []

        results.forEach((movie) => {
          // console.log(movie.name)
          movies.push(<PeopleRow movie={movie}/>)
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
            <button onClick={this.searchButton} type="submit">Search All</button>
            <button onClick={this.searchButtonMovies} type="submit">Movies</button>
            <button onClick={this.searchButtonPeople} type="submit">People</button>
            <button onClick={this.searchButtonTvShows} type="submit">TV Shows</button>
            
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
