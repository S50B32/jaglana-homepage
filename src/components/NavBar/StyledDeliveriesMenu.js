<<<<<<< HEAD
import styled from "styled-components"

const StyledDeliveriesMenu = styled.div`
  padding: 0 10% 10%;
  z-index: 8;
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 2rem;
  position: absolute;
  left: -20%;
  top: 0%;
  height: 160;
  width: 120%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export default StyledDeliveriesMenu
=======
import styled, { keyframes } from 'styled-components';


const slideIn = keyframes`
    from{
        transform: translateY(-200px);
    }
    
    to {
        transform: translateY(0px);
    }
`
const slideOut = keyframes`
     from{
        transform: translateY(200px);
    }
    
    to {
        transform: translateY(0px);
    }
`

const StyledDeliveriesMenu = styled.div`

    padding: 0 10% 10%;
    z-index: 8;
    opacity: 1;
    background-color: rgba(255,255,255,.5);
    border-radius: 2rem;
    position: absolute;
    
    height: 160;
    width: 120%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const StyledDeliveriesMenuOn = styled(StyledDeliveriesMenu)`

    left: -20%;
    top: 0;
    animation: ${slideIn} .1s linear;
    /**/

`;

export const StyledDeliveriesMenuOff = styled(StyledDeliveriesMenuOn)`

    left: -20%;
    top: -200px;
    animation: ${slideOut} .1s linear;
    /**/
`;
>>>>>>> master
