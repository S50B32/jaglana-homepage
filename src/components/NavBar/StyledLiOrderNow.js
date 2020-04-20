import styled from 'styled-components';

const StyledLiOrderNow = styled.li`
    display: flex;
    flex-direction: column;
    padding: 0 2.85rem 0;
    font-size: 5.2rem;
    position: relative;
    bottom: 2rem;

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
            transform: translate(-50%,50%);
        }
        span:nth-of-type(2)::before, span:nth-of-type(2)::after {
            content: '';
            display: block;
            height: 1px;
            width: 70rem;
            position: absolute;
            background-color: rgba(255,255,255,.5);

        }
            span:nth-of-type(2)::before{        
                right: 120%;
                top: 2.6rem;   
            }
            span:nth-of-type(2)::after{
                left: 120%;
                top: 2.6rem;
            }
`

export default StyledLiOrderNow;