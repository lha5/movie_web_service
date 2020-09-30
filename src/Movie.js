import React from 'react';
import PropTypes from 'prop-types';
import {Box, Image, Text} from "grommet";

function Movie({title, poster_path, release_date}) {
    return <Box
        align="center"
        background="white"
        round="small"
        responsive={true}
        pad={{horizontal: 'medium'}}
        margin={{top: 'medium', bottom: 'medium', right: 'medium', left: 'medium'}}
    >
        <Box margin="small"><Image src={"https://image.tmdb.org/t/p/w200/" + poster_path} fit="contain"/></Box>
        <Box><Text weight="bold" textAlign="center">{title}</Text></Box>
        <Box margin={{bottom: 'small'}}><Text size="small">{release_date}</Text> </Box>
    </Box>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
};

export default Movie;