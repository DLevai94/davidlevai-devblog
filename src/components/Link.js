import React from 'react'
import GatsbyLink from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

const Link = ({ children, to, ...other }) => {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <OutboundLink href={to} target="_blank" {...other}>
      {children}
    </OutboundLink>
  )
}

export default Link
