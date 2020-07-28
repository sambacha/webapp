import React from 'react'
import { FourOhFour } from 'gatsby-theme-carbon'

const links = [
  { href: 'https://freighttrust.com', text: 'Homepage' },
  { href: '', text: '' },
  { href: '', text: '' },
  { href: 'https://freighttrust.com', text: 'Homepage' },
  { href: 'https://freighttrust.com', text: 'Status Trace' },
]

const Custom404 = () => <FourOhFour links={links} />

export default Custom404
