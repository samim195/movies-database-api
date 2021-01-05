import React from 'react';
import './MovieRow.css';
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

            <div>
            <p><b>Summary</b>: {this.props.movies.overview}</p>
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