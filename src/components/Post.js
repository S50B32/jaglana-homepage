import React from 'react'
import styled from 'styled-components'

const Article = styled.article`
    box-sizing: border-box;
    
    background-color: rgba(226, 226, 226, .6);
    width: calc(100%/2 - 1rem);

    backdrop-filter: blur(15px) brightness(1.2);


    font-size: 1.5rem;

    padding: 0 1.5rem 1.5rem;
    margin: 0.5rem;

    text-align: justify;

    @media (max-width: 600px) {
        
        width: 100%;

        padding: 0 1.5rem 1.5rem;
        margin: 0.5rem;

        font-size: calc(1.5rem * 3);
    }
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    margin: 0;
`

const Title = styled.h2`
    padding: 0;
    margin: 0;
    position: relative;
    z-index: 1;
    color: rgba(255,255,255,.8);
    color: rgba(0,0,0,.6);





    /*&::after{
        display: block;
        content: '';
        height: 105%;
        width: calc(100% - 2rem);
        background-color: rgba(255,255,255,.5);
        mix-blend-mode: difference;

        top: -15%;
        left: 2rem;
        position: absolute;


        
    }*/
`

const Date = styled.time`
    color: rgba(149,143,135,1);
    color: black;
`

const Content = styled.div`
    padding: 0 2rem 1rem;  
    color: white;
    color: rgba(0,0,0,.8);
    font-weight: 600;

    @media (max-width: 600px) {
        
        padding: 1rem 5rem 4rem;
    }

`
const Picture = styled.figure`
    float: right;
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 1.5rem 4rem 1.5rem;

    img{
        opacity: .9;
        width: 100%;
        margin: auto;
    }
`


const Post = ({title, content, date, pic}) => {
    return(
        <Article>
            <Header>
                <Title>{title}</Title>
                {date ? <Date>{date}</Date> : null}
            </Header>
            { pic ? <Picture>
                            <img src={pic} alt='ilustracja'/>
                        </Picture>
                      : null }
            <Content>
                
                {content}
            </Content>
            
        </Article>
    )
}

export default Post