import React from 'react';
import './MovieRow.css';
import { withRouter, Link } from 'react-router-dom';

class PeopleRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showDiv: false}
    }
    render() {

    return (
        <li className=" con-1" style={{width: "50rem"}}>
        <div className="col-sm-7 ">
            <img className="card-img-top " src={this.props.movie.poster_src} alt="Card image cap"></img>
            <div className="card-body">
            <h2 className='card-title'>{this.props.movie.name}</h2>

            <Link className=""
            to={{
                pathname: "/Actors",
                id: this.props.movie.name // your data array of objects
            }}
            >
            <button className="btn btn-primary" type='button'><h4>Actors Page</h4></button>
            </Link> 

            <div  id={this.props.movie.id}>
            <p className="card-text"><b>Popularity</b>: {this.props.movie.popularity}</p>
            <p className="card-text"><b>Known For</b>: {this.props.movie.known_for_department}</p>
            <p className="card-text"><b>Votes on Average</b> {this.props.movie.vote_average}/10</p>
            </div>
            </div>
        </div>
        </li>

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


export default withRouter(PeopleRow);