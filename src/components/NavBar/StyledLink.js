import styled from 'styled-components';
import {Link} from 'gatsby';

const StyledLink = styled(Link)`
    font-family: 'Cairo';
    background: none;
    font-size: 4rem;
    border: none;
    text-decoration: none;
    color: white;
    text-transform: lowercase;

    opacity: ${({dimmed}) => dimmed ? .2 : .85};

    transition-duration: .3s;
    transition-timing-function: ease-in-out;
    
    :hover{
        opacity: .3;
    }

    :active{
        opacity: .2;
    }
`;

export default StyledLink;
