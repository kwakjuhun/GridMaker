import React, { useState } from 'react';
import styled from 'styled-components';
import CodeScreen from './gridComponents/codeScreen';
import GridRadio from './gridComponents/gridRadio';
import RunScreen from './gridComponents/runScreen';

const gridContainerProperties = {
    "display": null,
    "grid-template-rows": null,
    "grid-template-columns": null,
    "grid-template-areas": null,
    "grid-template": null,
    "row-gap": null,
    "column-gap": null,
    "gap": null,
    "grid-auto-rows": null,
    "grid-auto-columns": null,
    "grid-auto-flow": null,
    "grid":	null,
    "align-content": null,
    "justify-content": null,
    "place-content": null,
    "align-items": null,
    "justify-items": null,
    "place-items": null,
}

const gridItemsProperties = {
    "grid-row-start": null,
    "grid-row-end":	null,
    "grid-row":	null,
    "grid-column-start": null,
    "grid-column-end": null,
    "grid-column": null,
    "grid-area": null,
    "align-self": null,
    "justify-self": null,
    "place-self": null,
    "order": null,
    "z-index": null,
}

const GridTestElement = styled.div`
    display: flex;
    flex-direction: column;
    width: 2000px;
`

const ViewElement = styled.div`
    display: flex;
`

const Grid = () => {
    const [ContainerOptions, setContainerOptions] = useState(gridContainerProperties);
    const selectContainerOptions = (option, selected) => {
        selected == "null" ? selected = null:null
        setContainerOptions({
            ...ContainerOptions,
            [option]:selected,
        })
    }
    const changeCode = () => {

    }
    return(
        <GridTestElement>
            <ViewElement>
                <RunScreen ContainerOptions={ContainerOptions}></RunScreen>
                <CodeScreen ContainerOptions={ContainerOptions}></CodeScreen>
            </ViewElement>
            <GridRadio ContainerOptions={ContainerOptions} setOption={selectContainerOptions}></GridRadio>
        </GridTestElement>
    )
}

export default Grid