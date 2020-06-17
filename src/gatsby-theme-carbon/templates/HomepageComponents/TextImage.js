import React from 'react'
import { Row, Column } from 'gatsby-theme-carbon'
import { Button } from 'carbon-components-react'
import {
  textContainer,
  textImageContainer,
  imageContainer,
} from './TextImage.module.scss'

const TextContainer = ({ title, content, buttonLabel }) => (
  <div className={textContainer}>
    <h1>{title}</h1>
    <p>{content}</p>
    <Button href="#top" kind="secondary">
      {buttonLabel}
    </Button>
  </div>
)

export const TextImage = ({
  children,
  title,
  content,
  buttonLabel,
  leftText,
  rightText,
}) => (
  <div className={textImageContainer}>
    {rightText ? (
      <Row>
        <Column colSm={12} colMd={6} colLg={6}>
          <div className={imageContainer}>{children}</div>
        </Column>
        <Column colSm={12} colMd={6} colLg={6}>
          <TextContainer
            title={title}
            content={content}
            buttonLabel={buttonLabel}
          />
        </Column>
      </Row>
    ) : (
      <Row>
        <Column colSm={12} colMd={6} colLg={6}>
          <TextContainer
            title={title}
            content={content}
            buttonLabel={buttonLabel}
          />
        </Column>
        <Column colSm={12} colMd={6} colLg={6}>
          <div className={imageContainer}>{children}</div>
        </Column>
      </Row>
    )}
  </div>
)
