import React from 'react';
import '../styles/Header.css';
import { AppBar, Toolbar, Button, makeStyles, IconButton, Icon, Tooltip } from '@material-ui/core';
import jugglerIcon from '../assets/jugglerIcon.png';
import { EmailOutlined, LinkedIn, DescriptionOutlined } from '@material-ui/icons';
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
    label: "LinkedIn",
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
    height: 40, width: 40,
  },
  headerPageButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
  },
  toolbar: {
    backgroundColor: '#400CCC',
    display: 'flex',
    justifyContent: 'space-between'
  },
  headerIconButton: {
    color: 'inherit'
  }
}));

export default function Header() {
  const {logo, headerPageButton, headerIconButton, toolbar} = useStyles();

  const displayDesktop = () => {
    return (<Toolbar className={toolbar}>
              <div>{getHeaderButtons()}</div>
              <img src={jugglerIcon} alt='Technology Juggler Icon' className={logo}/>
              <div>{getHeaderIcons()}</div>
			      </Toolbar>);
  };

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
          }}>{label}</Button>
        ))}
      </div>
    )
  }

  const getHeaderIcons = () => {
    return (
      <div style={{flex: 1, textAlign: 'right'}}>
        {HeaderIcons.map(({label, url, component}) => (
          <Tooltip title={label}>
            <IconButton {...{
              key: label,
              color: 'inherit',
              target: '_blank',
              href: url,
              className: headerIconButton
            }}>
              <Icon>{component}</Icon>
            </IconButton>
          </Tooltip>
        ))}
      </div>
    )
  }
  
  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}