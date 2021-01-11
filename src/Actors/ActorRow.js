import React from 'react';
import '../Home/MovieRow.css';
import { withRouter, Link } from 'react-router-dom';

class ActorRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showDiv: false}
    }
    render() {

        return (
            <li className='con-1'>
            <div className="container-fluid" style={{width: "50rem"}}>
            <div className="col-sm-7 ">
                <img className="card-img-top " src={this.props.movies.poster_src} alt="Card image cap"></img>
                <div className="card-body">
                <h2 className='card-title'>{this.props.movies.original_title}</h2>

                <Link className=""
                to={{
                    pathname: "/showsdetail",
                    id: this.props.movies.id // your data array of objects
                }}
                >
                <button className="btn btn-primary" type='button'><h4>Movie/show Page</h4></button>
                </Link> 
                

                <p className="card-text"><b>Summary</b>: {this.props.movies.overview}</p>
                <div style={{display: this.state.showDiv ? 'block' : 'none'}} id={this.props.movies.id}>
                <p className="card-text"><b>original_language</b>: {this.props.movies.original_language}</p>
                <p className="card-text"><b>Release Date </b> {this.props.movies.release_date}/10</p>
                </div>
                </div>
            </div>
            </div>
        </li>
        )

    }
}


export default withRouter(ActorRow);