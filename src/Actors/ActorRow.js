import React from 'react';
import '../Home/MovieRow.css';
import { withRouter, Link } from 'react-router-dom';

class ActorRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showDiv: false}
    }
    render() {
        return <table key={this.props.movies.id}>
        <tbody>
        <tr>
        <td>
        
        </td>
        <td>
            <h3>Title: {this.props.movies.original_title}</h3>
            <Link
            to={{
                pathname: "/showsdetail",
                id: this.props.movies.id // your data array of objects
            }}
            >
            <button type='button'>movie/show Page</button>
            </Link>

            <div>
            <p><b>Summary</b>: {this.props.movies.overview}</p>
            </div>

            <div>
            <img src={this.props.movies.poster_src} alt="prof pic" width="250" height="250"/>
            </div>

            <div id={this.props.movies.id}>
                <p><b>original_language</b>: {this.props.movies.original_language}</p>
                <p><b>Release Date </b> {this.props.movies.release_date}/10</p>
            </div>
        </td>
        </tr>
        </tbody>
        </table>
    }
}


export default withRouter(ActorRow);