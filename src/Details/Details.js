import { React, Component } from 'react';
import $ from 'jquery';
import { withRouter } from 'react-router-dom';
import  CastRow  from './CastRow.js';
import '../App.css'

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {castList: []}
    }
    componentDidMount = () => {
        console.log("---------------------------")
        console.log(this.props.location.id)
        const id = this.props.location.id
        const url = 'https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=21d7e7d170fcdc61c66d3c6d8d994196&language=en-US'
        $.ajax ({
        url: url,
        success: (searchResults) => {
            console.log("Successful call to the API");
            console.log(searchResults);
            var results = searchResults.cast
            console.log(results)
            // this.setState({results: searchResults});
            var casts = []

            results.forEach((cast) => {
                cast.poster_src = "https://image.tmdb.org/t/p/w185" + cast.profile_path
                casts.push(<CastRow key={cast.id} cast={cast}/>)
            });
            this.setState({castList: casts});
        },
        error: (xhr, status, err) => {
            console.log(err);
            }
        });
    }
    render() {
        return (
            <div className="container">
                {this.state.castList}
            </div>
        )
    }
}


export default withRouter(Details);

