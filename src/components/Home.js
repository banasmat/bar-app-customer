import React, {useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import PlaceSearchForm from './PlaceSearchForm';
import PlaceGeolocate from './PlaceGeolocate';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PlaceSearchResults from "./PlaceSearchResults";
import {getPlacesData} from "../actions";
import {PLACES_DATA_LOADED} from "../constants/action-types";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({
    banner: {
        backgroundAttachment:	"scroll",
        backgroundColor:		"#796856",
        // backgroundImage:		"url(images/overlay.png), url(images/main-banner.jpeg)",
        // backgroundPosition:	    "center",
        // backgroundRepeat:		"no-repeat",
        // backgroundSize:		    "cover",
        color: "#fff",
        textAlign: "center",
        width: "100%",
        height: "100%",
    },
    searchResultsWrapper: {
        position: 'relative',
    }
}));


const mapDispatchToProps = dispatch => ({
    clearPlacesData: () => {
        dispatch({ type: PLACES_DATA_LOADED, payload: [] });
    }
});

function Home({ clearPlacesData }){

    useEffect(() => {
        clearPlacesData();
    });

    const classes = useStyles();

    return (
        <section className={classes.banner}>
            <Box p={4} pb={10}>
                <Box my={4}>
                    <Typography variant="h5" gutterBottom>
                        Znajdź lokal
                    </Typography>
                </Box>
                <PlaceSearchForm />
                <div className={classes.searchResultsWrapper}>
                    <PlaceSearchResults />
                </div>
                <Box my={4}>
                    <Typography variant="h5" gutterBottom>
                        lub
                    </Typography>
                </Box>
                <PlaceGeolocate />
            </Box>
        </section>
    );
}

export default connect(null, mapDispatchToProps)(Home);