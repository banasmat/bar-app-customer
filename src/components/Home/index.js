import React, {useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Search from './Search';
import Geolocate from './Geolocate';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SearchResults from "./SearchResults";
import {getPlacesData} from "../../actions";
import {PLACES_DATA_LOADED} from "../../constants/action-types";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({
    banner: {
        backgroundAttachment:	"scroll",
        backgroundColor:		theme.palette.success.main,
        // backgroundImage:		"url(images/overlay.png), url(images/main-banner.jpeg)",
        // backgroundPosition:	    "center",
        // backgroundRepeat:		"no-repeat",
        // backgroundSize:		    "cover",
        color: "#fff",
        textAlign: "center",
        width: "100%",
        height: "100%"
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
                        ZNAJDŹ LOKAL
                    </Typography>
                </Box>
                <Search />
                <div className={classes.searchResultsWrapper}>
                    <SearchResults className={classes.searchResults} />
                </div>
                <Box my={4}>
                    <Typography variant="h5" gutterBottom>
                        LUB
                    </Typography>
                </Box>
                <Geolocate />
            </Box>
        </section>
    );
}

export default connect(null, mapDispatchToProps)(Home);