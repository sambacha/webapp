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

      <Link
        className={headerName}
        to="https://freight.page.link/request-information"
      >
        Freight Trust
      </Link>

      <div className={navLists}>
        <div className={navLeftBorder}></div>
        <Link className={navLink} to="/features">
          Solutions
        </Link>
        <Link
          className={navLink}
          to="https://freight.page.link/request-information"
        >
          Vehicles
        </Link>
        <Link
          className={navLink}
          to="https://freight.page.link/request-information"
        >
          Trade Finance
        </Link>
        <Link className={navLink} to="/dashboard">
          Trade Network
        </Link>
        <Link className={navLink} to="/trading">
          Protocol
        </Link>
      </div>

      {navigationStyle && <HeaderNav />}
    </ShellHeader>
  )
}

export default Header
