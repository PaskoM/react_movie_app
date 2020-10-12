import React from 'react';
import PropTypes from 'prop-types'
import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn';


const LoadMoreBtns = ({ text, callback }) => (
    <StyledLoadMoreBtn type="button" onClick={callback}>
        {text}
    </StyledLoadMoreBtn>
)

LoadMoreBtns.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func,
}

export default LoadMoreBtns;