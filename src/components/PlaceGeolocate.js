import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import PlaceIcon from '@material-ui/icons/Place';
import { usePosition } from 'use-position';
import {connect} from "react-redux";
import {getPlacesDataByGeolocation} from "../actions";
import { useAlert } from "react-alert";

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

const PlaceGeolocate = ({getPlacesDataByGeolocation}) => {

    const classes = useStyles();

    const alert = useAlert();

    const { latitude, longitude, timestamp, accuracy, error } = usePosition();

    const handleSubmit = (e) => {
        if(null !== error){
            alert.error('Błąd geolokalizacji.', {
                timeout: 2000,
            })
        } else {
            getPlacesDataByGeolocation(latitude, longitude);
        }
        console.log(latitude);
        console.log(accuracy);
        console.log(error);
    };

    return (
        <Box className={classes.root}>
            <Button
                variant="outlined"
                className={classes.button}
                onClick={handleSubmit}
            >
                <PlaceIcon className={classes.icon}/>
                Zlokalizuj mnie
            </Button>

        </Box>
    );
};

export default connect(null, { getPlacesDataByGeolocation })(PlaceGeolocate);