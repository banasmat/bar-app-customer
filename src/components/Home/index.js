import React from "react";
import Search from './Search';
import Geolocate from './Geolocate';
import {makeStyles} from "@material-ui/core/styles";

import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundAttachment:	"scroll",
        backgroundColor:		"#666",
        backgroundImage:		"url(images/main-banner.jpeg)",
        backgroundPosition:	    "center",
        backgroundRepeat:		"no-repeat",
        backgroundSize:		    "cover",
        color: "#fff",
        textAlign: "center",
        width: "100%",
        height: "100%"
    },
    contentWrapper: {
        padding:	20,
    },
}));

function Home(props){

    const classes = useStyles();

    return (
        <section className={classes.root}>
            <div className={classes.contentWrapper}>
                <Typography component="h1" variant="h3" gutterBottom>
                    Bar app
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Znajdź lokal, w którym się znajdujesz
                </Typography>
                <Search />
                <Typography variant="h5" gutterBottom>
                    Lub
                </Typography>
                <Geolocate />
            </div>
        </section>
    );
}

export default Home;