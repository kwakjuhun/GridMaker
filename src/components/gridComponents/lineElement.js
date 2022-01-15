import React from 'react';
import styled from 'styled-components';

const ColumnLineElement = styled.div`
    position: absolute;
    left: 0px;
    transform: translateX(${(props) => props.location}px);
    width: 0px;
    height: 500px;
`

const ColumnLine = styled.div`
    position: relative;
    left: 17px;
    width: 0px;
    height: 500px;
    border: 1px solid black;
`
const ColumnTriangle = styled.div`
    width: 0px;
    height: 0px;
    border-bottom: 36px solid #666666;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
`

const RowLineElement = styled.div`
    position: absolute;
    top: 0px;
    transform: translateY(${(props) => props.location}px);
    width: 1100px;
    height: 0px;
`
const RowLine = styled.div`
    position: absolute;
    top: 18px;
    width: 1000px;
    height: 0px;
    border: 1px solid black;
`
const RowTriangle = styled.div`
    position: absolute;
    left: 1000px;
    width: 0px;
    border-right: 36px solid #666666;
    border-bottom: 18px solid transparent;
    border-top: 18px solid transparent;
`

const LineElement = ({direction, location, index, MouseDown}) => {
    return (
        <>
            {direction === "column"?(
                <ColumnLineElement location={location}>
                    <ColumnLine/>
                    <ColumnTriangle
                        onMouseDown = {MouseDown}
                    ></ColumnTriangle>
                </ColumnLineElement>
            ):(
                <RowLineElement location={location}>
                    <RowLine/>
                    <RowTriangle
                        onMouseDown = {MouseDown}
                    ></RowTriangle>
                </RowLineElement>
            )}
        </>
    )
}

export default LineElement;