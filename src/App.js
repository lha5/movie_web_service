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
        const key = '0f964f1c444c706954dd15c2853e5d97';
        const {
          data: {
              results:movieList
          }
        } = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key='+key+'&language=ko&page=1&region=KR');
        console.log(movieList);
        this.setState({movieList, isLoading: false});
        // console.log(await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key='+key+'&language=ko&page=1&region=KR'));
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
                    id={movie.id}
                    title={movie.title}
                    overview={movie.overview}
                    poster_path={movie.poster_path}
                    release_date={movie.release_date}
                />);
        })}</div>
    }
}

export default App;
