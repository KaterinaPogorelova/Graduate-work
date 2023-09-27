import { ThemeContext } from "../../context"
import { useContext } from "react"
import { DetailedMovie } from "../../getMovies"

type fullProps={
    movie:DetailedMovie
}
export const FullScreenProps=({movie}:fullProps)=>{
    const theme = useContext(ThemeContext)

    return(<div className='fullScreen__props'>
    {movie.release_date && <div className='fullScreen__prop'>
        <p className='fullScreen__prop-name'>Year</p>
        <p className='fullScreen__prop-desc' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>{movie.release_date.slice(0, 4)}</p>
    </div>}
    <div className='fullScreen__prop'>
        <p className='fullScreen__prop-name'>Released</p>
        <p className='fullScreen__prop-desc' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>{movie.release_date}</p>
    </div>
    {movie.budget !== 0 && <div className='fullScreen__prop'>
        <p className='fullScreen__prop-name'>Budget</p>
        <p className='fullScreen__prop-desc' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>{'$' + movie.budget}</p>
    </div>}
    {movie.revenue !== 0 && <div className='fullScreen__prop'>
        <p className='fullScreen__prop-name'>Revenue</p>
        <p className='fullScreen__prop-desc' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>{'$' + movie.revenue}</p>
    </div>}
    {movie.production_countries !== undefined && movie.production_countries.length !== 0 && <div className='fullScreen__prop'>
        <p className='fullScreen__prop-name'>Country</p>
        <p className='fullScreen__prop-desc' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>{movie.production_countries.map((country) => {
            if (!movie.production_countries) return
            if (movie.production_countries.indexOf(country) === movie.production_countries.length - 1) {
                return country.name
            } else {
                return country.name + ', '
            }
        })}</p>
    </div>}
    {movie.production_companies !== undefined && movie.production_companies.length !== 0 && <div className='fullScreen__prop'>
        <p className='fullScreen__prop-name'>Production</p>
        <p className='fullScreen__prop-desc' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>{movie.production_companies.map((company) => {
            if (!movie.production_companies) return
            if (movie.production_companies.indexOf(company) === movie.production_companies.length - 1) {
                return company.name
            } else {
                return company.name + ', '
            }
        })}</p>
    </div>}
    <div className='fullScreen__prop'>
        <p className='fullScreen__prop-name'>Status</p>
        <p className='fullScreen__prop-desc' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>{movie?.status}</p>
    </div>
    <div className='fullScreen__prop'>
        <p className='fullScreen__prop-name'>Original Language</p>
        <p className='fullScreen__prop-desc' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>{movie?.original_language}</p>
    </div>
</div>)
}