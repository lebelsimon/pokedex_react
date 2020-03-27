import React, { useEffect, useState } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import i18next from 'i18next';

import allTheActions from '../actions';

import styled from 'styled-components';

import Loading from '../components/loading/loading';

import { themeLight, themeDark } from '../config/themes';

import { useTranslation } from 'react-i18next';

const Settings = props => {
  console.log(props);
  const { t, i18n } = useTranslation();
  console.log(t);

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
          <button onClick={() => props.actions.theme.changeTheme(themeLight)}>
            Theme Light
          </button>
          <button onClick={() => props.actions.theme.changeTheme(themeDark)}>
            Theme Dark
          </button>

          <p>{t('menu.title')}</p>
          <button onClick={() => changeLanguage('fr')}>fr</button>
          <button onClick={() => changeLanguage('en')}>en</button>
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
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
