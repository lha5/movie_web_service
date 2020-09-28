import React from 'react';
import PropTypes from 'prop-types';

function Movie({movieCd, movieNm, movieNmEn, openDt, nationAlt, genreAlt}) {
    return <h1>{movieNm}</h1>
}

Movie.propTypes = {
    movieCd: PropTypes.number.isRequired,
    movieNm: PropTypes.string.isRequired,
    movieNmEn: PropTypes.string.isRequired,
    openDt: PropTypes.string.isRequired,
    nationAlt: PropTypes.string,
    genreAlt: PropTypes.string.isRequired,
};

export default Movie;