import './App.css';
import './Form.css'
import $ from 'jquery';
import { React, Component } from 'react';
import MovieRow from './Home/MovieRow';
import PeopleRow from './Home/PeopleRow'
import TvRow from './Home/TvRow'
import Details from './Details/Details';
import Actors from './Actors/Actors';
import ShowsDetailPage from './showsDetailPage/ShowsDetailPage'
import { Route, Switch, Link } from 'react-router-dom';
// import './dropdown.css'
var Select = require('react-select');


class App extends Component {
  constructor(props) {
    super(props);
    console.log("initializer")

    this.state = {
      movieList: [],
      query: '',
      suggestedNames: []
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
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          // console.log(movie.name)
          movies.push(<MovieRow key={movie.id} movie={movie}/>)
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
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          // console.log(movie.name)
          movies.push(<MovieRow key={movie.id} movie={movie}/>)
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
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          // console.log(movie.name)
          movies.push(<MovieRow key={movie.id} movie={movie}/>)
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
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          // console.log(movie.name)
          movies.push(<TvRow key={movie.id} movie={movie}/>)
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
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          // console.log(movie.name)
          movies.push(<PeopleRow key={movie.id} movie={movie}/>)
        });
        this.setState({movieList: movies})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
      
    })
  }

  handleInputChange = (event) => {
    event.preventDefault();
    var value = event.target.value;
    console.log(value)
    this.setState({query: value})
    if(this.state.query.length >= 4) {
      this.checkInput()
      console.log(this.state.query)
    }
  }

  checkInput = () => {
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
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.profile_path
          // console.log(movie.name)
          if (movie.name == null) {
            console.log(movie.id)
            movie.name = movie.title
            // movies.push(movie.title)
            console.log(movie.name)
          }
          // } else {
          //   movies.push(movie.name)
          //   console.log(movie.name)
          // // }
          movies.push(movie)
        });
        this.setState({suggestedNames: movies})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
      
    })
  }
  
  render() {
    return (
        <div className='parentDiv'>
          <Route exact path={['/Home', '/']}>
            <header>
            <form onSubmit={this.searchButtonEnter} >
            <input className='Search' id='searchBox' type="text" placeholder="Search.." ref={input => this.search = input} onChange={this.handleInputChange}/>
            </form>
            <div className='childDiv'>
            <button className='homeButtons' onClick={this.searchButton} type="submit">Search All</button>
            <button className='homeButtons' onClick={this.searchButtonMovies} type="submit">Movies</button>
            <button className='homeButtons' onClick={this.searchButtonPeople} type="submit">People</button>
            <button className='homeButtons' onClick={this.searchButtonTvShows} type="submit">TV Shows</button>
            </div>
            </header>
            {
              this.state.suggestedNames.map(match => {
                return (
                  <div className="Matches">
                  <Link
                  to={{
                      pathname: "/Details",
                      id: match.id // your data array of objects
                  }}
                  >
                  <button type='button'>{match.name}</button>
                  </Link>
                  </div>
                  )
              })
            }
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
