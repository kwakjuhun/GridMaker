import React, {useCallback, useState} from 'react'
import styled, {css} from 'styled-components'

// const RunScreenElement = styled.div`
//     position: relative;
//     // width: 50%;
//     width: 1000px;
//     height: 500px; 
//     border: 1px solid black;
//     background-color: #FFF;
//     background-image: linear-gradient(0deg, #444 25%, transparent 25%, transparent 75%, #444 75%, #FFF), linear-gradient(90deg, #444 25%, transparent 25%, transparent 75%, #444 75%, #444);
//     background-position: 0 0, 25px 25px;
//     background-size: 50px 50px;
// `
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
    ${(props) => css`
        grid-template-rows: ${props.lines.rows.join('px ')}px;
        grid-template-columns: ${props.lines.columns.join('px ')}px;
    `}
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
const ColumnLine = styled.div`
    position: relative;
    left: ${(props) => props.location}px;
    // left: 10px;
    width: 0px;
    height: 500px;
`

const Line = styled.div`
    position: relative;
    left: 17px;
    width: 0px;
    height: 500px;
    border: 1px solid black;
`
const RowLine = styled.div`
    position: absolute;
    top: 10px;
    width: 1000px;
    height: 0px;
    border: 1px solid black;
`
const ColumnTriangle = styled.div`
    width: 0px;
    height: 0px;
    border-bottom: 36px solid #666666;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
`
const RowTriangle = styled.div`
    width: 0px;
    height: 0px;
    border-bottom: 360px solid #666666;
    border-left: 180px solid transparent;
    border-right: 180px solid transparent;
    transform: rotate( 45deg );
`


const RunScreen = () => {
    const data = {top:0, left:0};
    const [itemRed, setItemRed] = useState({...data});
    const [clickLoc, setClickLoc] = useState({...data}); 
    const [lines, setLines] = useState({
        rows:[500],
        columns:[30]
    })
    const DragEnter = useCallback((e) => {
        console.log("y", e.pageY, itemRed['top']);
        console.log("x", e.pageX, itemRed['left']);
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

    const MakeLines = useCallback(()=>{
        const rowsLine = []
        const columnsLine = []
        // lines[rows].map((line)=>{
        //     // return <line></>
        // })
        // return (
        //     <div></div>
        // )
    },[lines]);
    const MoveColumnLine = useCallback((e)=>{
        console.log(e.clientX, e.screenX)
        setLines({
            ...lines,
            
        })
    });
    const MouseDown = useCallback(e=>{
        const MoveEvent = (e)=>{
            const mouseX = e.clientX-120;
            console.log(mouseX)
            if(mouseX >= -20 && mouseX <= 980){
                setLines({
                    ...lines,
                    columns:[mouseX]
                })
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
            {/* <div class="one">One</div>
            <div class="two">Two</div>
            <div class="three">Three</div>
            <div class="four">Four</div>
            <div class="five">Five</div>
            <div class="six">Six</div> */}



            {MakeLines}
            <Run lines={lines}>
                <ColumnLine location={lines['columns'][0]}>
                    <Line
                        direction="Column"
                    ></Line>
                    <ColumnTriangle
                        onMouseDown = {MouseDown}
                    ></ColumnTriangle>
                </ColumnLine>
                    <RowLine></RowLine>
            </Run>
        </RunScreenElement>
    )

}

export default RunScreen