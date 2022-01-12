import '../styles/movieContainers.css'
import { dbMovies } from './store'
import { memo } from 'react'

const MovieContainer = () =>{
    return(
        <div className='movieContainers'>
           {  dbMovies.map( x => 
             <div className='miniContainer' key = {x.id} > 
                 <img alt={x.name} src={x.img} />
                 <p>{x.name}</p>
                 <p>Release: {x.releaseDate}</p>
                 <p>Rating: {x.Rating} ⭐</p>
                 <button>See more</button>
             </div>)
             }
        </div>
    )
}

export default memo(MovieContainer)