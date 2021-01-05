import React from 'react';
import '../Home/MovieRow.css';
import { withRouter, Link } from 'react-router-dom';

class ShowsDetailsRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showDiv: false}
    }
    render() {
        return <table key={this.props.shows.id}>
        <tbody>
        <tr>
        <td>
        
        </td>
        <td>
            <h3>Title: {this.props.shows.original_title}</h3>

            <div>
            <p><b>Summary</b>: {this.props.shows.overview}</p>
            </div>
            <div id={this.props.shows.id}>
                <p><b>popularity</b>: {this.props.shows.popularity}</p>
                <p><b>Release Date </b> {this.props.shows.release_date}/10</p>
                <p><b>Revenue </b> {this.props.shows.revenue}/10</p>

            </div>
        </td>
        </tr>
        </tbody>
        </table>
    }
}


export default withRouter(ShowsDetailsRow);