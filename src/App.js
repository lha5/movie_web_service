import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './general.css'
import {Box, Footer, Grid, Grommet} from "grommet";

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
                <div>
                    <span>loading...</span>
                </div>
                : (
                    <Grommet>
                        <Box background="light-5">
                            <Grid
                                columns={{count: 5, size: 'auto'}}
                                responsive={true}
                                pad="medium"
                            >
                                {movie_data}
                            </Grid>
                        </Box>
                    </Grommet>
                )
            }</Box>
    }
}

export default App;
