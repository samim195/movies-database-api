import React from 'react';
import './MovieRow.css';
import { withRouter, Link } from 'react-router-dom';

class CastRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showDiv: false}
    }
    render() {
        return <table key={this.props.cast.id}>
        <tbody>
        <tr>
        <td>
        
        </td>
        <td>
            <button><h3>Title: {this.props.cast.name}</h3></button>
            <Link
            to={{
                pathname: "/Actors",
                id: this.props.cast.name // your data array of objects
            }}
            >
            <button type='button'>Actors Page</button>
            </Link>
            <div>
            <p><b>Summary</b>: {this.props.cast.overview}</p>
            </div>
            <div id={this.props.cast.id}>
                <p><b>Popularity</b>: {this.props.cast.popularity}</p>
                <p><b>Gender</b>: {this.props.cast.gender}</p>
                <p><b>Acting</b>: {this.props.cast.known_for_department}</p>
                <p><b>Profile Path </b> {this.props.cast.profile_path}/10</p>
            </div>
        </td>
        </tr>
        </tbody>
        </table>
    }
    // moreInfo() {
    //     var hideElem = document.getElementById(this.props.cast.id)
    //     if (hideElem.style.display === 'none') {
    //         // hideElem.style.display = 'block;';
    //         this.setState({showDiv: true})
    //     } else {
    //         // hideElem.style.display = 'none';
    //         this.setState({showDiv: false})
    //     }
    // }
    detailsPage() {
        this.props.history.push("/Details");
    }
}


export default withRouter(CastRow);