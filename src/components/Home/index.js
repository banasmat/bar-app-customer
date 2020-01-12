import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Search from './Search';
import Geolocate from './Geolocate';
import TopBar from './../TopBar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SearchResults from "./SearchResults";

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
}));

function Home(props){

    const classes = useStyles();

    return (
        <>
            <TopBar/>
            <section className={classes.banner}>
                <Box p={4} pb={10}>
                    <Box my={4}>
                        <Typography variant="h5" gutterBottom>
                            ZNAJDŹ LOKAL
                        </Typography>
                    </Box>
                    <Search />
                    <SearchResults />
                    <Box my={4}>
                        <Typography variant="h5" gutterBottom>
                            LUB
                        </Typography>
                    </Box>
                    <Geolocate />
                </Box>
            </section>
        </>
    );
}

export default Home;