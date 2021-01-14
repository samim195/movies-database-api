import React from 'react';
import '../Home/MovieRow.css'
import { withRouter, Link } from 'react-router-dom';

class CastRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showDiv: false}
    }
    render() {

        return (
            <div class="card con-2 margin" style={{width: "25rem"}}>
            <img class="card-img-top" src={this.props.cast.poster_src} alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">{this.props.cast.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                <Link
                to={{
                    pathname: "/Actors",
                    id: this.props.cast.name // your data array of objects
                }}
                >
                <button className="btn btn-primary" type='button'>Cast Page</button>
                </Link>
                <div id={this.props.cast.id}>
                <p className="card-text"><b>Popularity</b>: {this.props.cast.popularity}</p>
                <p className="card-text"><b>Gender</b>: {this.props.cast.gender}</p>
                <p className="card-text"><b>Acting</b>: {this.props.cast.known_for_department}</p>
                <p className="card-text"><b>Profile Path </b> {this.props.cast.profile_path}/10</p>
            </div>
            </div>
            </div>
        )
    }
    detailsPage() {
        this.props.history.push("/Details");
    }
}


export default withRouter(CastRow);