import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import PlaceIcon from '@material-ui/icons/Place';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));


export default function Geolocate(props){

    const classes = useStyles();

    return (
        <Paper variant="outlined" className={classes.root}>
            <IconButton type="submit" className={classes.iconButton} aria-label="geolocate">
                <PlaceIcon/>
            </IconButton>
            <Link
                component="button"
                variant="body2"
                onClick={() => {
                    console.info("I'm a button.");
                }}
            >
                Zlokalizuj mnie
            </Link>

        </Paper>
    );
}
