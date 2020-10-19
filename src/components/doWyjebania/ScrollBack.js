import * as React from "react";
import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";
import styled, {keyframes} from 'styled-components';

import Arrow from './Arrow';

import LogoReusable from '../Logo/LogoReusable'

const fadeIn = keyframes`
  from{
    opacity: 0;
  }

  to{
    opacity: 1;
  }
`
const StyledWrapper = styled.div`
    height: 15rem;
    width: 15rem;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 1;

    animation: ${fadeIn} 1s linear;
`

const ScrollDown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  //const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  //const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
    
  useEffect(() => {scrollYProgress.onChange(v => setIsVisible(v >= .2))}, [scrollYProgress]);

  return (
    isVisible ? <StyledWrapper> <LogoReusable type='white'/> </StyledWrapper> : null
  );
};

export default ScrollDown;