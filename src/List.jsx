const ListMovies = ({items}) => {
    return items.map(item => (
        <h1>
            <li>{item}</li>
        </h1>
    ))
}

export default ListMovies;