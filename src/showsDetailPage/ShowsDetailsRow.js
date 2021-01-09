import React from 'react';
import '../Home/MovieRow.css';
import { withRouter } from 'react-router-dom';

class ShowsDetailsRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showDiv: false}
    }
    render() {
        return <table className='container' key={this.props.shows.id}>
        <tbody>
        <tr>
        <td>
        
        </td>
        <td>
            <h3>Title: {this.props.shows.original_title}</h3>

            <div>
            <p><b>Summary</b>: {this.props.shows.overview}</p>
            </div>
            <div>
            <img src={this.props.shows.poster_src} alt="prof pic" width="300" height="300"/>
            </div>
            <div id={this.props.shows.id}>
                <p><b>popularity</b>: {this.props.shows.popularity}</p>
                <p><b>Release Date </b> {this.props.shows.release_date}/10</p>
                <p><b>Revenue </b> {this.props.shows.revenue}/10</p>
                <a href={this.props.shows.homepage}>{this.props.shows.homepage}</a>
                <h4>{this.props.shows.tagline}</h4>
            </div>
        </td>
        </tr>
        </tbody>
        </table>
    }
}


export default withRouter(ShowsDetailsRow);