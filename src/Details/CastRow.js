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
            <div class="container-fluid" style={{width: "50rem"}}>
            <div class="col-sm-8 ">
            
                <img className="card-img-top " src={this.props.cast.poster_src} alt="Card image cap" height='300'></img>
                <h4 className='card-title' >{this.props.cast.name}</h4>

                <Link
                to={{
                    pathname: "/Actors",
                    id: this.props.cast.name // your data array of objects
                }}
                >
                <button type='button'>Cast Page</button>
                </Link>
                <div id={this.props.cast.id}>
                <p className="card-text"><b>Popularity</b>: {this.props.cast.popularity}</p>
                <p className="card-text"><b>Gender</b>: {this.props.cast.gender}</p>
                <p className="card-text"><b>Acting</b>: {this.props.cast.known_for_department}</p>
                <p className="card-text"><b>Profile Path </b> {this.props.cast.profile_path}/10</p>
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