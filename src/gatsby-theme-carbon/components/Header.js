/*
 *   SPDX-License-Identifier: Apache-2.0
 *   SPDXVersion: SPDX-2.2
 *   SPDX-FileCopyrightText: Copyright 2020 FreightTrust and Clearing Corporation
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import React from 'react'
import { Link } from 'gatsby'
import {
  Header as ShellHeader,
  SkipToContent,
} from 'carbon-components-react'
// import { AppSwitcher20, Close20 } from '@carbon/icons-react'

import HeaderNav from 'gatsby-theme-carbon/src/components/HeaderNav/HeaderNav'
// import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext'
import useMetadata from 'gatsby-theme-carbon/src/util/hooks/useMetadata'

import {
  header,
  skipToContent,
  headerName,
} from 'gatsby-theme-carbon/src/components/Header/Header.module.scss'

import {
  navLists,
  navLeftBorder,
  navLink,
} from './Header.module.scss'
// href="https://freight.page.link/request-information"
const Header = () => {
  // const { leftNavIsOpen, toggleNavState, switcherIsOpen } = useContext(
  //   NavContext
  // )
  const { navigationStyle } = useMetadata()

  return (
    <ShellHeader aria-label="Header" className={header}>
      <SkipToContent href="#main-content" className={skipToContent} />


      <Link className={headerName} to="https://freight.page.link/request-information">
        Freight Trust
      </Link>

      <div className={navLists}>
        <div className={navLeftBorder}></div>
        <Link className={navLink} to="https://freight.page.link/request-information">
          Supply Chain
        </Link>
        <Link className={navLink} to="https://freight.page.link/request-information">
          Trade Finance
        </Link>
        <Link className={navLink} to="https://freight.page.link/request-information">
          Solutions
        </Link>
        <Link className={navLink} to="https://freight.page.link/request-information">
          Network
        </Link>
        <Link className={navLink} to="https://freight.page.link/request-information">
          Pricing
        </Link>
      </div>

      {navigationStyle && <HeaderNav />}

    </ShellHeader>
  )
}

export default Header