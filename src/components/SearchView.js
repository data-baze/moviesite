
import Hero from './Hero';


const SearchView = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`
    return (
      <div>
            <Hero text={title} />
          
      </div>
    )
  }

  export default SearchView;