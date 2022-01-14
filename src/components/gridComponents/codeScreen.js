import React from 'react';
import styled from 'styled-components';

const CodeScreenElement = styled.div`
    width: 500px;
    height: auto;
    border: 1px solid black;
`


const CodeScreen = ({ContainerOptions}) => {
    return(
        <CodeScreenElement>
            {Object.keys(ContainerOptions).map((key)=>
                ContainerOptions[key] != null ?
                    <div key={key}>{key}: {ContainerOptions[key]}</div>
                :null
                )
            }
        </CodeScreenElement>
    )
}

export default CodeScreen