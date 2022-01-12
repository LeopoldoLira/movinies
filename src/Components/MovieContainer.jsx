import '../styles/movieContainers.css'

export const dbMovies = [
    {   id:1, 
        name:'SpiderMan No Way Home', 
        releaseDate:2021, 
        Rating:8.8, 
        plot:"With Spider-Man's identity now revealed, Peter turns to Doctor Strange for help. Something goes wrong and the multiverse becomes the biggest threat. Now Peter must figure out what it really means to be Spider-Man.", 
        img:'./moviesresources/imgs/spider.jpg'
    },
  
    {   id:2, 
        name:'Matrix Resurrections', 
        releaseDate:2021, 
        Rating:5.7, 
        plot:"A world of two realities: one, everyday life; the other, what is behind it. To discover if his reality is a mirage and to know himself, Mr. Anderson will have to choose to follow the white rabbit once more.", 
        img:'/moviesresources/imgs/matrix.jpg'
    },
    
    {   id:3, 
        name:`Don't Look Up`, 
        releaseDate:2021, 
        Rating:7.3, 
        plot:"It tells the story of two mediocre astronomers who must undertake a huge media tour to warn humanity of the arrival of a comet that is going to destroy the Earth.", 
        img:'/moviesresources/imgs/up.jpg'
    },
  
    {   id:4, 
        name:'Encanto', 
        releaseDate:2021, 
        Rating:7.3, 
        plot:"In Colombia, a young woman deals with the frustration of being the only member of the family who does not have magical powers.", 
        img:'/moviesresources/imgs/encanto.jpeg'
    },
  
    {   id:5, 
        name:'Raya and the Last Dragon', 
        releaseDate:2021, 
        Rating:7.3, 
        plot:"The kingdom of Kumandra is in danger. The only hope to save him is for a warrior named Raya to find the last dragon.", 
        img:'/moviesresources/imgs/raya.jpg'
    },
  
    {   id:6, 
        name:'Alita: Battle Angel', 
        releaseDate:2019, 
        Rating:7.3, 
        plot:"An action-packed story about a young woman's journey of self-discovery who wants to discover the truth about who she is and fight to change the world.", 
        img:'/moviesresources/imgs/alita.jpg'
    },
  
    {   id:7, 
        name:'Grown Ups 2', 
        releaseDate:2013, 
        Rating:5.4, 
        plot:"After moving the family to his hometown to be close to his friends and children, Lenny discovers that madness follows wherever he goes.", 
        img:'/moviesresources/imgs/gp2.jpg'
    },
  
    {   id:8, 
        name:'The Woman in Black', 
        releaseDate:2012, 
        Rating:6.4, 
        plot:"A young lawyer travels to a remote town where he discovers that the vengeful ghost of a spiteful woman is terrorizing the locals.", 
        img:'/moviesresources/imgs/woman.jpg'
    },
  
    {   id:9, 
        name:'Fast & Furious Presents: Hobbs & Shaw', 
        releaseDate:2019, 
        Rating:6.5, 
        plot:"Lawman Luke Hobbs and outlaw Deckard Shaw strike up an unlikely friendship when a cybergenetically enhanced villain threatens humanity's future.", 
        img:'/moviesresources/imgs/ff.jpg'
    },
  
    {   id:10, 
        name:'The Unforgivable', 
        releaseDate:2021, 
        Rating:7.2, 
        plot:"A woman is released from prison after serving a sentence for a violent crime and returns to a society that refuses to forgive her past.", 
        img:'/moviesresources/imgs/unf.jpg'
    },
  
    {   id:11, 
        name:'Red Notice', 
        releaseDate:2021, 
        Rating:6.4, 
        plot:"An Interpol agent tracks down the world's most wanted art thief.", 
        img:'/moviesresources/imgs/rn.jpg'
    },
  
    {   id:12, 
        name:'Black Widow', 
        releaseDate:2021, 
        Rating:6.7, 
        plot:"Natasha Romanoff faces the darkest parts of her life when a dangerous conspiracy related to her past arises.", 
        img:'/moviesresources/imgs/bw.jpg'
    },

    {   id:13, 
        name:'Jurassic World', 
        releaseDate:2015, 
        Rating:7.0, 
        plot:"A new theme park, built on the site of the original Jurassic Park, creates a genetically modified hybrid dinosaur, which escapes captivity and carries out a carnage.", 
        img:'/moviesresources/imgs/jw.jpg'
    },

    {   id:14, 
        name:'Fun with Dick and Jane', 
        releaseDate:2005, 
        Rating:6.2, 
        plot:"A wealthy couple loses their fortune after a series of bad decisions and decides that a life of crime is the only way to make ends meet.", 
        img:'/moviesresources/imgs/dj.jpg'
    },

    {   id:15, 
        name:'Scream', 
        releaseDate:2022, 
        Rating:10, 
        plot:"A new installment of the horror saga 'Scream' that will follow a woman who returns to her hometown to try to discover who has been committing a series of heinous crimes", 
        img:'/moviesresources/imgs/scr.jpg'
    }
  ]


const MovieContainer = () =>{
return(

    
        <div className='movieContainers'>
           {  dbMovies.map( x => 
             <div className='miniContainer' key = {x.id} > 
                 <img alt={x.name} src={x.img} />
                 <p>{x.name}</p>
                 <p>Release: {x.releaseDate}</p>
                 <p>Rating: {x.Rating} ⭐</p>
             </div>)
             }
        </div>
    )
}

export default MovieContainer