import React, {useCallback, useEffect, useState} from 'react'
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
    opacity: ${(props) => props.info.onMouse ? 0.5:1};
    ${(props) => props.info.inBox && css`
        transform: translateX(${(props) => props.info.left}px)
            translateY(${(props) => props.info.top}px);
            // scaleX(${(props) => (props.info.right-props.info.left)/100})
            // scaleY(${(props) => (props.info.bottom-props.info.top)/100});
    `}
`
const AddLineButton = styled.button`
    height: 20px;
    width: 40px;
`
const RunScreen = () => {
    const data = { loc:[-1,-1], top:300, left:0, bottom:0, right:0, onMouse:false, inBox:false};
    const [itemRed, setItemRed] = useState({...data});
    const [columnLines, setColumnLines] = useState([300, 500]);
    const [rowLines, setRowLines] = useState([100,200]);
    useEffect(()=>{
        const [y, x] = itemRed['loc'];
        if(y != -1 && x != -1){
            if(y == 0)
                itemRed['top'] = 100;
            else
                itemRed['top'] = rowLines[y-1]+ 20;
            if(x == 0)
                itemRed['left'] = 60;
            else
                itemRed['left'] = columnLines[x-1] + 20;

            setItemRed({
                ...itemRed,
            })
            // console.log(itemRed)
        }
    },[columnLines, rowLines])

    const ItemMouseDown = useCallback((e) => {
        const MoveEvent = e => {
            itemRed['onMouse'] = true;
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            console.log(mouseX,mouseY)
            if(mouseX >= 80 && mouseX <= 1080 && mouseY >= 80 && mouseY <= 580){
                itemRed['inBox'] = true;
                let left = 40
                let right = 40
                let top = 80
                let bottom = 80
                let y = -1
                let x = -1
                column: {
                    for (var i of columnLines){
                        left = right
                        right = i
                        x += 1
                        if(mouseX >= left && mouseX <= right){
                            break column;
                        }
                    }
                    left = right
                    right = 1080
                    x += 1
                }
                row: {
                    for (var i of rowLines){
                        top = bottom
                        bottom = i
                        y += 1
                        if(mouseY >= top && mouseY <= bottom){
                            break row;
                        }
                    }
                    top = bottom
                    bottom = 580
                    y+= 1
                }
                itemRed['left'] = left+20;
                itemRed['top'] = top+20;
                itemRed['bottom'] = bottom;
                itemRed['right'] = right;
                itemRed['loc'] = [y, x];
            }else{ 
                itemRed['loc'] = [-1, -1];
                itemRed['inBox'] = false;
                itemRed['left'] = 0;
                itemRed['top'] = 0;
            }
            setItemRed({
                ...itemRed
            })

            
        };
        document.addEventListener("mousemove", MoveEvent);
        document.addEventListener("mouseup", e => {
            itemRed['onMouse'] = false
            setItemRed({
                ...itemRed
            })
            document.removeEventListener('mousemove', MoveEvent);
        },{once:true})
    });

    const LineMouseDown = useCallback((e,index,direction)=>{
        const MoveEvent = direction=="column"?
        (e)=>{
            const mouseX = e.clientX-10;
            if(mouseX >= 80 && mouseX <= 1080){
                columnLines[index] = mouseX;
                columnLines.sort();  // 이거때매 밀리는거 같은데 개선해야할듯
                setColumnLines([
                    ...columnLines,
                ])
            }
        }:
        (e)=>{
            const mouseY = e.clientY-10;
            if(mouseY >= 80 && mouseY <= 580){
                rowLines[index] = mouseY;
                rowLines.sort();
                setRowLines([
                    ...rowLines,
                ])
            }

        };
        document.addEventListener("mousemove", MoveEvent);
        document.addEventListener("mouseup", (e) => {
            document.removeEventListener('mousemove', MoveEvent);
        }, { once:true })
    })
    console.log(itemRed)
    return(
        <RunScreenElement>
            <Item
                info = {console.log(itemRed) || itemRed}
                onMouseDown = {(e) => ItemMouseDown(e,0)}
            ></Item>
            <Run>
                {columnLines.map((loc, index) => {
                    return (
                        <LineElement
                            direction="column"
                            location={loc}
                            MouseDown={(e)=>LineMouseDown(e, index, "column")}
                        />    
                    )
                })}
                {rowLines.map((loc, index) => {
                    return (
                        <LineElement
                            direction="row"
                            location={loc}
                            MouseDown={(e)=>LineMouseDown(e, index, 'row')}
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