import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import PlaceIcon from '@material-ui/icons/Place';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff'
    },
    button: {
        width: '100%',
        color: '#fff',
        borderColor: '#fff',
        textTransform: 'capitalize',
        fontSize: "18px"
    },
    icon: {
        padding: 10,
    },
}));


export default function PlaceGeolocate(props){

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Button
                variant="outlined"
                color="white"
                className={classes.button}
            >
                <PlaceIcon className={classes.icon}/>
                Zlokalizuj mnie
            </Button>

        </Box>
    );
}
