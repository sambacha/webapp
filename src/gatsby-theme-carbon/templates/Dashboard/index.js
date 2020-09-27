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
import React from "react";
import Layout from "gatsby-theme-carbon/src/components/Layout";
import Main from "gatsby-theme-carbon/src/components/Main";
import { mainContent } from "../Default.module.scss";

const DashboardTemplate = ({ pageContext, children, customNavItems }) => {
  const { frontmatter = {}, titleType } = pageContext;
  const { tabs, title, theme, description, keywords } = frontmatter;

  return (
    <Layout
      tabs={tabs}
      homepage={false}
      theme={theme}
      pageTitle={title}
      pageDescription={description}
      pageKeywords={keywords}
      titleType={titleType}
      customNavItems={customNavItems}
      noResourceLinks
    >
      <Main className={mainContent}>{children}</Main>
    </Layout>
  );
};

export default DashboardTemplate;
