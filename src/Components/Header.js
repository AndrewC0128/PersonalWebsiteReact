import React, { useState, useEffect, useRef } from 'react'
import { AppBar, Toolbar, Button, makeStyles, IconButton, Icon, Tooltip, Fab, Drawer, MenuItem } from '@material-ui/core'
// import jugglerIcon from '../assets/jugglerIcon.png'
import { EmailOutlined, LinkedIn, GitHub, DescriptionOutlined, KeyboardArrowUp, Menu, Apps } from '@material-ui/icons'
import { Link, useHistory } from 'react-router-dom'
import { title as HomepageTitle } from '../Pages/HomePage'
import { title as AboutTitle } from '../Pages/AboutMePage'
import { HeaderBarSize, mobileViewWidth } from '../Helpers'
import { useViewport } from './Viewport'

const useStyles = makeStyles(() => ({
  logo: {
    height: 40,
    width: 40
  },
  headerPageButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px'
  },
  toolbar: {
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    height: HeaderBarSize
    // paddingLeft is 0 when the screen is less than 900px
    // '@media (max-width: 900px)': {
    //   paddingLeft: 0
    // }
  },
  headerIconButton: {
    color: 'inherit'
  },
  fabLocation: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    zIndex: 100
  }
}))

export default function Header () {
  const { headerPageButton, headerIconButton, toolbar, fabLocation } = useStyles()

  // Mobile View Handling
  const { width } = useViewport()
  const [buttonDrawer, handleButtonDrawer] = useState(false)
  const [iconDrawer, handleIconDrawer] = useState(false)

  // Scroll Tracking
  const previousY = useRef(0)
  const [scrollTriggered, changeScrollState] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      // Get current Y position
      const currentY = window.scrollY
      if (currentY > 385) {
        changeScrollState(true)
      } else {
        changeScrollState(false)
      }
      // Reset Y position
      previousY.current = currentY
    }
    // Add the listener
    window.addEventListener('scroll', handleScroll) // { passive: true }
    // Remove the listener
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollTriggered])

  // Dynamic Routing with Anchors
  const history = useHistory()
  const [currentPage, changeCurrentPage] = useState('/')
  useEffect(() => {
    return history.listen((location) => {
      // If pages are changed or no anchor exists, go to top of the requested page
      if (location.pathname !== currentPage || location.hash === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      // If the anchor is set, timeout and wait for the component to render then go to it
      if (location.hash !== '') {
        setTimeout(() => {
          const reqElement = document.getElementById(location.hash.substr(1))
          if (reqElement) {
            // Note getBoundingClientRect() gives you the element's difference from top of screen, not page
            const locationOnPage = reqElement.getBoundingClientRect().top - HeaderBarSize + window.scrollY
            window.scrollTo({ top: locationOnPage, behavior: 'smooth' })
          }
        }, 500)
      }
      changeCurrentPage(location.pathname)
    })
  }, [history, currentPage])

  const getHeaderButtons = () => {
    return (
      <>
        {HeaderTabs.map(({ label, href }) => (
          <Button key={label} {...{
            key: label,
            color: 'inherit',
            to: href,
            component: Link,
            className: headerPageButton,
            onClick: () => handleButtonDrawer(false)
          }} style={{ color: width < mobileViewWidth ? null : (scrollTriggered ? 'black' : 'white') }}>
            {width < mobileViewWidth ? <MenuItem>{label}</MenuItem> : <>{label}</>}
          </Button>
        ))}
      </>
    )
  }

  const getHeaderIcons = () => {
    return (
      <>
        {HeaderIcons.map(({ label, url, component, downloadName }) => (
          <Tooltip key={label} title={label}>
            <IconButton {...{
              key: label,
              color: 'inherit',
              target: '_blank',
              rel: 'noopener noreferrer',
              href: url,
              // download: downloadName,
              className: headerIconButton,
              onClick: () => handleIconDrawer(false)
            }}>
            <Icon style={{ color: width < mobileViewWidth ? null : (scrollTriggered ? 'black' : 'white') }}>
              {component}
            </Icon>
            </IconButton>
          </Tooltip>
        ))}
      </>
    )
  }

  const mobileView = () => {
    return (
      <>
        <div style={{ flex: 1, textAlign: 'left' }}>
          <IconButton {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'Hamburger Icon',
            // 'aria-haspopup': 'true',
            onClick: () => handleButtonDrawer(true)
          }}>
            <Menu style={{ color: scrollTriggered ? 'black' : 'white' }}/>
          </IconButton>
          <Drawer {...{
            anchor: 'left',
            open: buttonDrawer,
            onClose: () => handleButtonDrawer(false)
          }}>
            {getHeaderButtons()}
          </Drawer>
        </div>
        {/* <img src={jugglerIcon} alt='Technology Juggler Icon' className={logo}/> */}
        <div style={{ flex: 1, textAlign: 'right' }}>
          <IconButton {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'Grid Icon',
            // 'aria-haspopup': 'true',
            onClick: () => handleIconDrawer(true)
          }}>
            <Apps style={{ color: scrollTriggered ? 'black' : 'white' }}/>
          </IconButton>
          <Drawer {...{
            anchor: 'right',
            open: iconDrawer,
            onClose: () => handleIconDrawer(false)
          }}>
            {getHeaderIcons()}
          </Drawer>
        </div>
      </>
    )
  }

  const webView = () => {
    return (
      <>
        <div style={{ flex: 1, textAlign: 'left' }}>
          {getHeaderButtons()}
        </div>
        {/* <img src={jugglerIcon} alt='Technology Juggler Icon' className={logo}/> */}
        <div style={{ flex: 1, textAlign: 'right' }}>
          {getHeaderIcons()}
        </div>
      </>
    )
  }

  return (
    <div>
      <header>
        <AppBar color={scrollTriggered ? 'default' : 'transparent'}>
          <Toolbar className={toolbar}>
            {width < mobileViewWidth ? mobileView() : webView()}
          </Toolbar>
        </AppBar>
      </header>
      {scrollTriggered
        ? <Toolbar className={fabLocation}>
            <Fab size='small' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <KeyboardArrowUp />
            </Fab>
          </Toolbar>
        : null}
    </div>
  )
}

const HeaderTabs = [
  {
    label: HomepageTitle,
    href: '/'
  },
  {
    label: AboutTitle,
    href: '/about'
  }
  // {
  //   label: FitnessTitle,
  //   href: '/fitness'
  // }
]

const HeaderIcons = [
  {
    label: 'Email',
    url: 'mailto:andrewc0128@gmail.com',
    component: <EmailOutlined/>
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/andrewcase1/',
    component: <LinkedIn/>
  },
  {
    label: 'GitHub',
    url: 'https://github.com/AndrewC0128',
    component: <GitHub/>
  },
  {
    label: 'Resume',
    url: '/Resume_ACASE.pdf',
    // downloadName: 'Resume_ACASE.pdf',
    component: <DescriptionOutlined/>
  }
]
