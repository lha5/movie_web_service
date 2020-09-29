import React from 'react';
import PropTypes from 'prop-types';

function Movie({id, title, overview, poster_path}) {
    return <h1>{title}</h1>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
};

export default Movie;