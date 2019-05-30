import React from 'react';
import {Link} from "react-router-dom"


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from "./HomeIcon"


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: 0,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 500,
      },
    },
  },
}));

function SearchAppBar() {
  const classes = useStyles();
  return (
    <div id="nav" className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
          >
            <HomeIcon />
          </IconButton>
          
          <Typography className={classes.title} variant="h6">
          <a href="/albums" className="album-link">Albums</a> 
          </Typography>
          
          {/* <div className={classes.search}> */}
            <div className={classes.searchIcon}>
              {/* <SearchIcon /> */}
            </div>
            {/* <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            /> */}
            <span className="avatar">
          <img src="data:image/png;base64,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"></img>
          </span>
          {/* </div> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SearchAppBar;
