import React from "react";
import validateLogin from "./validateLogin";
import {LinkContainer} from 'react-router-bootstrap';
import useFormValidation from "./useFormValidation";
import TopMenuBar from "../components/TopMenuBar";
import firebase from "../firebase";
import Firebase from 'firebase'
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  Container,
  makeStyles,
  Grid,
  Link,
  CssBaseline
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const INITIAL_STATE ={
    name: "",
    email: "",
    password: ""
}

function Login(props) {
    const classes = useStyles();
    const {handleSubmit, handleBlur, handleChange, values, errors, isSubmitting} = useFormValidation(
        INITIAL_STATE,
        validateLogin,
        authenticateUser
    );


    Firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("User is signed in");
            props.history.push("/")
        } else {
            console.log("User is not signed in");

        }
    });


    const[login, setLogin] = React.useState(true);
    const [firebaseError, setFirebaseError] = React.useState(null)

    async function authenticateUser() {
        const {name, email, password} = values

        try{
            login
                ? await firebase.login(email, password)
                : await firebase.register(name, email, password)
            props.history.push("/")
        } catch (err) {
           console.error("Authentication error", err)
            setFirebaseError(err.message)
        }


    }
    return (

        <Container component="main" maxWidth="xs">
          <CssBaseline />
            <TopMenuBar block pageName="Quantified Dashboard" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={false} backButton={false} backRoutePage="/"/>

            <div className={classes.paper}>
            <Typography component="h1" variant="h5">{login ? "Sign in" : "Create Account"}</Typography>
            <form  onSubmit={handleSubmit} className={classes.form} noValidate>
                {!login && (<TextField
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                    variant="outlined"
                    type="text"
                    label="Your name"
                    autoComplete="on"
                    fullWidth
                    margin="normal"
                    required
                    autoFocus
                />)}
                <TextField
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    variant="outlined"
                    label="Email Address"
                    id="email"
                    fullWidth
                    margin="normal"
                    required
                    value={values.email}
                    type="email"
                    autoComplete="email"
                    autoFocus
                    error={errors.email}
                    helperText={errors.email ? errors.email : ' '}
                />
                <TextField
                    onChange={handleChange}
                    name="password"
                    variant="outlined"
                    id="password"
                    margin="normal"
                    label="Password"
                    fullWidth
                    required
                    type="password"
                    onBlur={handleBlur}
                    value={values.password}
                    autoComplete="current-password"
                    error={errors.password}
                    helperText={errors.password ? errors.password : ' '}
                />
                {firebaseError && <p className="error-text">{firebaseError}</p> }
                {login && (<FormControlLabel
                  control={<Checkbox value="remember" color="primary"/>}
                  label="Remember me"
                />)}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  className={classes.submit}
                >
                    Submit
                </Button>
                    <Grid container>
                      <Grid item xs>
                        <LinkContainer to="/forgotpassword">
                          <Link variant="body2">
                              Forgot password?
                          </Link>
                        </LinkContainer>
                      </Grid>
                      <Grid item xs>
                        <Link variant="body2"
                                onClick={() => setLogin(prevLogin => !prevLogin)}>
                            {login ? "Register" : "Already have an account?"}
                        </Link>
                      </Grid>
                    </Grid>
            </form>
          </div>
        </Container>
    );
}

export default Login;
