import styled from 'styled-components';

const StyledContactColumn = styled.div`
    width: 37vw;
    height: 75vh;
    background-color: rgba(226, 226, 226, .6);
    font-size: 3rem;
    
    color: rgba(0,0,0,.8);

    backdrop-filter: blur(15px) brightness(1.2);
    
    @media (max-width: 600px) {
        width: 100%;
        height: 50vh;

    }

    li{
        list-style: none;
    }
    
    .contact{
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        height: 50%;
        margin: 0;
        padding: 0;

        position: relative;
    }
    .contact::after{
        display: block;
        content: '';
        height: 2px;
        background-color: rgba(0, 0, 0, .5);
        width: 80%;
        position: absolute;
        bottom: 0;
        left: 10%;
    }

    .contact__details{

        width: 50%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        
        font-size: 2.2rem;
        padding: 4rem 7rem 4rem 10%;

        box-sizing: border-box;

        @media (max-width: 600px) {
            font-size: calc(3 * 2.2rem);
        }
    }

    .contact__logo{

        width: 50%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
    }

    .openingHours{
        display: flex;
        flex-direction: row;
        height: 50%;
        width: 100%;
    }

    .openingHours__socialMedia{
        width: 40%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: left;

        position: relative;

        a{
            width: 22%;
            opacity: .6;
            position: relative;
            left: 43%;
        }
    }

    .openingHours__list {
        width: 60%;
        height: 100%;
    
        padding: 0;
        margin: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;

        position: relative;

        font-size: 1.9rem;

        @media (max-width: 600px) {
            font-size: calc(2.5 * 1.9rem);
        }
    }

    .openingHours__day{
        position: relative;
        left: 15%;

    }

    .openingHours__time{
        position: absolute;
        left: 55%;
    }  
`

export default StyledContactColumn;