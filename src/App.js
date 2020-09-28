import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
    state = {
        isLoading: true,
        movieList: [],
    };

    // yyyymmdd 포맷
    getFormatDate = (date) => {
        let year = date.getFullYear();
        let month = (1 + date.getMonth());
        month = month >= 10 ? month : '0' + month;
        let day = date.getDate();
        day = day >= 10 ? day : '0' + day;
        return year + month + day;
    }

    getMovies = async () => {
        const key = 'fd3ee98997f6340648c4df3bc4e3c17d';
        //const dateToday = this.getFormatDate(new Date());
        const {
          data: {
              movieListResult: {
                  movieList
              }
          }
        } = await axios.get('http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key='+key);
        this.setState({movieList, isLoading: false});
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const {isLoading, movieList} = this.state;
        return <div>{isLoading ? "Loading" : movieList.map((movie, index) => {
            return (
                <Movie
                    key={index}
                    movieCd={Number.parseInt(movie.movieCd)}
                    movieNm={movie.movieNm}
                    movieNmEn={movie.movieNmEn}
                    openDt={movie.openDt}
                    nationAlt={movie.nationAlt}
                    genreAlt={movie.genreAlt}
                />);
        })}</div>
    }
}

export default App;
