import React from 'react';
import './MovieRow.css';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';

class MovieRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showDiv: false, favourites: []}
    }
    render() {

        return (
            <section className="section-img card float-left con-1" style={{width: "25rem", height: "100%"}}>
            <img className="card-img-top" src={this.props.movie.poster_src}  alt="Card  cap"/>
            <div className="card-body">
                <h5 className="card-title">{this.props.movie.title}</h5>
                <p className="card-text">{this.props.movie.overview}</p>
                <Link className=""
                to={{
                    pathname: "/Details",
                    id: this.props.movie.id // your data array of objects
                }}
                >
                <button className="btn btn-primary" type='button'><h4>Details Page</h4></button>
                </Link> 
                <button  className="btn btn-primary margin" onClick={() => this.moreInfo(this.props.movie.id)}><h5 className=''>More Info</h5></button>
                <button  className="btn btn-primary margin" onClick={() => this.addToFavourites(this.props.movie)}><h5 className=''>Add To Favourites</h5></button>


                <div style={{display: this.state.showDiv ? 'block' : 'none'}} id={this.props.movie.id}>
                <p className="card-text"><b>Popularity</b>: {this.props.movie.popularity}</p>
                <p className="card-text"><b>Release Date</b>: {this.props.movie.release_date}</p>
                <p className="card-text"><b>Original Title</b>: {this.props.movie.original_title}</p>
                <p className="card-text"><b>Votes on Average</b> {this.props.movie.vote_average}/10</p>
                </div>
            </div>
            </section>
        )
    }
    moreInfo() {
        var hideElem = document.getElementById(this.props.movie.id)
        if (hideElem.style.display === 'none') {
            // hideElem.style.display = 'block;';
            this.setState({showDiv: true})
        } else {
            // hideElem.style.display = 'none';
            this.setState({showDiv: false})
        }
    }
    addToFavourites(movie) {
        console.log(movie)
        console.log("values of movie")
        this.setState(previousState => ({
            favourites: [...previousState.favourites, movie]
        }));
        
        axios({
            method: 'post',
            url: 'http://localhost:5001/addfavourites',
            data: movie,
            headers: {"Access-Control-Allow-Origin": "*"}
        })
        .then(result => console.log(result))
        .catch(err => {
            console.log(err)
        });
    }
}


export default withRouter(MovieRow);