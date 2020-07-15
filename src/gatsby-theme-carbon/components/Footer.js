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
    <a href="/freight">Partners</a>
    <a href="/freight">Integrations</a>
    <a href="/freight">Service Bus</a>
    <a href="/freight">API</a>
    <a href="/freight">ABI</a>
    <a href="/freight">Rulebook</a>
    <a href="/freight">Omnibus</a>
    <a href="/freight">Legal Parity</a>
  </div>
)

const CoporateFooter = (
  <div>
    <h5>Corporate</h5>
    <a href="/freight">About Us</a>
    <a href="/freight">Press</a>
    <a href="/freight">Customers</a>
    <a href="/freight">Branding</a>
    <a href="/freight">Whitepapers</a>
    <a href="/freight">System Status</a>
    <a href="/freight">Compliance</a>
  </div>
)

const SolutionsFooter = (
  <div>
    <h5>Solutions</h5>
    <a href="/freight">Trucking</a>
    <a href="/freight">Maritime</a>
    <a href="/freight">Intermodal</a>
    <a href="/freight">Finance</a>
  </div>
)

const ResourcesFooter = (
  <div>
    <h5>Resources</h5>
    <a href="/freight">Documentation</a>
    <a href="/freight">Open Source</a>
    <a href="/freight">Developers</a>
    <a href="/freight">Engineering</a>
    <a href="/freight">Security</a>
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
          <div>
            <Button>Register</Button>
          </div>
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
          <a href="https://t.me/freighttrust">Telegram</a>
        </Column>

        <Column colMd={2} colLg={2}>
          <a href="https://github.com/freight-trust">GitHub</a>
          <a href="https://gitlab.com/fr8">GitLab Devops</a>
          <a href="https://hub.docker.com/r/freightcorp">Docker</a>
        </Column>
      </Row>

      <Row className={footerLastRow}>
        <Column colMd={6} colLg={6}>
          <div className={footerFollowSection}>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Security</span>
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
