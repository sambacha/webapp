/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';

import { ArrowRight32 } from '@carbon/icons-react';
import { Button } from 'carbon-components-react';
import { Helmet } from 'react-helmet';
import Layout from 'gatsby-theme-carbon/src/components/Layout';
import { navigate } from 'gatsby';
import pictogram from '../images/pictogram.png';
import style from './landing.module.scss';
import { useAuth } from '../../util/hooks/use-auth.js';

const Landing = () => {
  const { login, token } = useAuth();

  useEffect(() => {
    if (token) {
      navigate('/landing', {
        replace: true,
      });
    }
  }, [token]);

  return (
    <Layout homepage>
      <Helmet title='Freight Trust Services' />
      <div className='bx--grid bx--grid--full-width'>
        <div className='bx--row'>
          <div className='bx--col-lg-8 bx--col-md-7'>
            <h1 className={style.heading}>
              AS2 and EDI Services complete overivew{' '}
              <a href='https://www.freighttrust.com/services/edi/overview'>
                EDI
              </a>
              ,{' '}
              <a href='https://www.freighttrust.com/services/as2/overview'>
                AS2
              </a>
              , and{' '}
              <a href='https://www.freighttrust.com/services/customs/overview'>
                Customs
              </a>{' '}
              tutorials. Log in with GitHub to view and apply.
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
              Log in with GitHub
            </Button>
          </div>
        </div>
        <div className='bx--row'>
          <div className='bx--col'>
            <p className={style.copy}>
              Don't have a GitHub account?{' '}
              <a href='https://github.com/join'>Join GitHub</a>
            </p>
          </div>
        </div>
        <div className='bx--row'>
          <div className='bx--offset-lg-10 bx--col-lg-2 bx--offset-md-6 bx--col-md-2 bx--offset-sm-3 bx--col-sm-1'>
            <img
              className={style.pictogram}
              src={pictogram}
              alt='Carbon pictogram'
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
