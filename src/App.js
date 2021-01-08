import './App.css';
import './Form.css'
import $ from 'jquery';
import { React, useState, useEffect } from 'react';
import MovieRow from './Home/MovieRow';
import PeopleRow from './Home/PeopleRow'
import TvRow from './Home/TvRow'
import Details from './Details/Details';
import Actors from './Actors/Actors';
import ShowsDetailPage from './showsDetailPage/ShowsDetailPage'
import { Route, Link } from 'react-router-dom';
// import './dropdown.css'

const App = () => {
  const [movieList, setMovieList] = useState([])
  const [queryInput, setQuery] = useState('')
  const [suggestedNames, setNames] = useState([])

  useEffect(() => {
    console.log("Hello")
    if(queryInput.length >= 4) {
      checkInput()
      // console.log(queryInput)
      // console.log(queryInput.length)
    }
  }, [queryInput]);


// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       movieList: [],
//       query: '',
//       suggestedNames: []
//     }
//   }

  function searchButton() {
    var category = $('select.category').val();
    console.log(category)
    // console.log("heloooooo")
    // var query = 'elite'
    var query = $('#searchBox').val()
    console.log(query)
    // const url = "https://api.themoviedb.org/3/search/movie?api_key=21d7e7d170fcdc61c66d3c6d8d994196&query=" + query + "&page=1";
    if (category == 'all') {
      console.log("seachring for everything")
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
          // this.setState({movieList: movies})
          setMovieList(movies)
        },
        error: (xhr, status, err) => {
          console.error("Failed to fetch data")
        }
      })
    } else if (category == 'movies') {
      console.log("seachring movies")
        const url = "https://api.themoviedb.org/3/search/movie?api_key=21d7e7d170fcdc61c66d3c6d8d994196&query=" + query + "&page=1";    
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
            // this.setState({movieList: movies})
            setMovieList(movies)
          },
          error: (xhr, status, err) => {
            console.error("Failed to fetch data")
          }
          
        })
      } else if (category == 'people') {
        console.log("seaching people")
        var inputValue = query.split(" ")
        var newQuery = ''
        for (let i=0; i<inputValue.length; i++) {
          newQuery += inputValue[i]
          if (i != inputValue.length) { 
            newQuery += '%20'
          }
        }
        console.log(inputValue)
        console.log(inputValue)
        const url = 'https://api.themoviedb.org/3/search/person?api_key=21d7e7d170fcdc61c66d3c6d8d994196&language=en-US&query='+newQuery+'&page=1&include_adult=false'
        console.log(url)
        // const url = "https://api.themoviedb.org/3/search/movie?api_key=21d7e7d170fcdc61c66d3c6d8d994196&query=" + query + "&page=1";
        $.ajax({
          url: url,
          success: (searchResults) => {
            console.log("Fetched data successfullu")
            console.log(searchResults['results'])
            const results = searchResults['results']
    
            var movies = []
    
            results.forEach((movie) => {
              console.log(movie.profile_path)
              movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.profile_path
              // console.log(movie.name)
              movies.push(<PeopleRow key={movie.id} movie={movie}/>)
            });
            // this.setState({movieList: movies})
            setMovieList(movies)
          },
          error: (xhr, status, err) => {
            console.error("Failed to fetch data")
          }
          
        })
      } else if (category == 'tv shows') {
        const url = 'https://api.themoviedb.org/3/search/tv?api_key=21d7e7d170fcdc61c66d3c6d8d994196&language=en-US&page=1&query='+query+'&include_adult=false';
        console.log("seachring tv shows")
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
            // this.setState({movieList: movies})
            setMovieList(movies)
          },
          error: (xhr, status, err) => {
            console.error("Failed to fetch data")
          }
          
        })
      }
  }
  function searchButtonEnter(e){
    e.preventDefault();
    var category = $('select.category').val();
    console.log(category)
    // console.log("heloooooo")
    // var query = 'elite'
    var query = $('#searchBox').val()
    console.log(query)
    // const url = "https://api.themoviedb.org/3/search/movie?api_key=21d7e7d170fcdc61c66d3c6d8d994196&query=" + query + "&page=1";
    const url = "https://api.themoviedb.org/3/search/multi?api_key=21d7e7d170fcdc61c66d3c6d8d994196&language=en-US&query=" + query + "&page=1&include_adult=false"

    if (category == 'all') {
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
          // this.setState({movieList: movies})
          setMovieList(movies)
        },
        error: (xhr, status, err) => {
          console.error("Failed to fetch data")
        }
      })
    } else if (category == 'movies') {
        const url = "https://api.themoviedb.org/3/search/movie?api_key=21d7e7d170fcdc61c66d3c6d8d994196&query=" + query + "&page=1";    
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
            // this.setState({movieList: movies})
            setMovieList(movies)
          },
          error: (xhr, status, err) => {
            console.error("Failed to fetch data")
          }
          
        })
      } else if (category == 'people') {
        console.log("searching people")
        var inputValue = query.split(" ")
        var newQuery = ''
        for (let i=0; i<inputValue.length; i++) {
          newQuery += inputValue[i]
          if (i != inputValue.length - 1) { 
            newQuery += '%20'
          }
        }
        console.log(inputValue)
        console.log(inputValue)
        const url = 'https://api.themoviedb.org/3/search/person?api_key=21d7e7d170fcdc61c66d3c6d8d994196&language=en-US&query='+newQuery+'&page=1&include_adult=false'
        console.log(url)
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
            // this.setState({movieList: movies})
            setMovieList(movies)
          },
          error: (xhr, status, err) => {
            console.error("Failed to fetch data")
          }
          
        })
      } else if (category == 'tv shows') {
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
            // this.setState({movieList: movies})
            setMovieList(movies)
          },
          error: (xhr, status, err) => {
            console.error("Failed to fetch data")
          }
          
        })
      }
  }


  function handleInputChange(event) {
    event.preventDefault();
    var value = event.target.value;
    // console.log(value);
    // this.setState({query: value})
    setQuery(value)
  }

  function checkInput () {
    // console.log("heloooooo")
    // var query = 'elite'
    var query = $('#searchBox').val()
    // console.log(query)
    
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
            // console.log(movie.id)
            movie.name = movie.title
            // movies.push(movie.title)
            // console.log(movie.name)
          }
          // } else {
          //   movies.push(movie.name)
          //   console.log(movie.name)
          // // }
          movies.push(movie)
        });
        // this.setState({suggestedNames: movies})
        setNames(movies)
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
      
    })
  }
  
    return (
        <div className=''>
          <Route exact path={['/Home', '/']}>
            <header>
            <div className='column form-group'>
            <form onSubmit={searchButtonEnter} >
            <input className='form-control' id='searchBox' type="text" placeholder="Search.."  onChange={handleInputChange}/>
            </form>
            <div className='dropdown'>
            <button className='homeButtons btn btn-primary' id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={searchButton} type="submit">Search</button>
            <select className="category btn btn-secondary dropdown-toggle" aria-labelledby="dropdownMenuButton">
            <option value="all">All</option>
            <option value="movies"> Movies</option>
            <option value="people"> People</option>
            <option value="tv Shows"> TV Shows</option>
          </select>
          </div>
          <div className="column LC20lb DKV0Md">
          {
            suggestedNames.map(match => {
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
          
          </div>
            </div>
            </header>
            {movieList ? (
            <div className='column'>
              {movieList}
            </div>
            ) : (
              <p>No suggestions found</p>
            )
            }
            
          </Route>
          <Route path='/Details' component={Details}/>
          <Route path='/Actors' component={Actors}/>
          <Route path='/ShowsDetail' component={ShowsDetailPage}/>
        </div>
        
    );
}

export default App;
