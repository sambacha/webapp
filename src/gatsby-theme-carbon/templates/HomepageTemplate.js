/**
 *   SPDX-License-Identifier: Apache-2.0
 *   SPDXVersion: SPDX-2.2
 *   SPDX-FileCopyrightText: Copyright 2020 FreightTrust and Clearing Corporation
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';

import Layout from 'gatsby-theme-carbon/src/components/Layout';
import Main from 'gatsby-theme-carbon/src/components/Main';

import BackToTopBtn from 'gatsby-theme-carbon/src/components/BackToTopBtn';
import Carbon from '../../images/carbon.jpg';

import { mainContent } from './Homepage.module.scss';

const Homepage = ({ pageContext, children, _frontmatter }) => {
    const { titleType } = pageContext;
    const { title, description, keywords } = _frontmatter;
    return (
        <Layout
            pageTitle={title}
            pageDescription={description}
            pageKeywords={keywords}
            titleType={titleType}
            homepage
            theme="dark"
            href="https://freight.page.link/request-information"
        >
            <Main className={mainContent}>{children}</Main>

            <BackToTopBtn />
        </Layout>
    );
};
Homepage.defaultProps = {
    Banner: (
        <HomepageBanner
            renderText={() => (
                <h1>
                    Freight Trust
                    <br />
                    Distributed Systems
                </h1>
            )}
            image={Carbon}
        />
    ),
    FirstCallout: <HomepageCallout />,
    SecondCallout: (
        <HomepageCallout color="inverse01" backgroundColor="#061f80" />
    ),
};

export default Homepage;
