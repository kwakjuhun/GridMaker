import React, {useCallback, useState} from 'react'
import styled, { css } from 'styled-components'
import LineElement from './lineElement'

const RunScreenElement = styled.div`
    display: flex;
    width: 1200px;
    height: 700px; 
`
const Run = styled.div`
    display: grid;
    width: 1000px;
    height: 500px; 
    gap: 10px 10px;
    border: 1px solid black;
    margin: auto;
`
const Item = styled.div`
    position: absolute;
    background:red;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    top:${(props) => props.location.top}px;
    left:${(props) => props.location.left}px;
`
const AddLineButton = styled.button`
    height: 20px;
    width: 40px;
`
const RunScreen = () => {
    const data = {top:0, left:0};
    const [itemRed, setItemRed] = useState({...data});
    const [clickLoc, setClickLoc] = useState({...data}); 
    const [columnLines, setColumnLines] = useState([300, 500]);
    const [rowLines, setRowLines] = useState([100,200]);
    const DragEnter = useCallback((e) => {
        setClickLoc({
            ...clickLoc,
            top:e.pageY - itemRed['top'],
            left:e.pageX - itemRed['left']
        })
      }, [itemRed]);
      const DragEnd = useCallback((e)=>{
        // e.stopPropagation();
        setItemRed({
            ...itemRed,
            top:parseInt((e.pageY-clickLoc['top']+50) / 100) * 100,
            left:parseInt((e.pageX-clickLoc['left']+50) / 100) * 100
        })
      })


    const MouseDown = useCallback((e,index,direction)=>{
        const MoveEvent = direction=="column"?
        (e)=>{
            const mouseX = e.clientX-10;
            if(mouseX >= 80 && mouseX <= 1080){
                columnLines[index] = mouseX
                setColumnLines([
                    ...columnLines,
                ])
            }
        }:
        (e)=>{
            const mouseY = e.clientY-10;
            if(mouseY >= 80 && mouseY <= 580){
                rowLines[index] = mouseY
                setRowLines([
                    ...rowLines,
                ])
            }

        };
        document.addEventListener("mousemove", MoveEvent);
        document.addEventListener("mouseup", e=>{
            document.removeEventListener('mousemove', MoveEvent);
        })
    })

    return(
        <RunScreenElement>
            <Item
                location = {itemRed}
                draggable="true"
                onDragEnter={DragEnter}
                onDragEnd={DragEnd}
            ></Item>
            <Run>
                {columnLines.map((loc, index) => {
                    return (
                        <LineElement
                            direction="column"
                            location={loc}
                            MouseDown={(e)=>MouseDown(e, index, "column")}
                        />    
                    )
                })}
                {rowLines.map((loc, index) => {
                    return (
                        <LineElement
                            direction="row"
                            location={loc}
                            MouseDown={(e)=>MouseDown(e, index, 'row')}
                        />
                    )
                })
                }
            </Run>
            <AddLineButton>행 추가</AddLineButton>
            <AddLineButton>열 추가</AddLineButton>
        </RunScreenElement>
    )

}

export default RunScreen