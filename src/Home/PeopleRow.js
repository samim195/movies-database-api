import React from 'react';
import '../MovieRow.css';
import { withRouter, Link } from 'react-router-dom';

class PeopleRow extends React.Component {
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
            <button  onClick={() => this.moreInfo(this.props.movie.id)}><h3>Title: {this.props.movie.name}</h3></button>
            <Link
                to={{
                    pathname: "/Details",
                    id: this.props.movie.id // your data array of objects
                }}
                >
                <button type='button'>Details Page</button>
                </Link>
            <div>
            </div>
            <div style={{display: this.state.showDiv ? 'block' : 'none'}} id={this.props.movie.id}>
                <p><b>Popularity</b>: {this.props.movie.popularity}</p>
                <p><b>Known For</b>: {this.props.movie.known_for_department}</p>
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


export default withRouter(PeopleRow);