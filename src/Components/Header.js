import React from 'react';
import { AppBar, Toolbar, Button, makeStyles, IconButton, Icon,
  Tooltip, useScrollTrigger, Fab } from '@material-ui/core';
import jugglerIcon from '../assets/jugglerIcon.png';
import { EmailOutlined, LinkedIn, DescriptionOutlined, KeyboardArrowUp } from '@material-ui/icons';
// import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import { Link as RouterLink } from "react-router-dom";

const HeaderTabs = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Fitness",
    href: "/fitness",
  }
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
    label: 'Resume',
    url: 'https://www.google.com',
    component: <DescriptionOutlined/>
  }
]

const useStyles = makeStyles(() => ({
  logo: {
    height: 40,
    width: 40,
  },
  headerPageButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
  },
  toolbar: {
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between'
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
  const {logo, headerPageButton, headerIconButton, toolbar,
    fabLocation} = useStyles();

  const scrollTriggered = useScrollTrigger() && window.pageYOffset !== 0;

  const getHeaderButtons = () => {
    return (
      <div style={{flex: 1, textAlign: 'left'}}>
        {HeaderTabs.map(({label, href}) => (
          <Button {...{
            key: label,
            color: 'inherit',
            to: href,
            component: RouterLink,
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
        {HeaderIcons.map(({label, url, component}) => (
          <Tooltip title={label} key={label}>
            <IconButton {...{
              key: label,
              color: 'inherit',
              target: '_blank',
              href: url,
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
  
  return (
    <div>
      <header>
        <AppBar color={scrollTriggered ? 'default' : 'transparent'}>
          <Toolbar className={toolbar}>
            <div>{getHeaderButtons()}</div>
            <img src={jugglerIcon} alt='Technology Juggler Icon' className={logo} onClick={() => {console.log(window.pageYOffset)}}/>
            <div>{getHeaderIcons()}</div>
          </Toolbar>
        </AppBar>
      </header>
      {scrollTriggered ?
        <Toolbar className={fabLocation}>
          <Fab color='secondary' size='small' onClick={() => {window.scrollTo(0,0)}}>
            <KeyboardArrowUp />
          </Fab>
        </Toolbar> : null}
    </div>
  );
}