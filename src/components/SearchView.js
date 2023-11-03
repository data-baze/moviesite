
import Hero from './Hero';
import MovieCard from './MovieCard';







const SearchView = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`
    const notFound = `No Movies found for ${keyword}`
  


    if (!searchResults || Object.keys(searchResults).length === 0) {
        return <Hero text={notFound} />
        } 
        else {

    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })


    return (
      <div>
            <Hero text={title} />
            {resultsHtml &&
            <div className="container"> 
                <div className="row">
                    {resultsHtml}
                </div>
            </div>
            
            }
          
      </div>
    )
  }
}
  export default SearchView;