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

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const mapStateToProps = state => {
    return { places: state.remotePlaces.slice(0, 10) };
};

const SearchResults = ({ places }) => {

console.log(places);
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {places.map((place, i) => {
                return (<ListItem key={i} alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt={place.title} src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={place.title}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        place.title
                                    </Typography>
                                    {place.body}
                                </React.Fragment>
                            }
                        />
                        <Divider variant="inset" component="li" />
                    </ListItem>

                    )
            })}

        </List>
    );
};

export default connect(mapStateToProps)(SearchResults);
