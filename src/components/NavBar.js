import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'



const StyledNavBar = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .0);
    font-family: 'Cairo';
    text-transform : uppercase;
    font-size: 4rem;
    padding: 0 2em 1em;
    margin: 0;


`
const StyledList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: .5em 0 .5em;
`
const StyledListItem = styled.li`
    padding: 0 2.85rem 0;

    :hover{
        opacity: .6;
    }

    :active{
        opacity: .2;
    }
`
const StyledListItemOrder = styled.li`
    display: flex;
    flex-direction: column;
    padding: 0 2.85rem 0;
    font-size: 5.2rem;
    position: relative;
    bottom: 2rem;

    :hover{
        opacity: .6;
    }

    :active{
        opacity: .2;
    }
    
    span{
        display: block;
        font-size: 5.2rem;
        opacity: 1;
    }
    span:nth-of-type(2){
        font-size: 2.8rem;
        opacity: .7;
       
        position: absolute;
        top: 50%;
        left: 50%;
  
        transform: translate(-50%, 50%);
    }
    span:nth-of-type(2)::before{
        content: '';
        background-color: rgba(255, 255, 255, .5);
        display: block;
        height: 1px;
        width: 70rem;
        position: absolute;
        right: 120%;
        top: 2.6rem;   

    }
    span:nth-of-type(2)::after{
        content: '';
        background-color: rgba(255, 255, 255, .5);
        display: block;
        height: 1px;
        width: 70rem;
        position: absolute;
        left: 120%;
        top: 2.6rem;
    }
    
`

const StyledLink = styled(Link)`
    font-family: 'Cairo';
    background: none;
    font-size: 4rem;
    opacity: .85;
    border: none;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
   
`
const StyledLinkOut = styled.a`
    font-family: 'Cairo';
    background: none;
    font-size: 4rem;
    opacity: .85;
    border: none;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
   
`

const StyledLinkButton = styled.button`
    font-family: 'Cairo';
    background: none;
    font-size: 4rem;
    opacity: .85;
    border: none;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    margin: 0;
    padding: 0;

    :hover{
        cursor: pointer;
    }
`
//<StyledLink to={'/#onas'}>O nas</StyledLink>
const NavBar = () => (
    <>
        <StyledNavBar>
            <StyledList>
                <StyledListItem>
                    <StyledLinkButton onClick={() => scrollTo('#about-us')}>O nas</StyledLinkButton>
                </StyledListItem>
                <StyledListItem>
                    <StyledLinkButton onClick={() => scrollTo('#news')}>Aktualności</StyledLinkButton>
                </StyledListItem>
                <StyledListItem>
                    <StyledLinkOut href='http://larybar.pl/wp-content/uploads/2016/07/LaryBar_przykladowe_menu.pdf'>Menu</StyledLinkOut>
                </StyledListItem>
                <StyledListItemOrder>
                    <StyledLink to={'/zamow/'}><span>Zamów</span><span>teraz</span></StyledLink>
                </StyledListItemOrder>
                <StyledListItem>
                    <StyledLinkButton onClick={() => scrollTo('#location')}>Kontakt</StyledLinkButton>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to={'/kariera/'}>Kariera</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLinkButton onClick={() => scrollTo('#gallery')}>Galeria</StyledLinkButton>
                </StyledListItem>
                
            </StyledList>
        </StyledNavBar>
    </>
)

export default NavBar;