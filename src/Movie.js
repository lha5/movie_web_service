import React from 'react';
import PropTypes from 'prop-types';
import {Box, Grid} from "grommet";

function Movie({id, title, overview, poster_path, release_date}) {
    return <Grid columns={{count: "fill"}}>
        <Box
            direction="column"
            border={{color: 'pink', size: 'xsmall'}}
            align="center"
            width="250px"
            margin="none"
        >
            <Box pad="none"><img src={"https://image.tmdb.org/t/p/w200/" + poster_path} alt={title}/></Box>
            <Box pad="none" background={"light-3"} fill="horizontal">{title}</Box>
            <Box pad="none" background={"light-3"} fill="horizontal">{release_date}</Box>
        </Box>
    </Grid>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
};

export default Movie;