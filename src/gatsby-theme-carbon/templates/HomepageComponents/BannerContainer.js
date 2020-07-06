import React from "react";
import {
  Row,
  Column,
} from "gatsby-theme-carbon";
import { Button } from "carbon-components-react";
import { banner, bannerContainer, bannerRow, buttonContainer } from "./BannerContainer.module.scss";

const BannerText = ({ title, content, buttonLabel, buttonComponent, buttonAction }) => (
  <div className={banner}>
    <h1>{title}</h1>
    <p>
      {content}
    </p>
    <div className={buttonContainer}>
      {
        buttonComponent ? buttonComponent :
        <Button href="#top" kind="primary" onClick={() => buttonAction()}>
          {buttonLabel}
        </Button>
      }
    </div>
  </div>
);

export const BannerContainer = ({
  children,
  title,
  content,
  buttonLabel,
  buttonComponent,
  buttonAction,
}) => (
  <div className={bannerContainer}>
    {/* <img src="https://www.xeneta.com/hubfs/Xeneta_2020_website_assets/Images/Xeneta_homepage_header@4x.png" alt="banner" className={bannerImage} /> */}
    <Row className={bannerRow}>
      <Column colSm={12} colMd={7} colLg={7}>
        <BannerText
          title={title}
          content={content}
          buttonLabel={buttonLabel}
          buttonComponent={buttonComponent}
          buttonAction={buttonAction}
        />
      </Column>
      <Column colSm={12} colMd={5} colLg={5}>
      </Column>
    </Row>
  </div>
);