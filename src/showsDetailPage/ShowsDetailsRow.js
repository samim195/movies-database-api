import React from 'react';
import '../Home/MovieRow.css';
import { withRouter } from 'react-router-dom';

class ShowsDetailsRow extends React.Component {

    render() {
        return (
        <li className=''>
        <div className="container-fluid" style={{width: "50rem"}}>
        <div className="col-sm-7 ">
            <img className="card-img-top " src={this.props.shows.poster_src} alt="Card  cap"></img>
            <div className="card-body">
            <h2 className='card-title'>{this.props.shows.id}</h2>
            <p className="card-text"><b>Summary</b>: {this.props.shows.overview}</p>
            <p className="card-text"><b>popularity</b>: {this.props.shows.popularity}</p>
            <p className="card-text"><b>Release Date </b> {this.props.shows.release_date}</p>
            <p><b>Revenue </b> {this.props.shows.revenue}/10</p>
            <a href={this.props.shows.homepage}>{this.props.shows.homepage}</a>
            <h4>{this.props.shows.tagline}</h4>
            </div>
            </div>
        </div>
    </li>
        )

    }
}


export default withRouter(ShowsDetailsRow);