/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
/*
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import {
    ArticleContainer,
    CustomArticleCard,
    BrandsList,
    SnapContent,
    SnapCard,
    SignUpContainer,
    BannerContainer,
    RequestDemoContent,
    TextImage,
} from 'gatsby-theme-carbon/src/templates/HomepageComponents';
TODO: FOR NOW WE KEEP THIS VERY BASIC LANDING PAGE
*/
import { Button } from "carbon-components-react";

import { ArrowRight32 } from "@carbon/icons-react";

import { Helmet } from "react-helmet";
import Layout from "gatsby-theme-carbon/src/components/Layout";
import { navigate } from "gatsby";
import pictogram from "../images/carbon-pictogram-gradient.png";
import style from "./landing.module.scss";
import { useAuth } from "../util/hooks/use-auth.js";

const Landing = () => {
  const { login, token } = useAuth();

  useEffect(() => {
    if (token) {
      navigate(`/dashboard`, {
        replace: true,
      });
    }
  }, [token]);

  return (
    <Layout homepage>
      <Helmet title='Login Landing Page' />
      <div className='bx--grid bx--grid--full-width'>
        <div className='bx--row'>
          <div className='bx--col-lg-8 bx--col-md-7'>
            <h1 className={style.heading}>
              Login{` `}
              <a href='#'>AS2 Network</a>,{` `}
              <a href='#'>EDI Service</a>
              {` `}
            </h1>
          </div>
        </div>
        <div className='bx--row'>
          <div className='bx--col-lg-3'>
            <Button
              className={style.button}
              kind='primary'
              onClick={() => login()}
              renderIcon={ArrowRight32}
              type='button'
            >
              Log in with OAuth2
            </Button>
          </div>
        </div>
        <div className='bx--row'>
          <div className='bx--col'>
            <p className={style.copy}>
              Don't have a OAuth2 account? You can use <a href='https://github.com/join'> GitHub</a>
            </p>
          </div>
        </div>
        <div className='bx--row'>
          <div className='bx--offset-lg-10 bx--col-lg-2 bx--offset-md-6 bx--col-md-2 bx--offset-sm-3 bx--col-sm-1'>
            <img className={style.pictogram} src={pictogram} alt='pictogram' />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
