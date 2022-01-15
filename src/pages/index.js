import React, { useState } from 'react';
import styled from 'styled-components';
import Grid from '../components/grid';
const IndexComponent = styled.div`
    // background : black;
`;

const index = () => {
    return(
        <IndexComponent>
            <Grid/>
        </IndexComponent>
    )
};

export default index;