import React from 'react';
import './MovieRow.css';
import { withRouter, Link } from 'react-router-dom';

class MovieRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showDiv: false}
    }
    render() {

        return (
            <div class="row">
            <div class="col-sm-6 ">
            <div classNAme="card">
            <h2 className=''>{this.props.movie.title}</h2>
                <img className="" src={this.props.movie.poster_src} alt="Card image cap"></img>
                <Link 
                to={{
                    pathname: "/Details",
                    id: this.props.movie.id // your data array of objects
                }}
                >
                <button type='button'><h4>Details Page</h4></button>
                </Link> 
                <button  className="" onClick={() => this.moreInfo(this.props.movie.id)}><h5 className=''>More Info</h5></button>

                </div>

                <p className="card-text"><b>Summary</b>: {this.props.movie.overview}</p>
                <div style={{display: this.state.showDiv ? 'block' : 'none'}} id={this.props.movie.id}>
                <p className="card-text"><b>Popularity</b>: {this.props.movie.popularity}</p>
                <p className="card-text"><b>Release Date</b>: {this.props.movie.release_date}</p>
                <p className="card-text"><b>Original Title</b>: {this.props.movie.original_title}</p>
                <p className="card-text"><b>Votes on Average</b> {this.props.movie.vote_average}/10</p>
                </div>
                </div>
            </div>
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
}


export default withRouter(MovieRow);