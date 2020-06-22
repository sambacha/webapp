import React from "react";
import {
  Row,
  Column,
} from "gatsby-theme-carbon";
import { Button } from "carbon-components-react";
import { banner, bannerContainer, bannerRow, bannerImage } from "./BannerContainer.module.scss";

const BannerText = ({ title, content, buttonLabel }) => (
  <div className={banner}>
    <h1>{title}</h1>
    <p>
      {content}
    </p>
    <Button href="#top" kind="primary">
      {buttonLabel}
    </Button>
  </div>
);

export const BannerContainer = ({
  children,
  title,
  content,
  buttonLabel,
}) => (
  <div className={bannerContainer}>
    <img src="https://www.xeneta.com/hubfs/Xeneta_2020_website_assets/Images/Xeneta_homepage_header@4x.png" alt="banner" className={bannerImage} />
    <Row className={bannerRow}>
      <Column colSm={12} colMd={7} colLg={7}>
        <BannerText
          title={title}
          content={content}
          buttonLabel={buttonLabel}
        />
      </Column>
      <Column colSm={12} colMd={5} colLg={5}>
      </Column>
    </Row>
  </div>
);