import React from 'react'
import coco from '../../linkedin-icon.png'
import styled from 'styled-components'

const ImageLogo = () => {
  return <Logo src={coco}/>
};

const Logo = styled.img`
  width: 90%;
  height: 50%;
`;

export default ImageLogo
