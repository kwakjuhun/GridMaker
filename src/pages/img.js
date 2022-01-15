import React, { useState, useEffect } from 'react';
import Styled, { css } from 'styled-components';
import Image from '../img/IMG.jpg';
import ImageAnalysis from '../scripts/image'
const IndexComponent = Styled.div`
 
`;
const TestComponent  = Styled.img`
    position: fixed;
    width: 100%;
    object-fit: cover;
    opacity: ${(props) => props.location};
`


const Text1 = Styled.p`
    position: fixed;
    font-size: xx-large;
    font-weight: bold;
    opacity 0;
    left: 100px;
    top 30px;
    transition-property: all;
    transition-duration: 1s;
    ${(props) => props.location == 20 ? css`
        transform: translate(0, 50px);
        opacity 1;
    `:null}
    ${(props) => props.location >= 21 ? css`
        transform: translate(0, 100px);
        opacity 0;
    `:null}
`

const Text2 = Styled.div`
`

const index = () => {
    const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
    const handleFollow = () => {
        const y = parseInt(window.pageYOffset / 100);
        if(y != ScrollY)
            setScrollY(y); // window 스크롤 값을 ScrollY에 저장
    }
    useEffect(() => {
        console.log(ScrollY)
    }, [ScrollY])
    

    useEffect(() => {
      const watch = () => {
        window.addEventListener('scroll', handleFollow);
      }
      watch(); // addEventListener 함수를 실행
      return () => {
        window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
      }
    })



    console.log(ImageAnalysis(TestComponent))


    return(
        <IndexComponent>
            <TestComponent src={Image} location={ScrollY >= 10 ? ScrollY/10-1:0}></TestComponent>
            <Text1 location={ScrollY}>Test</Text1>
        </IndexComponent>
    )
};

export default index;