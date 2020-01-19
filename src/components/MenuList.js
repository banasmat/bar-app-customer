import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NumericInput from 'react-numeric-input';
import Fab from '@material-ui/core/Fab';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";

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
    expandablePanel: {
        flexGrow: 1,
    },
    amountInput: {
        display: "block"
    },
    amountInputLabel: {
        display: "block"
    },
}));

const mapStateToProps = state => {
    return { menuItems: state.remoteMenuItems };
};

const MenuList = ({ menuItems }) => {

    const classes = useStyles();

    return (
        <List className={classes.root}>
            {menuItems.map((menuItem) => {
                return (<ListItem key={menuItem.id} alignItems="flex-start">
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <ListItemAvatar>
                                        <Avatar alt={menuItem.name} src={menuItem.imgUrl} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={menuItem.name}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textPrimary"
                                                    className={classes.listItemTitle}
                                                >
                                                    {menuItem.name}
                                                </Typography>
                                                {menuItem.price/100} zł
                                            </React.Fragment>
                                        }
                                    />
                                </ExpansionPanelSummary>
                                <Divider />
                                <ExpansionPanelDetails>
                                    <Grid
                                        container
                                      spacing={2}
                                      className={classes.expandablePanel}
                                      justify="space-between"
                                    >
                                        <Grid item xs={4}>
                                            <FormLabel className={classes.amountInputLabel}>
                                                Ilość
                                            </FormLabel>
                                            <NumericInput
                                                mobile
                                                className={classes.amountInput}
                                                step={ 1 }
                                                min={ 1 }
                                                precision={ 0 }
                                                value={ 1 }
                                                size={ 1 }
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Fab
                                                variant="extended"
                                                color="primary"
                                                aria-label="add"
                                                className={classes.margin}
                                            >
                                                Dodaj do zamówienia
                                            </Fab>
                                        </Grid>
                                    </Grid>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </ListItem>
                    )
            })}
        </List>
    );
};

export default connect(mapStateToProps)(MenuList);
