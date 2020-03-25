import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import failCapture from '../../images/fail_capture.gif';
import goCapture from '../../images/go_capture.gif';
import pokemoNcaptured from '../..//images/pokemon_captured.gif'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion';


import { useTranslation } from 'react-i18next';


const LanguageSettings = () => {

  const { t, i18n } = useTranslation();
  const history = useHistory()
  const [rotate, setrotate] = useState(true);
  const [capturing, setcapturing] = useState(false);
  const [success, setsuccess] = useState(false);

  const finishCapture = async event => {
    history.push('/listPokemon')
  }

  const handleCapturing = () => {
    setcapturing(true);
    const tryCapture = Math.round(Math.random() * 100);
    if (tryCapture > 40) {
      setsuccess(true);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setrotate(rotate ? false : true);
    }, 500);
    return _ => clearTimeout(timeout);
  }, [rotate, capturing]);

  return (
    <DivDetail>
        <p>{t('menu')}</p>
      <button>fr</button>
      <button>en</button>
    </DivDetail>
  );
};

const H1Capture = styled.h1`
text-align: center;
`
const H2Capture = styled.h2`
text-align: center;
`

const ButtonValidation = styled.button`
/* text:  */
border:none;
	padding:10px 5px 10px 5px;
	border-radius:75%;
	border-bottom:3px solid white;
	font:bold 13px Arial;
	color: white;
	background: red;`

const DivGoCapture = styled.div``

const ParagrapheType = styled.p`
margin-left: 5px;
`

const Name = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const Type = styled.div`
width: 50%;
  display: flex;
  align-items: center;
  /* width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between; */
`;

const Weight = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const Height = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const DivCaracteristics = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-around; */
`;

const ImagePokeball = styled(motion.img)`
  width: 100%;
`;

const ImagePokemon = styled(motion.img)`
  width: 300%;
`;

const DivTest = styled.div`
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
`;

const DivDetail = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
`;

export default LanguageSettings;
