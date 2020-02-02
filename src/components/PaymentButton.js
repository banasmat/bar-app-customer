import React, {useEffect} from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    paymentChoice: {
        textAlign: "center"
    },
    paymentImage: {
        width: "100%",
        maxWidth: "80px",
        height: "auto"
    },
    paymentLabel: {
        display: "block",
        textAlign: "center"
    },
    submitButton: {
        width: "100%",
    }
}));

const mapStateToProps = state => {
    return { cart: state.cart };
};


const PaymentButton = ({ cart }) => {

    const [value, setValue] = React.useState('payu');

    const handleChange = event => {
        setValue(event.target.value);
    };

    const classes = useStyles();

    return (
        <React.Fragment>
            <FormControl component="fieldset">
                <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
                    <FormControlLabel
                        value="payu"
                        labelPlacement="top"
                        control={<Radio color="primary" />}
                        label={
                            <React.Fragment>
                                <img src="images/payu-logo.png" className={classes.paymentImage} />
                                <span className={classes.paymentLabel}>PayU</span>
                            </React.Fragment>
                        }
                    />
                    <FormControlLabel
                        value="creditcard"
                        labelPlacement="top"
                        control={<Radio color="primary" />}
                        className={classes.paymentChoice}
                        label={
                            <React.Fragment>
                                <img src="images/visa-logo.png" className={classes.paymentImage} />
                                <span className={classes.paymentLabel}>Karta kredytowa</span>
                            </React.Fragment>
                        }
                    />
                </RadioGroup>
            </FormControl>
            <Box pt={4}>
                <Button variant="contained" color="primary" className={classes.submitButton}>
                    Zamów i zapłać
                </Button>
            </Box>
        </React.Fragment>
    );
};

export default connect(mapStateToProps)(PaymentButton);
