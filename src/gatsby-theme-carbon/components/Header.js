import React, { useContext } from 'react'
import { Link } from 'gatsby'
import {
  Header as ShellHeader,
  HeaderMenuButton,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react'
import { AppSwitcher20, Close20 } from '@carbon/icons-react'
import cx from 'classnames'

import HeaderNav from 'gatsby-theme-carbon/src/components/HeaderNav/HeaderNav'
import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext'
import useMetadata from 'gatsby-theme-carbon/src/util/hooks/useMetadata'

import {
  header,
  switcherButtonOpen,
  skipToContent,
  headerName,
  headerButton,
  switcherButton,
} from 'gatsby-theme-carbon/src/components/Header/Header.module.scss'

import {
  navLists,
  navLeftBorder,
  navLink,
  globalBar,
} from './Header.module.scss'
// href="https://freight.page.link/request-information"
const Header = ({ children }) => {
  const { leftNavIsOpen, toggleNavState, switcherIsOpen } = useContext(
    NavContext
  )
  const { navigationStyle } = useMetadata()

  return (
    <ShellHeader aria-label="Header" className={header}>
      <SkipToContent href="#main-content" className={skipToContent} />

      <HeaderMenuButton
        className={cx('bx--header__action--menu', headerButton)}
        aria-label="Open menu"
        onClick={() => {
          toggleNavState('leftNavIsOpen')
          toggleNavState('switcherIsOpen', 'close')
        }}
        isActive={leftNavIsOpen}
      />

      <Link className={headerName} to="https://freight.page.link/request-information">
        Freight Trust
      </Link>

      <div className={navLists}>
        <div className={navLeftBorder}></div>
        <Link className={navLink} to="https://freight.page.link/request-information">
          Products
        </Link>
        <Link className={navLink} to="https://freight.page.link/request-information">
          Solutions
        </Link>
        <Link className={navLink} to="https://freight.page.link/request-information">
          Partners
        </Link>
        <Link className={navLink} to="https://freight.page.link/request-information">
          Marketplace
        </Link>
        <Link className={navLink} to="https://freight.page.link/request-information">
          Pricing
        </Link>
      </div>

      {navigationStyle && <HeaderNav />}

      <HeaderGlobalBar className={globalBar}>
        <HeaderGlobalAction
          className={cx(headerButton, switcherButton, {
            [switcherButtonOpen]: switcherIsOpen,
          })}
          aria-label="Switch"
          onClick={() => {
            toggleNavState('switcherIsOpen')
            toggleNavState('searchIsOpen', 'close')
            toggleNavState('leftNavIsOpen', 'close')
          }}
        >
          {switcherIsOpen ? <Close20 /> : <AppSwitcher20 />}
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </ShellHeader>
  )
}

export default Header
