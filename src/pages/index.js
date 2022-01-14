import React, { useState } from 'react';
import styled from 'styled-components';
import Grid from '../components/grid';
const IndexComponent = styled.div`
    // background : black;
`;
const Temp = styled.div`
    width: 100vw;
    height: 100vh;
`;

const index = () => {
    return(
        <IndexComponent>
            {/* <Temp><h1>빈칸</h1></Temp> */}
            <Grid/>
        </IndexComponent>
    )
};

export default index;