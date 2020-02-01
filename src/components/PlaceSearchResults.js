import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'absolute',
        zIndex: 100,
    },
    listItemTitle: {
        display: "block"
    },
}));

const mapStateToProps = state => {
    return { places: state.remotePlaces.slice(0, 10) };
};

const PlaceSearchResults = ({ places }) => {

    const classes = useStyles();
    const history = useHistory();

    const handlePlaceClick = (e) => {
        history.push("/menu/" + e.currentTarget.dataset.id);
    };

    if(places.length > 0){
        return (
            <List className={classes.root}>
                {places.map((place) => {
                    return (<ListItem key={place.id} alignItems="flex-start" onClick={handlePlaceClick} data-id={place.id}>
                            <ListItemAvatar>
                                <Avatar alt={place.name} src={place.imgUrl} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={place.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            color="textPrimary"
                                            className={classes.listItemTitle}
                                        >
                                            {place.name}
                                        </Typography>
                                        {place.address}
                                    </React.Fragment>
                                }
                            />
                            <Divider variant="inset" component="li" />
                        </ListItem>
                    )
                })}
            </List>
        );
    }
    return (<React.Fragment/>);
};

export default connect(mapStateToProps)(PlaceSearchResults);
