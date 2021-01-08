import { React, Component } from 'react';
import $ from 'jquery';
import ShowsDetailsRow from './ShowsDetailsRow';

class ShowsDetailPage extends Component {
    constructor(props) {
        super(props)
        this.state = {showsDetailList: []}
    }

    componentDidMount = () => {
        console.log(this.props.location.id)
        const id = this.props.location.id;
        var url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=21d7e7d170fcdc61c66d3c6d8d994196&language=en-US'
        $.ajax ({
            url: url,
            success: (searchResults) => {
                console.log("Successfully called Showdeatils page API");
                console.log(searchResults);
                console.log(typeof(searchResults))
                var showsArray = []
                // searchResults[0].forEach((shows) => {
                //     showsArray.push(shows)
                //     console.log(shows)
                // });
                // Object.keys(searchResults).forEach(function(key) {
                //     // console.log(key, searchResults[key]);
                //     showsArray[key] = searchResults[key]
                // });
                searchResults.poster_src = "https://image.tmdb.org/t/p/w185" + searchResults.poster_path
                showsArray.push(<ShowsDetailsRow key={searchResults.id} shows={searchResults}/>)

                this.setState({showsDetailList: showsArray})
            },
            error: (xhr, status, err) => {
                console.log(err)
            }
        });
    }
    

    render() {
        return (
            <div>
            <h1>Show/Movie Details Page</h1>
                {this.state.showsDetailList}
            </div>
        )
    }
}

export default ShowsDetailPage;