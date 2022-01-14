import React from 'react'
import styled from 'styled-components'


const GridRadioElement = styled.div`
    border: 1px solid black;
    width: 100%;
`

const GridRadio = ({setOption}) => {
    const radioClicked = (e) => {
        setOption(e.target.name, e.target.value)
    }
    return(
        <GridRadioElement>
            <div>
                <p>display</p>
                <input type="radio" id="displayNull" name="display" value="null" onClick={(e) => radioClicked(e)} defalutChecked/>
                <label htmlFor="displayNull">null</label>
                <input type="radio" id="huey" name="display" value="huey" onClick={(e) => radioClicked(e)}/>
                <label htmlFor="huey">Huey</label>
                <input type="radio" id="dewey" name="display" value="dewey" onClick={(e) => radioClicked(e)}/>
                <label htmlFor="dewey">Dewey</label>
                <input type="radio" id="louie" name="display" value="louie" onClick={(e) => radioClicked(e)}/>
                <label htmlFor="louie">Louie</label>
            </div>
        </GridRadioElement>
    )

}

export default GridRadio

