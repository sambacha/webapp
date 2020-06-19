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
} from './Footer.module.scss'
import { Button } from 'carbon-components-react'
import { Row, Column } from 'gatsby-theme-carbon'
import { useAuth } from "react-use-auth";
import cx from 'classnames'

const CustomFooter = ({ homepage }) => {
  const { isAuthenticated, login, logout } = useAuth();
  return (
    <div className={cx(footerContent, { [footerContentDefault]: !homepage })}>
      <Row className={footerRow}>
        <Column colMd={3} colLg={3} colXl={3} className={footerLinkCol}>
          <h1>Freight Trust & Clearing</h1>
        </Column>
        <Column colMd={7} colLg={7} colXl={8}>
          <div className={footerLinkCol}>
            <div>
              <h5>Product</h5>
              <a href="/freight">EDI & XML</a>
              <a href="/freight">RESTful API</a>
              <a href="/freight">SOAP & WSDL</a>
              <a href="/freight">Inflight Mapping</a>
              <a href="/freight">Inflight Parser</a>
              <a href="/freight">AS2/OFTP2</a>
              <a href="/freight">Customs and Tariffs</a>
              <a href="/freight">Digital Legal Parity</a>
            </div>
            <div>
              <h5>Corporate</h5>
              <a href="/freight">About Us</a>
              <a href="/freight">Press</a>
              <a href="/freight">Customers</a>
              <a href="/freight">Branding</a>
              <a href="/freight">Whitepapers</a>
              <a href="/freight">System Status</a>
              <a href="/freight">Security & Compliance</a>
            </div>
            <div>
              <h5>Solutions</h5>
              <a href="/freight">Trucking</a>
              <a href="/freight">Maritime</a>
              <a href="/freight">Intermodal</a>
              <a href="/freight">Finance</a>
            </div>
            <div>
              <h5>Resources</h5>
              <a href="/freight">Documentation</a>
              <a href="/freight">Open Source</a>
              <a href="/freight">Developer Relations</a>
              <a href="/freight">API Engineering</a>
              <a href="/freight">API Security</a>
              <a href="/freight">Customer Success</a>
              <a href="/freight">Network Stats</a>
              <a href="/freight">Block Explorer</a>
              <a href="/freight">Smart Contract Addresses</a>
            </div>
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
            {
              isAuthenticated() ? <Button kind="tertiary" onClick={logout}>Logout</Button> :
              <Button kind="tertiary" onClick={login}>Login</Button>
            }
            {/* <Button kind="tertiary">Log In</Button> */}
          </div>
        </Column>
      </Row>

      <Row className={footerDiectoryRow}>
        <Column colMd={6} colLg={6}>
          <p>Address: 1424 4TH ST Santa Monica, CA</p>
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
