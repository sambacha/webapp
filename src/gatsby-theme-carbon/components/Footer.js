import React from "react";
import {
  footerContent,
  footerContentDefault,
  footerRow,
  footerLinkCol,
  footerButtonCol,
  footerLastRow,
  footerFollowSection,
} from "./Footer.module.scss";
import { Button } from "carbon-components-react";
import { Row, Column } from "gatsby-theme-carbon";
import cx from 'classnames';

const CustomFooter = ({homepage}) => (
  <div className={footerContent} className={cx(footerContent, { [footerContentDefault]: !homepage })}>
    <Row className={footerRow}>
      <Column colMd={3} colLg={3} colXl={3}>
        <h1>FREIGHT TRUST</h1>
      </Column>
      <Column colMd={7} colLg={7} colXl={8}>
        <div className={footerLinkCol}>
          <div>
            <h5>Product</h5>
            <a href="#">EDI/API Logs and Metrics</a>
            <a href="#">EDI/API Monitoring</a>
            <a href="#">Embedded Logs</a>
            <a href="#">GraphQL Analytics</a>
            <a href="#">Extensions</a>
            <a href="#">Infrastructure</a>
            <a href="#">Customs and Tariffs</a>
            <a href="#">IFTA and SAFER</a>
          </div>
          <div>
            <h5>Corporate</h5>
            <a href="#">About Us</a>
            <a href="#">Press</a>
            <a href="#">Customers</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">System Status</a>
            <a href="#">Security & Compliance</a>
          </div>
          <div>
            <h5>Solutions</h5>
            <a href="#">Trucking</a>
            <a href="#">Maritime</a>
            <a href="#">Intermodal</a>
            <a href="#">NVOCCs</a>
          </div>
          <div>
            <h5>Resources</h5>
            <a href="#">Documentation</a>
            <a href="#">Open Source</a>
            <a href="#">Developer Relations</a>
            <a href="#">API Engineering</a>
            <a href="#">API Security</a>
            <a href="#">Customer Success</a>
            <a href="#">Network Stats</a>
            <a href="#">Block Explorer</a>
            <a href="#">Smart Contract Addresses</a>
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
          <Button kind="tertiary">Log In</Button>
        </div>
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
);

export default CustomFooter;
