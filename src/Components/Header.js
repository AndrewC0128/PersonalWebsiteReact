import React, { useState, useEffect, useRef } from 'react';
import { AppBar, Toolbar, Button, makeStyles, IconButton, Icon, Tooltip, Fab } from '@material-ui/core';
import jugglerIcon from '../assets/jugglerIcon.png';
import { EmailOutlined, LinkedIn, GitHub, DescriptionOutlined, KeyboardArrowUp } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';
import { title as HomepageTitle } from '../Pages/HomePage';
import { title as AboutTitle } from '../Pages/AboutMePage';
import { HeaderBarSize, mobileViewWidth } from '../Helpers';
import { useViewport } from './Viewport';

const useStyles = makeStyles(() => ({
  logo: {
    height: 40,
    width: 40,
  },
  headerPageButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px',
  },
  toolbar: {
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    height: HeaderBarSize
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
    position: 'fixed'
  }
}));

export default function Header() {
  const {logo, headerPageButton, headerIconButton, toolbar, fabLocation} = useStyles();
  const { width } = useViewport();

  // Scroll Tracking
  const previousY = useRef(0);
  const [scrollTriggered, changeScrollState] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Get current Y position
      const currentY = window.scrollY;
      if (currentY > 385) {
        changeScrollState(true);
      } else {
        changeScrollState(false);
      }
      // Reset Y position
      previousY.current = currentY;
    };
    // Add the listener
    window.addEventListener('scroll', handleScroll, ); // { passive: true }
    // Remove the listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollTriggered])

  // Used for dynamic routing with anchors
  const history = useHistory();
  const [currentPage, changeCurrentPage] = useState('/');
  useEffect(() => {
    return history.listen((location) => {
      // If pages are changed or no anchor exists, go to top of the requested page
      if (location.pathname !== currentPage || location.hash === '') {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
      // If the anchor is set, timeout and wait for the component to render then go to it
      if (location.hash !== '') {
        setTimeout(() => {
          const reqElement = document.getElementById(location.hash.substr(1));
          if (reqElement) {
            // Note getBoundingClientRect() gives you the element's difference from top of screen, not page
            const locationOnPage = reqElement.getBoundingClientRect().top - HeaderBarSize + window.scrollY;
            window.scrollTo({top: locationOnPage, behavior: 'smooth'});
          }
        }, 500)
      }
      changeCurrentPage(location.pathname);
    }) 
  }, [history, currentPage])

  const getHeaderButtons = () => {
    return (
      <div style={{flex: 1, textAlign: 'left'}}>
        {HeaderTabs.map(({label, href}) => (
          <Button {...{
            key: label,
            color: 'inherit',
            to: href,
            component: Link,
            className: headerPageButton
          }} style={{color: scrollTriggered ? 'black' : 'white'}}>
            {label}
          </Button>
        ))}
      </div>
    )
  }

  const getHeaderIcons = () => {
    return (
      <div style={{flex: 1, textAlign: 'right'}}>
        {HeaderIcons.map(({label, url, component, downloadName}) => (
          <Tooltip title={label} key={label}>
            <IconButton {...{
              key: label,
              color: 'inherit',
              target: '_blank',
              rel: 'noopener noreferrer',
              href: url,
              download: downloadName,
              className: headerIconButton
            }}>
            <Icon style={{color: scrollTriggered ? 'black' : 'white'}}>
              {component}
            </Icon>
            </IconButton>
          </Tooltip>
        ))}
      </div>
    )
  }

  const mobileView = () => {
    return(
      <div>
        <header>
          <AppBar color={scrollTriggered ? 'default' : 'transparent'}>
            <Toolbar className={toolbar}>
              {getHeaderButtons()}
              <img src={jugglerIcon} alt='Technology Juggler Icon' className={logo}/>
              {getHeaderIcons()}
            </Toolbar>
          </AppBar>
        </header>
        {scrollTriggered ?
          <Toolbar className={fabLocation}>
            <Fab size='small' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <KeyboardArrowUp />
            </Fab>
          </Toolbar> : null}
      </div>
    )
  }

  const webView = () => {
    return(
      <div>
        <header>
          <AppBar color={scrollTriggered ? 'default' : 'transparent'}>
            <Toolbar className={toolbar}>
              {getHeaderButtons()}
              <img src={jugglerIcon} alt='Technology Juggler Icon' className={logo}/>
              {getHeaderIcons()}
            </Toolbar>
          </AppBar>
        </header>
        {scrollTriggered ?
          <Toolbar className={fabLocation}>
            <Fab size='small' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <KeyboardArrowUp />
            </Fab>
          </Toolbar> : null}
      </div>
    )
  }
  
  return (width < mobileViewWidth ? <mobileView/> : <webView/>);
}

const HeaderTabs = [
  {
    label: HomepageTitle,
    href: '/',
  },
  {
    label: AboutTitle,
    href: '/about',
  },
  // {
  //   label: FitnessTitle,
  //   href: '/fitness',
  // }
]

const HeaderIcons = [
  {
    label: 'Email',
    url: 'mailto:andrew_case1@baylor.edu',
    component: <EmailOutlined/>,
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
    downloadName: 'Resume_ACASE.pdf',
    component: <DescriptionOutlined/>
  }
]