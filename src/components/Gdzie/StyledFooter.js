import styled from 'styled-components';


export const StyledWrapper = styled.footer`
    height: 21vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    
    position: relative;
    bottom: 0;
    left: 0;
    color: rgba(255, 255, 255, .5);
    font-size: 1.2rem;

    z-index: 2;

    @media (max-width: 600px) {
            display: none;
        }
`
export const FooterData = styled.div`
    height: 87%;
    width: 100%;
    background-color: rgba(239, 167, 57, 1);


    display: flex;
    justify-content: left;
    align-items: center;

    position: relative;

    .footerSection{
        display: flex;
        box-sizing: border-box;

        position: relative;
        height: 100%;
        width: 10%;

        padding: 1.5rem 0 0;
        margin: 0;

        justify-content: center;

        ul{
            padding: 0;
            margin: 0;
            list-style: none;
        }
        h4{
            padding: 0;
            margin: 0;
        }
    }

    .footerSection__logo{
        padding: 0;
        align-items: center;
        margin-left: 10.5%;

    }
    .footerSection__contact{
        width: 7%;

    }
    .footerSection__about{
        width: 7%;

    }
    .footerSection__info{
        width: 7%;

    }
    .footerSection__media{
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: center;
        
        margin-left: 22.5%;

        span{
            
            display: flex;
            flex-direction: column;
            justify-content: left;
            align-items: center;

            a{
                width: 15%;
                opacity: .6;
                margin: .8rem;
            }
    
        }
        
    }
    .footerSection__deliveries{
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: center;

        

        span{
            
            display: flex;
            flex-direction: column;
            justify-content: left;
            align-items: center;

            a{
                width: 50%;
                opacity: .6;
                margin: .7rem;
            
        }
    }

    Link{
        font-family: 'Cairo';
        background: none;
        font-size: 4rem;
        opacity: .85;
        border: none;
        text-decoration: none;
        color: white;
        text-transform: lowercase;
        margin: 0;
        padding: 0;

        :hover{
            cursor: pointer;
        }
    }
    }
`

export const CreditsBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1rem;
    height: 13%;
    width: 100%;
    background-color: rgba(0, 0, 0, .7);
`