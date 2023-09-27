import { useContext, useState } from 'react'
import { ReactComponent as Favs } from './Favs.svg'
import { ReactComponent as Share } from './Share.svg'
import { ThemeContext } from '../../context'
import { DetailedMovie } from '../../getMovies'
import { customizeFavAndShareBtn } from '../../stylesGenerator'
import { hover } from '@testing-library/user-event/dist/hover'

type BtnsProps={
    movie:DetailedMovie,
    favourites: DetailedMovie[],
    addFavs: (favourite: DetailedMovie) => void,
    removeFav: (id: number) => void
}
export const FavandShareBtns=({favourites,movie,addFavs,removeFav}:BtnsProps)=>{
    const [isCopied, setisCopied] = useState(false)
    const theme = useContext(ThemeContext)
    const isFavourite = favourites.find((favmovie) => movie && favmovie.id === movie.id)
    
    return(<><div className='fullScreen__btns-wrapper'>
    <button style={customizeFavAndShareBtn(isFavourite!==undefined,theme,'Fav')}
        onClick={() => isFavourite ? removeFav(movie.id) : addFavs(movie)}>
        <Favs />
    </button>
    <button style={customizeFavAndShareBtn(false,theme,'Share')} className='fullScreen__btn--share'
        onClick={() => {
            navigator.clipboard.writeText(window.location.href)
            setisCopied(true)
        }}>
        <Share />
    </button>
</div>
{isCopied && <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>Link added to your clickboard</p>}
</>)
}