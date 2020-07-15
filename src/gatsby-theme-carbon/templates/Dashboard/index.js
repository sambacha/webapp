import React from 'react'
import Layout from 'gatsby-theme-carbon/src/components/Layout'
import Main from 'gatsby-theme-carbon/src/components/Main'
import { mainContent } from '../Default.module.scss'

const DashboardTemplate = ({ pageContext, children, customNavItems }) => {
  const { frontmatter = {}, titleType } = pageContext
  const { tabs, title, theme, description, keywords } = frontmatter

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
  )
}

export default DashboardTemplate
