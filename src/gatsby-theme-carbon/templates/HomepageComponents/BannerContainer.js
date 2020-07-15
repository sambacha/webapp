import React from 'react'
import { Row, Column } from 'gatsby-theme-carbon'
import { Button } from 'carbon-components-react'
import './BannerContainer.scss'

const BannerText = ({
  title,
  content,
  buttonLabel,
  buttonComponent,
  buttonAction,
}) => (
  <div className="banner">
    <h1>{title}</h1>
    <p>{content}</p>
    <div className="buttonContainer">
      {buttonComponent ? (
        buttonComponent
      ) : (
        <Button
          href="#top"
          kind="primary"
          onClick={buttonAction ? () => buttonAction() : () => {}}
        >
          {buttonLabel}
        </Button>
      )}
    </div>
  </div>
)

export const BannerContainer = ({
  title,
  content,
  buttonLabel,
  buttonComponent,
  buttonAction,
  noBgImage,
}) => {
  console.log('noBgImage', noBgImage)
  return (
    <div
      className={`bannerContainer ${noBgImage ? '' : 'bannerContainerWithBg'}`}
    >
      <Row className="bannerRow">
        <Column colSm={12} colMd={7} colLg={7}>
          <BannerText
            title={title}
            content={content}
            buttonLabel={buttonLabel}
            buttonComponent={buttonComponent}
            buttonAction={buttonAction}
          />
        </Column>
        <Column colSm={12} colMd={5} colLg={5}></Column>
      </Row>
    </div>
  )
}
