import React from 'react';
import '../Home/MovieRow.css'
import { withRouter, Link } from 'react-router-dom';

class CastRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showDiv: false}
    }
    render() {

        return (
            <div class="row">
            <div class="col-sm-6 ">
            <div class="card">
            
                <img className="card" src={this.props.cast.poster_src} alt="Card image cap" height='300'></img>
                <h4 className='card-title' >Title: {this.props.cast.name}</h4>

                <Link
                to={{
                    pathname: "/Actors",
                    id: this.props.cast.name // your data array of objects
                }}
                >
                <button type='button'>Cast Page</button>
                </Link>
                <div id={this.props.cast.id}>
                <p><b>Popularity</b>: {this.props.cast.popularity}</p>
                <p><b>Gender</b>: {this.props.cast.gender}</p>
                <p><b>Acting</b>: {this.props.cast.known_for_department}</p>
                <p><b>Profile Path </b> {this.props.cast.profile_path}/10</p>
            </div>
            </div>
            </div>
            </div>
        )
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