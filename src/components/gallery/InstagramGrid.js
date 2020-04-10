import React from "react";
import styled from 'styled-components';
import gridDetails from '../../data/instaGridDetails';

import InstagramBlock from "./InstagramBlock";

const StyledWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(25, 3.8vh);
    grid-template-columns: repeat(27, 3.8vh);

    position: absolute;
    padding: 1rem;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

`

const InstagramGrid = () => {
    return (
    <StyledWrapper>
        {gridDetails.map(block => <InstagramBlock key={block.img} details={block} />)}
    </StyledWrapper>
    );
};

export default InstagramGrid;