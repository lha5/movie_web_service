import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './general.css'
import {Box, Grid} from "grommet";

class App extends React.Component {
    state = {
        isLoading: true,
        movieList: [],
    };

    getMovies = async () => {
        const key = '0f964f1c444c706954dd15c2853e5d97';
        const {
          data: {
              results:movieList
          }
        } = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key='+key+'&language=ko&page=1&region=KR');
        console.log(movieList);
        this.setState({movieList, isLoading: false});
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const {isLoading, movieList} = this.state;
        const movie_data = movieList.map((movie, index) => {
            return (
                <Movie
                    key={index}
                    id={movie.id}
                    title={movie.title}
                    overview={movie.overview}
                    poster_path={movie.poster_path}
                    release_date={movie.release_date}
                />
            )
        });

        return <Box>
            {
                isLoading ?
                <div class="loader">
                    <span class="loader_text">loading...</span>
                </div>
                : (
                    <Grid
                        rows={['xsmall', 'auto']}
                        columns={['small', 'auto']}
                        areas={[
                            {name: 'header', start: [0, 0], end: [1, 0]},
                            {name: 'nav', start: [0, 1], end: [0, 1]},
                            {name: 'main', start: [1, 1], end: [1, 1]},
                        ]}
                    >
                        <Box gridArea="header" background="brand"></Box>
                        <Box gridArea="nav" background="light-2"></Box>
                        <Box gridArea="main" background="dark-3" pad="medium">
                            {movie_data}
                        </Box>
                    </Grid>
                )
            }</Box>
    }
}

export default App;
