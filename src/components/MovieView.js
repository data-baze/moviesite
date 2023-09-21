import Hero from './Hero'
import { useParams } from 'react-router-dom';


const MovieView = () => {
    const { id } = useParams()
    return(

        <div>
            <Hero text="Movie detail view" />
        
        
        </div>

    );
};

export default MovieView;