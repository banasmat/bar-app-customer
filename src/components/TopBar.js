import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
    NavLink ,
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    bar: {
        backgroundColor: "rgb(77, 54, 25);", //https://www.color-hex.com/palettes/39589.png
    },
    title: {
        flexGrow: 1,
        marginRight: theme.spacing(2),
        color: "#fff",
        textDecoration: "none"
    },
}));

export default function TopBar() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <NavLink to="/" className={classes.title}>
                        <Typography variant="h6">
                            Bar App
                        </Typography>
                    </NavLink>
                    {/*<Button color="inherit">Login</Button>*/}
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}