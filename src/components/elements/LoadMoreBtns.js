import React from 'react';
import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn';


const LoadMoreBtns = ({ text, callback }) => (
    <StyledLoadMoreBtn type="button" onClick={callback}>
        {text}
    </StyledLoadMoreBtn>
)

export default LoadMoreBtns;