import React from 'react';
import styled from '@emotion/styled';
import { Grid, Column, Row } from 'gatsby-theme-carbon';

import { grid, row, firstColumn, secondColumn } from './Callout.module.scss';

const StyledGrid = styled(Grid)`
  background-color: ${props =>
    props.theme.colors[props.backgroundColor] ||
    props.backgroundColor ||
    props.theme.colors.interactive02};
  color: ${props =>
    props.theme.colors[props.color] ||
    props.color ||
    props.theme.colors.inverse01}};
  width: 100%;
  max-width: 100%;
`;

const HomepageCallout = ({ leftText, rightText, ...rest }) => (
  <StyledGrid className={grid} {...rest}>
    <Row className={row}>
      <Column colLg={2} colMd={2}></Column>
      <Column colLg={4} colMd={4} className={firstColumn}>
        {leftText()}
      </Column>
      <Column colLg={1} colMd={1}>
      </Column>
      <Column colLg={4} colMd={4} className={secondColumn}>
        {rightText()}
      </Column>
      <Column colLg={1} colMd={1}></Column>
    </Row>
  </StyledGrid>
);

HomepageCallout.defaultProps = {
  leftText: function renderLeftText() {
    return (
      <>
        Freight <strong>Trust & Clearing</strong>
      </>
    );
  },
  rightText: function renderRightText() {
    return (
      <p>
        <strong>Freight Trust Network</strong>
        <br />
      </p>
    );
  },
};

export default HomepageCallout;
