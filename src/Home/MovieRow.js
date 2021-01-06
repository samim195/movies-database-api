import React from 'react';
import './MovieRow.css';
import { withRouter, Link } from 'react-router-dom';

class MovieRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showDiv: false}
    }
    render() {
        return <table className="tableWidth" key={this.props.movie.id}>
        <tbody>
        <tr>
        <td>
        
        </td>
        <td>
            <button  onClick={() => this.moreInfo(this.props.movie.id)}><h4>Title: {this.props.movie.title}</h4></button>
            <Link
                to={{
                    pathname: "/Details",
                    id: this.props.movie.id // your data array of objects
                }}
                >
                <button type='button'><h4>Details Page</h4></button>
                </Link>
            <div>
            <p><b>Summary</b>: {this.props.movie.overview}</p>
            </div>
            <div>
                <img src={this.props.movie.poster_src} alt="prof pic" width="400" height="400"/>
            </div>
            <div style={{display: this.state.showDiv ? 'block' : 'none'}} id={this.props.movie.id}>
                <p><b>Popularity</b>: {this.props.movie.popularity}</p>
                <p><b>Release Date</b>: {this.props.movie.release_date}</p>
                <p><b>Original Title</b>: {this.props.movie.original_title}</p>
                <p><b>Votes on Average</b> {this.props.movie.vote_average}/10</p>
            </div>
        </td>
        </tr>
        </tbody>
        </table>
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