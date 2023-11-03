import React from 'react'
import { useState, useEffect } from 'react'
import MovieCard from './MovieCard'




const MovieList = () => {
    
    const [movies, setMovies] = useState ([])

    useEffect (()=>{
        fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=921ffd8a4b3025daed7f3998c1c654bf')
            .then(response => response.json())
            .then(data =>{
                console.log(data)
                setMovies(data.results)
            })
    }, [] )

    const movieHtml = movies.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })

    return (
      <div>
        
            {movieHtml &&
            <div className="container"> 
                <div className="row">
                    {movieHtml}
                </div>
            </div>
            
            }
    </div>
    )

        }


export default MovieList;