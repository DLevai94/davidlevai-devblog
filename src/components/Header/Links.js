import React from 'react'
import { Link } from 'gatsby'
import { useTheme } from '../Theming'
import ThemeToggler from './ThemeToggler'

export default () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      {/* <Link to="/about" activeClassName="active" aria-label="View blog page">
        What I Do
      </Link>
      <Link
        to="/bookshelf"
        activeClassName="active"
        aria-label="View blog page"
      >
        Bookshelf
      </Link>
      <Link
        to="/portfolio"
        activeClassName="active"
        aria-label="View blog page"
      >
        Portfolio
      </Link> */}

      <ThemeToggler
        css={{}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  )
}
