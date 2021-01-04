import React from 'react';
import './MovieRow.css';
import { withRouter } from 'react-router-dom';

class MovieRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showDiv: false}
    }
    render() {
        return <table key={this.props.movie.id}>
        <tbody>
        <tr>
        <td>
        
        </td>
        <td>
            <button  onClick={() => this.moreInfo(this.props.movie.id)}><h3>Title: {this.props.movie.title}</h3></button>
            <button onClick={() => this.detailsPage(this.props.movie.id)}><h3>Click for more details</h3></button>
            <div>
            <p><b>Summary</b>: {this.props.movie.overview}</p>
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
    detailsPage() {
        this.props.history.push("/Details");
    }
}


export default withRouter(MovieRow);