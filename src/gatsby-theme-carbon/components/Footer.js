import React from 'react'
import {
  footerContent,
  footerContentDefault,
  footerRow,
  footerLinkCol,
  footerButtonCol,
  footerLastRow,
  footerDiectoryRow,
  footerFollowSection,
  footerLinkColMobile,
  hideOnMobile,
} from './Footer.module.scss'
import { Button } from 'carbon-components-react'
import { Row, Column } from 'gatsby-theme-carbon'
import { useAuth } from 'react-use-auth'
import cx from 'classnames'

const ProductFooter = (
  <div>
    <h5>Quick Links</h5>
<<<<<<< HEAD
    <a href="https://freight.page.link/demo">Partners</a>
    <a href="https://freight.page.link/demo">Integrations</a>
    <a href="https://freight.page.link/demo">Service Bus</a>
    <a href="https://freight.page.link/demo">API</a>
    <a href="https://freight.page.link/demo">ABI</a>
    <a href="https://freight.page.link/demo">Rulebook</a>
    <a href="https://freight.page.link/demo">Omnibus</a>
    <a href="https://freight.page.link/demo">Legal Parity</a>
=======
    <a href="https://drewry.co.uk">Partners</a>
    <a href="https://freight.page.link/request-information">Integrations</a>
    <a href="https://ft-docs.netlify.app">API</a>
    <a href="https://ft-docs.netlify.app">ABI</a>
    <a href="https://ft-docs.netlify.appn">Rulebook</a>
    <a href="https://ft-docs.netlify.app">Omnibus</a>
    <a href="https://freight.page.link/request-information">Legal Parity</a>
>>>>>>> 309506aaaf21913b5869a6a43aeabf68161f810f
  </div>
)

const CoporateFooter = (
  <div>
    <h5>Corporate</h5>
<<<<<<< HEAD
    <a href="https://freight.page.link/demo">About Us</a>
    <a href="https://freight.page.link/demo">Press</a>
    <a href="https://freight.page.link/demo">Customers</a>
    <a href="https://freight.page.link/demo">Branding</a>
    <a href="https://freight.page.link/demo">Whitepapers</a>
    <a href="https://freight.page.link/demo">System Status</a>
    <a href="https://freight.page.link/demo">Compliance</a>
=======
    <a href="https://ft-docs.netlify.app">About Us</a>
    <a href="https://freight.page.link/request-information">Press</a>
    <a href="https://github.com/freight-trust/branding">Branding</a>
    <a href="https://freight.page.link/request-information">Whitepapers</a>
    <a href="https://freight.page.link/request-information">System Status</a>
    <a href="https://freight.page.link/request-information">Compliance</a>
>>>>>>> 309506aaaf21913b5869a6a43aeabf68161f810f
  </div>
)

const SolutionsFooter = (
  <div>
    <h5>Solutions</h5>
<<<<<<< HEAD
    <a href="https://freight.page.link/demo">Trucking</a>
    <a href="https://freight.page.link/demo">Maritime</a>
    <a href="https://freight.page.link/demo">Intermodal</a>
    <a href="https://freight.page.link/demo">Finance</a>
=======
    <a href="https://freight.page.link/request-information">Trucking</a>
    <a href="https://freight.page.link/request-information">Maritime</a>
    <a href="https://freight.page.link/request-information">Intermodal</a>
    <a href="https://freight.page.link/request-information">Finance</a>
>>>>>>> 309506aaaf21913b5869a6a43aeabf68161f810f
  </div>
)

const ResourcesFooter = (
  <div>
    <h5>Resources</h5>
<<<<<<< HEAD
    <a href="https://freight.page.link/demo">Documentation</a>
    <a href="https://freight.page.link/demo">Open Source</a>
    <a href="https://freight.page.link/demo">Developers</a>
    <a href="https://freight.page.link/demo">Engineering</a>
    <a href="https://freight.page.link/demo">Security</a>
=======
    <a href="https://ft-docs.netlify.app">Documentation</a>
    <a href="https://github.com/freight-trust">Open Source</a>
    <a href="https://github.com/freight-trust">Developers</a>
    <a href="https://github.com/freight-trust">Engineering</a>
    <a href="https://github.com/freight-trust/security">Security</a>
>>>>>>> 309506aaaf21913b5869a6a43aeabf68161f810f
  </div>
)

const CustomFooter = ({ homepage }) => {
  const { isAuthenticated, login, logout } = useAuth()
  return (
    <div className={cx(footerContent, { [footerContentDefault]: !homepage })}>
      <Row className={footerRow}>
        <Column
          colSm={12}
          colMd={3}
          colLg={3}
          colXl={3}
          className={footerLinkCol}
        >
          <h1>Freight Trust & Clearing</h1>
        </Column>

        <Column colSm={12} colMd={7} colLg={7} colXl={8}>
          <div className={footerLinkCol}>
            {ProductFooter}
            {CoporateFooter}
            <div className={hideOnMobile}>{SolutionsFooter}</div>
            <div className={hideOnMobile}>{ResourcesFooter}</div>
          </div>
        </Column>

        <Column
          colSm={12}
          colMd={0}
          colLg={0}
          colXl={0}
          className={footerLinkColMobile}
        >
          <div className={footerLinkCol}>
            {SolutionsFooter}
            {ResourcesFooter}
          </div>
        </Column>

        <Column
          colSm={12}
          colMd={2}
          colLg={2}
          colXl={1}
          className={footerButtonCol}
        >
<<<<<<< HEAD
          <div>
            <Button Register
            href="https://freight.page.link/demo"
            />
          </div>
=======
          {/* <div>
            <Button>Register</Button>
          </div> */}
>>>>>>> 309506aaaf21913b5869a6a43aeabf68161f810f
          <div>
            {isAuthenticated() ? (
              <Button kind="tertiary" onClick={logout}>
                Log Out
              </Button>
            ) : (
              <Button kind="tertiary" onClick={login}>
                Log In
              </Button>
            )}
          </div>
        </Column>
      </Row>

      <Row className={footerDiectoryRow}>
        <Column colMd={6} colLg={6}>
          <p></p>
          <p>LEI: 254900C9UJMDGJ0ILK56</p>
          <p>support@freight.zendesk.com</p>
          <p></p>
        </Column>

        <Column colMd={2} colLg={2}></Column>

        <Column colMd={2} colLg={2}>
          <a href="https://twitter.com/freighttrustnet">Twitter</a>
          <a href="#top">Linkedin</a>
          <a href="https://medium.com/freighttrust">Medium</a>
          <a href="https://t.mehttps://freight.page.link/demotrust">Telegram</a>
        </Column>

        <Column colMd={2} colLg={2}>
          <a href="https://github.com/freight-trust">GitHub</a>
          <a href="http://fr8.link">Network</a>
          <a href="http://freightlayer.io">Block Explorer</a>
        </Column>
      </Row>

      <Row className={footerLastRow}>
        <Column colMd={6} colLg={6}>
          <div className={footerFollowSection}>
            <span Terms of Service href="https://github.com/freight-trust/legal/blob/master/src/terms-of-service.md" />
            <span Privacy Policy href="https://github.com/freight-trust/legal/blob/master/src/privacy-policy.md" />
            <span Security href="https://github.com/freight-trust/infrastructure/tree/master/security" />
          </div>
        </Column>

        <Column colMd={6} colLg={6}>
          <div className={footerFollowSection}>
            <p>(C) 2020 FreightTrust and Clearing Corporation</p>
          </div>
        </Column>
      </Row>
    </div>
  )
}

export default CustomFooter
