import React, { useEffect, useState } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import i18next from 'i18next';

import allTheActions from '../actions';

import styled from 'styled-components';

import Loading from '../components/loading/loading';

import { themeLight, themeDark, themeEvoli } from '../config/themes';

import { useTranslation } from 'react-i18next';

const Settings = props => {
  const { t, i18n } = useTranslation();

  const [loading, setLoading] = useState(true);
  const changeLanguage = langue => {
    i18next.changeLanguage(langue);
    props.actions.language.saveLanguage(langue);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(handler);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <DivChoice>
            <H1>{t('settings.background')}</H1>
            <DivSelect>
              <ButtonValidation
                onClick={() => props.actions.theme.changeTheme(themeLight)}
              >
                {t('settings.lightTheme')}
              </ButtonValidation>
              <ButtonValidation
                onClick={() => props.actions.theme.changeTheme(themeDark)}
              >
                {t('settings.darkTheme')}
              </ButtonValidation>
              <ButtonValidation
                onClick={() => props.actions.theme.changeTheme(themeEvoli)}
              >
                {t('settings.evoliTheme')}
              </ButtonValidation>
            </DivSelect>
          </DivChoice>

          <DivChoice>
            <H1>{t('settings.choicelanguage')}</H1>
            <DivSelect>
              <ButtonValidation onClick={() => changeLanguage('fr')}>
                {t('settings.french')}
              </ButtonValidation>
              <ButtonValidation onClick={() => changeLanguage('en')}>
                {t('settings.english')}
              </ButtonValidation>
            </DivSelect>
            <H1>{t('settings.actuallanguageChoice')}</H1>
          </DivChoice>
        </Container>
      )}
    </>
  );
};

const H1 = styled.h1`
  text-align: center;

  @media (max-width: 768px) {
    font-size: 4em;
  }

  @media (max-width: 425px) {
    font-size: 1.5em;
  }
`;

const DivChoice = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const DivSelect = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ButtonValidation = styled.button`
  /* text:  */
  border: none;
  padding: 10px 5px 10px 5px;
  border-radius: 75%;
  border-bottom: 3px solid white;
  
  color: white;
  background: red;

  @media (max-width: 768px) {
    font: bold 25px Arial;
  }

  @media (max-width: 425px) {
    font: bold 13px Arial;
  }

`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => props.theme.primary};
  height: ${props => props.theme.height};
  background-image: url(${props => props.theme.backgroundimage});
  background-position: ${props => props.theme.backgroundposition};
  background-repeat: ${props => props.theme.backgroundrepeat};
  background-size: ${props => props.theme.backgroundsize};
`;

const mapDispatchToProps = () => dispatch => ({
  actions: {
    theme: bindActionCreators(allTheActions.theme, dispatch),
    language: bindActionCreators(allTheActions.language, dispatch)
  }
});

export default connect(null, mapDispatchToProps)(Settings);
